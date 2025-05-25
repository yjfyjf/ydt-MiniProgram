import config from './config.js';
import qqMapuni from '../libs/qqmap-wx-jssdk.js';
import comfunc from './comfunc.js';
export default {
    /**
     * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
     * @param   {string} url 要跳转的地址
     * @returns {void}
     */
    switchTab (url) {
        uni.switchTab({ url: url });
    },
    /**
     * 保留当前页面,跳转到应用内的某个页面.不能跳到 tabbar 页面
     * @param   {string} url 要跳转的地址
     * @returns {void}
     */
    navigateTo (url) {
        uni.navigateTo({ url: url });
    },
    /**
     * 关闭当前页面 返回上一页面或多级页面
     * @param   {number} n 要返回层级数
     * @returns {void}
     */
    navigateBack (n) {
        let delta = n || 1;
        uni.navigateBack({
            delta: delta
        });

        // let pages = getCurrentPages();
        // let delta = pages[pages.length - 2];
        // if (n) {
        //     delta = pages[pages.length - 2 - n];
        // }
        // uni.navigateBack({
        //     delta: delta
        // });
    },
    /**
     * 关闭当前页面,跳转到应用内的某个页面.但是不允许跳转到 tabbar 页面
     * @param   {string} url 要跳转的地址
     * @returns {void}
     */
    redirectTo (url) {
        uni.redirectTo({ url: url });
    },
    /**
     * 关闭所有页面，打开到应用内的某个页面
     * @param   {string} url 需要跳转的应用内页面路径，路径后可以带参数
     * @returns {void}
     */
    reLaunch (url) {
        uni.reLaunch({ url: url });
    },
    /**
     * 弹窗提示 自动关闭
     * @param {string-object} option 提示或配置对象
     * @returns {void}
     */
    showToast (option) {
        let o = null;
        if (typeof (option) === 'object') {
            o = Object.assign({}, option);
        } else {
            o = {
                title: option,
                icon: 'none',
                duration: 3000,
                complete: function () {
                    // console.log(888888);
                }
            };
        }
        uni.showToast(o);
    },
    /**
     * 弹窗提示 手动关闭
     * @param {string-object} option 提示或配置对象
     * @returns {void}
     */
    showModal (option) {
        let o = null;
        if (typeof (option) === 'object') {
            o = Object.assign({}, option);
        } else {
            o = {
                title: '提示',
                content: option,
                showCancel: false
            };
        }
        uni.showModal(o);
    },
    /**
     * 显示等待框
     * @param {string-object} option 提示或配置对象
     * @returns {void}
     */
    showLoading (option) {
        let o = null;
        if (typeof (option) === 'object') {
            o = Object.assign({}, option);
        } else {
            o = {
                title: '加载中',
                mask: true
            };
        }
        uni.showLoading(option);
    },
    /**
     * 关闭等待框
     * @returns {void}
     */
    hideLoading () {
        uni.hideLoading();
    },
    /**
     * 设置内容到剪贴板
     * @param {string} data 要设置的数据
     * @param {function} callback 设置成功时回调
     * @returns {void}
     */
    setClipboardData (data, callback) {
        uni.setClipboardData({
            data: data,
            success (res) {
                callback && callback();
            },
            fail (error) {
                console.log(error);
            }
        });
    },
    /**
     * 读取剪贴板的内容
     * @param {function} callback 设置成功时回调
     * @returns {void}
     */
    getClipboardData (callback) {
        uni.getClipboardData({
            success (res) {
                callback && callback(res.data);
            }
        });
    },
    /**
    * 异步设置本地缓存信息
    * @param {string} key 键
    * @param {string} val 值
    * @param {function} callback 设置成功回调
    * @returns {string} 返回存储在本地的字符串(json)
    */
    setStorage (key, val, callback) {
        uni.setStorage({
            key: key,
            data: val,
            success () {
                callback && callback();
            }
        });
    },
    /**
    * 异步读取本地缓存信息
    * @param {string} key 键值
    * @param {function} callback 设置成功回调
    * @returns {string} 返回存储在本地的字符串(json)
    */
    getStorage (key, callback) {
        uni.getStorage({
            key: key,
            success (res) {
                callback && callback(res.data);
            }
        });
    },
    /**
    * 异步删除本地缓存信息
    * @param {string} key 键值
    * @param {function} callback 设置成功回调
    * @returns {string} 返回存储在本地的字符串(json)
    */
    removeStorage (key, callback) {
        uni.removeStorage({
            key: key,
            success (res) {
                callback && callback();
            }
        });
    },
    /**
    * 同步设置本地缓存信息
    * @param {string} key 键
    * @param {string} val 值
    * @returns {string} 返回存储在本地的字符串(json)
    */
    setStorageSync (key, val) {
		console.log(key, val)
        uni.setStorageSync(key, val);
    },
    /**
    * 同步读取本地缓存信息
    * @param {string} key 键值
    * @returns {string} 返回存储在本地的字符串(json)
    */
    getStorageSync (key) {
        return uni.getStorageSync(key);
    },
    /**
    * 同步删除本地缓存信息
    * @param {string} key 键值
    * @returns {void}
    */
    removeStorageSync (key) {
        uni.removeStorageSync(key);
    },
    /**
    * 获取收货地址
    * @param {funcrion} callback 回调
    * @returns {void}
    */
    chooseAddress (callback) {
        uni.chooseAddress({
            success (res) {
                callback && callback(res);
                // console.log(res.userName);
                // console.log(res.postalCode);
                // console.log(res.provinceName);
                // console.log(res.cityName);
                // console.log(res.countyName);
                // console.log(res.detailInfo);
                // console.log(res.nationalCode);
                // console.log(res.telNumber);
            }
        });
    },
    /**
    * 检查授权情况 有弹窗提示
    * @param {string} scope 权限设置标志
    * @param {function} callback 授权成功时回调
    * @param {function} errorcallback 未授权时或未发起过授权时的回调
    * @returns {void}
    */
    getAuthorize (scope, callback, errorcallback) {
        uni.authorize({
            scope: scope,
            success (res) {
                callback && callback(res);
            },
            fail () {
                errorcallback && errorcallback();
            }
        });
    },
    /**
    * 检查授权情况 无弹窗
    * @param {string} scope 权限设置标志
    * @param {function} callback 授权成功时回调
    * @param {function} errorcallback 未授权时或未发起过授权时的回调
    * @returns {void}
    */
    getSetting (scope, callback, errorcallback) {
        uni.getSetting({
            success (res) {
                if (res.authSetting[scope] === false) {
                    callback && callback();
                } else {
                    errorcallback && errorcallback();
                }
            }
        });
    },
    /**
    * 打开授权设置页面
    * @param {function} callback 授权成功时回调
    * @returns {void}
    */
    openSetting (callback) {
        uni.openSetting({
            success (ret) {
                console.log(typeof callback);
                // uni.chooseAddress({
                //     success (res) {
                //         console.log('success', res);
                //     },
                //     fail (err1) {
                //         // console.log('fail:', err)
                //     }
                // });

                callback && callback(ret);
            }
        });
    },
    /**
    * 选择图片
    * @param {object} option 配置
    * @param {function} callback 授权成功时回调
    * @param {function} errorcallback 未授权时或未发起过授权时的回调
    * @returns {void}
    */
    chooseImage (option, callback, errorcallback) {
        let o = Object.assign({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success (res) {
                console.log(res);
                callback && callback(res.tempFilePaths);
            },
            fail () {
                errorcallback && errorcallback();
            }
        }, option || {});
        uni.chooseImage(o);
    },
    /**
    * 选择视频
    * @param {object} option 配置
    * @param {function} callback 授权成功时回调
    * @param {function} errorcallback 未授权时或未发起过授权时的回调
    * @returns {void}
    */
    chooseVideo (option, callback, errorcallback) {
        let o = Object.assign({
            sourceType: ['album', 'camera'],
            camera: 'back',
            compressed: true,
            success (res) {
                callback && callback(res);
            },
            fail (err) {
                errorcallback && errorcallback(err);
            }
        }, option || {});
        uni.chooseVideo(o);
    },
    /**
     * 文件上传
     * @param {string} option 配置或路径
     * @param {function} callback 成功回调
     * @param {function} errorcallback 失败回调
     * @returns {void}
     */
    uploadFile (option, callback, errorcallback) {
        let o;
        console.log('checkIsObject==', comfunc.checkIsObject(option));
        if (comfunc.checkIsObject(option)) {
            o = Object.assign({
                url: option.url,
                filePath: option.filePath,
                name: option.name,
                success (res) {
                    console.log('res===', res);
                    console.log('res.data===', res.data);
                    let data = JSON.parse(res.data);

                    if (data.code === 0) {
                        // console.log('data.data', data.data);
                        callback && callback(data.data);
                    } else {
                        uni.showToast({
                            title: data.message,
                            icon: 'none',
                            duration: 3000
                        });
                    }
                },
                fail (err) {
                    console.log('err===', err);
                    errorcallback && errorcallback();
                }
            }, option);
        } else {
            o = {
                url: config.baseUrl + '/upload/image?version=1.0&terminal=4',
                filePath: option,
                name: 'file',
                success (res) {
                    let data = JSON.parse(res.data);
                    callback && callback(data.data);
                },
                fail () {
                    errorcallback && errorcallback();
                }
            };
        }
        uni.uploadFile(o);
    },
    /**
     * 批量上传图片
     * @param {string} list 选择的图片列表
     * @param {function} callback 成功回调
     * @param {function} errorcallback 失败回调
     * @returns {void}
     */
    batchUpload (list, callback) {
        let that = this;
        Promise.all(
            list.map((item, index) => {
                return new Promise((resolve, reject) => {
                    that.uploadFile(item, (data) => {
                        callback && resolve(callback(data));
                    }, () => {
                        resolve(callback(null));
                    });
                });
            })
        );
    },
    /**
     * 批量下载
     * @param {string} list 选择的图片列表
     * @param {function} callback 成功回调
     * @param {function} errorcallback 失败回调
     * @returns {void}
     */
    batchDownload (list, callback) {
        let that = this;
        Promise.all(
            list.map((item, index) => {
                return new Promise((resolve, reject) => {
                    that.downloadFile(item, (data) => {
                        callback && resolve(callback(data));
                    }, () => {
                        resolve(callback(null));
                    });
                });
            })
        );
    },
    /**
     * 文件下载
     * @param {string-object} option 配置或路径
     * @param {function} callback 成功回调
     * @param {function} errorcallback 失败回调
     * @returns {void}
     */
    downloadFile (option, callback, errorcallback) {
        let o = null;
        if (typeof (option) === 'object') {
            o = Object.assign({}, option);
        } else {
            o = {
                url: option,
                success (res) {
                    if (res.statusCode === 200) {
                        callback && callback(res);
                    } else {
                        errorcallback && errorcallback();
                    }
                },
                fail () {
                    console.log('文件下载失败');
                    errorcallback && errorcallback();
                }
            };
        };
        uni.downloadFile(o);
    },
    /**
     * 预览图片
     * @param {array} urls 必选 需要预览的图片http链接列表
     * @param {string} current 当前显示图片的http链接
     * @returns {void}
     */
    previewImage (urls, current) {
        uni.previewImage({
            current: current,
            urls: urls
        });
    },
    /**
     * 获取地理坐标
     * @param {object} option 配置
     * @param {function} callback 成功回调
     * @param {function} errorcallback 失败回调
     * @returns {void}
     */
    getLocation (option, callback, errorcallback) {
        let def = {
            type: 'gcj02',
            altitude: true,
            success (res) {
                callback && callback(res);
            },
            fail (error) {
                errorcallback && errorcallback(error);
            }
        };
        let o = option ? Object.assign(option, option) : def;
        uni.getLocation(o);
    },
    /**
    * 转换地理坐标
    * @param {function} callback 成功回调
    * @param {function} errorcallback 失败回调
    * @returns {void}
    */
    conversLocation (callback, errorcallback) {
        let qqmapsdk = new qqMapuni({
            key: config.qqMapKey
        });

        this.getLocation(null, (res) => {
            let obj = {
                latitude: res.latitude,
                longitude: res.longitude
            };
            qqmapsdk.reverseGeocoder({
                location: obj,
                success (addressRes) {
                    callback && callback(addressRes);
                },
                fail (error) {
                    errorcallback && errorcallback(error);
                }
            });
        });
    },
    /**
    * 授权弹窗提示
    * @param {function} callback 开启授权后进一步的操作
    * @returns {void}
    */
    showAuthTips (callback) {
        let that = this;
        that.showModal({
            content: '该功能需要开启授权后才能使用,点击确定去开启',
            success (res) {
                if (res.confirm) {
                    // console.log('====' + (typeof callback));
                    that.openSetting(callback);
                } else if (res.cancel) {
                    console.log('用户点击取消');
                }
            }
        });
    },
    /**
     * 设置角标数量
     * @param {number} index 必选 tab下标
     * @param {string} text 必选 显示的数量
     * @returns {void}
     */
    setTabBarBadge (index, text) {
        uni.setTabBarBadge({
            index: index,
            text: text
        });
    },
    /**
     * 移除角标数量
     * @param {number} index 必选 tab下标
     * @returns {void}
     */
    removeTabBarBadge (index) {
        uni.removeTabBarBadge({ index: index });
    }
};
