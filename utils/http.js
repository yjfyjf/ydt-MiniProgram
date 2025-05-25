import config from './config.js';
import validate from './validate.js';
import comfunc from './comfunc.js';
import store from '@/store/index.js'
export default {
    /**
     * get请求
     * @param   {string}   url           请求地址
     * @param   {object}   data          请求数据
     * @param   {object}   option        header配置
     * @param   {function} callback      code == 0回调
     * @param   {function} errorcallback code > 0 回调
     * @returns {function} function
     */
    httpGet (url, data, option, callback, errorcallback) {
        return this.request('GET', url, data, option, callback, errorcallback);
    },

    /**
     * post请求
     * @param   {string}   url           请求地址
     * @param   {object}   data          请求数据
     * @param   {object}   option        header配置
     * @param   {function} callback      code == 0回调
     * @param   {function} errorcallback code > 0 回调
     * @returns {function} function
     */
    httpPost (url, data, option, callback, errorcallback) {
        return this.request('POST', url, data, option, callback, errorcallback);
    },

    /**
     * put请求
     * @param   {string}   url           请求地址
     * @param   {object}   data          请求数据
     * @param   {object}   option        header配置
     * @param   {function} callback      code == 0回调
     * @param   {function} errorcallback code > 0 回调
     * @returns {function} function
     */
    httpPut (url, data, option, callback, errorcallback) {
        return this.request('PUT', url, data, option, callback, errorcallback);
    },

    /**
     * DELETE请求
     * @param   {string}   url           请求地址
     * @param   {object}   data          请求数据
     * @param   {object}   option        header配置
     * @param   {function} callback      code == 0回调
     * @param   {function} errorcallback code > 0 回调
     * @returns {function} function
     */
    httpDelete (url, data, option, callback, errorcallback) {
        return this.request('DELETE', url, data, option, callback, errorcallback);
    },

    /**
     * 请求方式
     * @param   {string}   method        请求方法
     * @param   {string}   url           请求地址
     * @param   {object}   data          请求数据
     * @param   {object}   option        header配置
     * @param   {function} callback      code == 0或外域请求时回调
     * @param   {function} errorcallback code > 0 回调(外域请求不回调)
     * @returns {function} function
     */
    request (method, url, data, option, callback, errorcallback) {
        // 检查判断是完整url
        let isOutReq = validate.rexDomainPrefix(url),
            apiUrl = null,
            flag = null,
            header = option || {
                'Content-Type': 'application/json;charset=utf-8',
				'Token': uni.getStorageSync('Token')
            },
            urlPath = validate.rexMatchHost(url),
            baseUrlPath = validate.rexMatchHost(config.baseUrl),
            payUrlPath = validate.rexMatchHost(config.payUrl);

        apiUrl = isOutReq ? url : (config.baseUrl + url);

        return new Promise((resolve, reject) => {
            uni.request({
                url: apiUrl,
                data: data,
                method: method,
                dataType: 'json',
                header: header,
                success: function (response) {
                    let res = response.data;
                    if ((isOutReq && comfunc.checkURL(urlPath, [baseUrlPath, payUrlPath])) || !isOutReq) {
                        if (res.code == '0') {
                            if (res.data) {
								if(res.data.token){
									uni.setStorageSync('Token', res.data.token)
								}
                            }
                            callback && resolve(callback(res));
                        } else if(res.statusCode === '-1' && res.message == '未设置/无有效提醒') { // erp维护接口单独处理 不抛提示
							errorcallback && errorcallback(res);
						} else {
							uni.hideLoading({
								mask: true,
								title: '',
								complete() {}
							});
							if (res.statusCode === '401') {
								uni.clearStorageSync();
								uni.showToast({
									icon: 'none',
									title: '请先登录',
									// #ifdef MP-WEIXIN
									duration: 2000,
									// #endif
									mask: true
								});
								setTimeout(() => {
									uni.switchTab({
									    url: '/pages/home/home'
									});
									// uni.setStorageSync('alignLogin', true);
								},500);
							} else {
								uni.showToast({
									icon: 'none',
									title: res.message,
									// #ifdef MP-WEIXIN
									duration: 1000,
									// #endif
									mask: true
								});
								errorcallback && errorcallback(res);
							}
                        }
                    } else {
                        callback && resolve(callback(res));
                    }
                },
                fail: function (err) {
					uni.hideLoading({
						mask: true,
						itle: '',
						complete() {}
					});
					uni.showToast({
						icon: 'none',
						title: '网络异常,稍后重试',
						// #ifdef MP-WEIXIN
						duration: 2000,
						// #endif
						mask: true
					});
				},
                complete: function (response) {
                }
            });
        });
    }
};
