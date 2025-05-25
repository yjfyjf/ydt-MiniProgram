import http from './http.js';
import wxApi from './wxApi.js';
import config from './config.js';
export default (Vue) => {
    Vue.mixin({
        // 全局混入 解决调用了navigateBack再进来时页面数据没有被清空问题
        onLoad () {
            console.log('全局混入的执行了');
            if (this.$initData$) {
                Object.assign(this, JSON.parse(this.$initData$));
            } else {
                this.$initData$ = JSON.stringify(this.$data);
            }
        },
        methods: {
            /**
             * 设置全局变量值
             * @param {string} key 键 注：不能使用横杆方式命名
             * @param {string} v  值
             * @returns {void}
             */
            resetGloalData (key, v) {
                this.globalData[key] = v;
            },
            /**
             * 获取全局变量值
             * @param {string} key 键
             * @returns {void}
             */
            getGloalData (key) {
                return this.globalData[key];
            },
            /**
            * 移除全局变量中的属性
            * @param {string} key 键
            * @returns {void}
            */
            removeCloalDataAttr (key) {
                let obj = this.getGloalData(key);
                if (obj && obj.hasOwnProperty(key)) {
                    delete obj[key];
                }
            },
            /**
             * 设置购物车数量
             * @param {string} key 键 注：不能使用横杆方式命名
             * @param {string} v  值
             * @returns {void}
             */
            setDefCartNum () {
                let cartNum = this.getGloalData('cartNum');
                if (cartNum) {
                    wxApi.setTabBarBadge(1, cartNum.toString());
                } else {
                    let data = Object.assign(config.apiParam);
                    http.httpGet('/cart/getCartQuantity', data, null, (res) => {
                        let quantity = res.quantity;
                        if (quantity > 0) {
                            this.resetGloalData('cartNum', quantity);
                            wxApi.setTabBarBadge(1, quantity.toString());
                        } else {
                            wxApi.removeTabBarBadge(1);
                        }
                    }, () => {});
                }
            },
            /**
            * 按组件名称获取组件对象
            * @param {object} parent 对象参数
            * @param {string} tag 组件名称
            * @returns {void}
            */
            getComponentByAttr (parent, tag) {
                // for (let c of parent.$children) {
                //     if (c.$options._componentTag === tag) {
                //         console.log(888);
                //         console.log(c);
                //         return c;
                //     }
                // }

                let list = [];
                parent.$children.map(item => {
                    if (item.$attrs.id === tag) {
                        list.push(item);
                    }
                });
                return list;

                // let list = [];
                // parent.$children.map(item => {
                //     if (item.$options._componentTag === tag) {
                //         list.push(item);
                //     }
                // });
                // return list;
            }
        }
    });
};
