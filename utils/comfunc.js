import wxApi from './wxApi.js';
export default {
    /**
     * 按约定字段跳转
     * @param {object} vm 对象
     * @param {object} target 跳转目标
     * @returns {void}
     */
    compileNative (vm, target) {
        let uri = this.parseUrl(target);
        console.log('success compileNative');
        console.log(uri);

        switch (uri.path) {
        case 'product': {
            let path = '/pages/product-detail/main?productId=' + uri.params.productId;
            if (uri.params.activityId) {
                path += '&activityId=' + uri.params.activityId;
            }
            wxApi.navigateTo(path);
            // wxApi.navigateTo('/pages/product-detail/main?productId=' + uri.params.productId + '&activityId=' + uri.params.activityId);
        } break;
        // 店主礼包
        case 'freeGiftBag': {
            wxApi.navigateTo('/pages/free/freeGiftBag/main?orderType=0&productId=' + uri.params.productId);
        } break;
        // 免费领
        case 'freeArea': {
            wxApi.navigateTo('/pages/free/freeArea/main?freeTabCt=' + uri.params.freeTabCt);
        } break;
        // json配置
        case 'jsonContainer': {
            wxApi.navigateTo('/pages/container/json/main?pageId=' + uri.params.pageId);
        } break;
        // h5配置
        case 'h5Container': {
            wxApi.navigateTo('/pages/container/h5/main?pageId=' + uri.params.pageId);
        } break;
            // 买家秀
        case 'buy': {
            wxApi.navigateTo('/pages/product-detail/main?productId=' + uri.params.productId + '&pageId=buy');
        } break;
        }
    },
    /**
     * 解析参数
     * @param {string} url 参数
     * @returns {void}
     */
    parseUrl (url) {
        return {
            source: url,
            path: url.split('?')[0],
            params: (function () {
                let i,
                    s,
                    seg = url.split('?'),
                    ret = {};
                if (seg.length > 1) {
                    let list = seg[1].split('&');
                    for (i = 0; i < list.length; i++) {
                        if (!list[i]) {
                            continue;
                        }
                        s = list[i].split('=');
                        ret[s[0]] = s[1];
                    }
                }
                return ret;
            })()
            // file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
            // hash: a.hash.replace('#', ''),
            // path: a.pathname.replace(/^([^\/])/, '/$1'),
            // relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
            // segments: a.pathname.replace(/^\//, '').split('/')
        };
    },
    dateFormat (fmt, str) {
        let d = (str ? new Date(str.replace(/-/g, '/')) : new Date()),
            ret,
            opt = {
                // 年
                'Y+': d.getFullYear() < 10 ? '0' + d.getFullYear() : d.getFullYear().toString(),
                // 月
                'm+': (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1).toString(),
                // 日
                'd+': d.getDate() < 10 ? '0' + d.getDate() : d.getDate().toString(),
                // 时
                'H+': d.getHours() < 10 ? '0' + d.getHours() : d.getHours().toString(),
                // 分
                'M+': d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes().toString(),
                // 秒
                'S+': d.getSeconds() < 0 ? '0' + d.getSeconds() : d.getSeconds().toString()
                // 有其他格式化字符需求可以继续添加，必须转化成字符串
            };
        // for (let k in opt) {
        //     ret = new RegExp('(' + k + ')').exec(fmt);
        //     if (ret) {
        //         fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')));
        //     };
        // };
        for (let k in opt) {
            ret = new RegExp('(' + k + ')').exec(fmt);
            if (ret) {
                // fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')));
                fmt = fmt.replace(ret[1], opt[k]);
            };
        };
        return fmt;
    },
    /**
     * 获取时间
     * @param {string} date 时间
     * @returns {{year: number, month: *, day: number, hours: number, minutes: number, seconds: number, time: number}} 返回时间对象
     */
    getCusDate (date) {
        let d = date ? new Date(date.replace(/-/g, '/')) : new Date();
        let month = d.getMonth() + 1;
        return {
            year: d.getFullYear(),
            month: month < 10 ? '0' + month : month,
            day: d.getDate(),
            hours: d.getHours(),
            minutes: d.getMinutes(),
            seconds: d.getSeconds(),
            time: d.getTime() / 1000
        };
    },
    /**
     * 获取时间差
     * @param {string} dif 相差的毫秒数
     * @returns {object} 相差的时间对象
     */
    getDiffTime (dif) {
        let lev1 = dif % (24 * 3600), lev2 = lev1 % 3600, lev3 = lev2 % 60;
        return {
            days: Math.floor(dif / (24 * 3600)),
            hours: Math.floor(lev1 / 3600),
            minutes: Math.floor(lev2 / 60),
            seconds: Math.floor(lev3)
        };
    },
    /**
     * 拼接时间字符串
     * @param {object} t 时间对象
     * @returns {string} 拼接的时间字符串
     */
    getDateStr (t) {
        let str = (t.days > 9 ? t.days : (t.days > 0 ? '0' + t.days.toString() + '天' : '')) +
            (t.hours > 9 ? t.hours + ':' : (t.hours > 0 ? '0' + t.hours + ':' : '')) +
            (t.minutes > 9 ? t.minutes : '0' + t.minutes) + ':' +
            (t.seconds > 9 ? t.seconds : '0' + t.seconds);
        return str;
    },
    /**
     * 检查URL是否包含指定页面url 处理请求头和cookies
     * @param {string} fullUrl 请求的url
     * @param {array} list 要检查的数组
     * @return {boolean} 布尔值
     */
    checkURL (fullUrl, list) {
        let s = fullUrl.split('?')[0];
        let flag = false;
        for (let i = 0; i < list.length; i++) {
            if (s === list[i]) {
                flag = true;
                break;
            }
        }
        return flag;
    },
    /**
     * 获取uuid
     * @param {number} len 长度
     * @param {number} radix 基数
     * @return {string} uuid
     */
    getUuid (len, radix) {
        let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        let uuid = [], i;
        radix = radix || chars.length;

        if (len) {
            // Compact form
            for (let i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
        } else {
            // rfc4122, version 4 form
            let r;

            // rfc4122 requires these characters
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';

            // Fill in random data.  At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5
            for (let i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16;
                    uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }

        return uuid.join('').toLowerCase();
    },
    /**
     * 解析字符串数组为数组
     * @param {string} str 字符串数组
     * @return {array} 数组
     */
    parseStrToArray (str) {
        if (str) {
            let s = [], a = str.replace(/^\s+|\s+$/g, '').replace(/"/g, '').replace(/\r\n/g, '').replace(/\[/, '').replace(/\]/, '').split(',');
            a.map((item, index) => {
                s.push(item);
            });
            return JSON.parse(str);
        }
        return '';
    },
    /**
     * 将数组转换成指定键的数组 相同的键值会进行覆盖
     * @param {string} key 键名
     * @param {array} list 数组
     * @returns {object} 转换后的数组
     */
    transObjectKey (key, list) {
        // 格式如下
        // let product = [
        //     {skuCode: 'cd2141', title: '我是产品', count: 10, attr: '颜色xl'},
        //     {skuCode: 'cd2141', title: '我是产品', count: 10, attr: '颜色xl'}
        // ];

        let obj = {};
        list.map((item, index) => {
            // 判断要检查的键是否存在于对象
            if (item.hasOwnProperty(key)) {
                obj[item[key]] = item;
            }
        });
        return obj;
    },

    /**
     * 将数组转换成指定键的数组 相同的键值会进行覆盖
     * @param {object} obj 对象
     * @returns {object} 转换后的数组
     */
    objectToArray (obj) {
        let arr = [];
        for (let i in obj) {
            arr.push(obj[i]);
        }
        return arr;
    },
    priceIndexOf (str) {
        let data = str.toString().split('.'), strpad = '';
        if (data.length > 1) {
            let arr = data[1].split('');
            if (arr[1] > 0) {
                strpad = str;
            } else if (arr[0] > 0) {
                strpad = data[0] + '.' + arr[0];
            } else {
                strpad = data[0];
            }
        } else {
            strpad = str;
        }
        return strpad;
    },
    /**
     * 按约定字段跳转
     * @param {object} vm 对象
     * @param {object} object 对象参数
     * @returns {void}
     */
    dispatch (vm, object) {
        console.log(object);
        if (object.event === 'native') {
            // Jump To Another Route.
            console.log('Jump To Another Route.' + object.target);
            this.compileNative(vm, object.target);
        } else if (object.event === 'link') {
            // Jump To Another Link.
            console.log('2');
            if (object.target.indexOf('https://') || object.target.indexOf('http://')) {
                // location.href = object.target;
            } else {
                // location.href = 'http://' + object.target;
            }
        } else {
            // Do Nothing.
            console.log('Do Nothing.');
        }
    },
    /**
     * 处理精度
     * @param {number} number 数字参数
     * @param {number} n 精度位数
     * @returns {void}
     */
    toFixedNum (number, n) {
        if (n > 20 || n < 0) {
            throw new RangeError('toFixed() digits argument must be between 0 and 20');
        }
        // const number = this;
        if (isNaN(number) || number >= Math.pow(10, 21)) {
            return number.toString();
        }
        if (typeof (n) === 'undefined' || n === 0) {
            return (Math.round(number)).toString();
        }

        let result = number.toString();
        const arr = result.split('.');

        // 整数的情况
        if (arr.length < 2) {
            result += '.';
            for (let i = 0; i < n; i += 1) {
                result += '0';
            }
            return result;
        }

        const integer = arr[0];
        const decimal = arr[1];
        if (decimal.length === n) {
            return result;
        }
        if (decimal.length < n) {
            for (let i = 0; i < n - decimal.length; i += 1) {
                result += '0';
            }
            return result;
        }
        result = integer + '.' + decimal.substr(0, n);
        const last = decimal.substr(n, 1);

        // 四舍五入，转换为整数再处理，避免浮点数精度的损失
        if (parseInt(last, 10) >= 5) {
            const x = Math.pow(10, n);
            result = (Math.round((parseFloat(result) * x)) + 1) / x;
            result = result.toFixed(n);
        }

        return result;
    },
    /**
     * 取模运算
     * @param {string} str id
     * @returns {void}
     */
    gentMod (str) {
        let chart = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18',
            '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37',
            '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56',
            '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75',
            '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94',
            '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3',
            'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2',
            'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1',
            'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff'];

        console.log(chart.length);

        let lastChar = str.substring(str.length - 2, str.length).toLowerCase();
        return chart.indexOf(lastChar) % 32 % 9;
    },
    /**
     * 检查是否在限购时间内
     * @param {date} nt 要检查的时间
     * @param {date} st 开始时间
     * @param {date} et 结束时间
     * @returns {void}
     */
    checkIntervalTime (nt, st, et) {
        let nowTime = this.getCusDate(nt).time, stime = this.getCusDate(st).time, etime = this.getCusDate(et).time;
        return nowTime > stime && nowTime < etime;
    },
    /**
     * 更新本地user信息
     * @param {string} key 键(要和getUserInfo接口返回的字段对应上)
     * @param {string} val 值
     * @return {void}
     */
    setStorageVal (key, val) {
        let user = wxApi.getStorageSync('wx-user');
        if (user) {
            let wxUser = JSON.parse(user);
            wxUser[key] = val;
            wxApi.setStorageSync('wx-user', JSON.stringify(wxUser));
        } else {
            console.log('本地user信息不存在');
        }
    },
    /**
     * 设置本地缓存
     * @param {string} key 键(要和getUserInfo接口返回的字段对应上)
     * @param {string} val 值
     * @return {void}
     */
    setStorage (key, val) {
        wxApi.setStorageSync(key, JSON.stringify(val));
    },
    /**
     * 获取本地缓存
     * @param {string} key 键
     * @return {void}
     */
    getStorage (key) {
        let v = wxApi.getStorageSync(key);
        if (v) {
            return JSON.parse(v);
        }
        return v;
    },
    /**
     * 比较对象是否相等
     * @param {object} x 要对比的对象
     * @param {object} y 要对比的对象
     * @returns {Boolean} true or false
     */
    deepCompare (x, y) {
        let i, l, leftChain, rightChain;
        function compare2Objects (x, y) {
            let p;

            // remember that NaN === NaN returns false
            // and isNaN(undefined) returns true
            if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
                return true;
            }

            // Compare primitives and functions.
            // Check if both arguments link to the same object.
            // Especially useful on the step where we compare prototypes
            if (x === y) {
                return true;
            }

            if (!x && !y) {
                return true;
            }

            if (typeof (y) === 'undefined') {
                return true;
            }

            // Works in case when functions are created in constructor.
            // Comparing dates is a common scenario. Another built-ins?
            // We can even handle functions passed across iframes
            if ((typeof x === 'function' && typeof y === 'function') ||
            (x instanceof Date && y instanceof Date) ||
            (x instanceof RegExp && y instanceof RegExp) ||
            (x instanceof String && y instanceof String) ||
            (x instanceof Number && y instanceof Number)) {
                return x.toString() === y.toString();
            }

            // At last checking prototypes as good as we can
            if (!(x instanceof Object && y instanceof Object)) {
                return false;
            }

            if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
                return false;
            }

            if (x.constructor !== y.constructor) {
                return false;
            }

            if (x.prototype !== y.prototype) {
                return false;
            }

            // Check for infinitive linking loops
            if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
                return false;
            }

            // Quick checking of one object being a subset of another.
            // todo: cache the structure of arguments[0] for performance
            for (p in y) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                } else if (typeof y[p] !== typeof x[p]) {
                    return false;
                }
            }

            for (p in x) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                } else if (typeof y[p] !== typeof x[p]) {
                    return false;
                }
                switch (typeof (x[p])) {
                case 'object':
                case 'function':
                    leftChain.push(x);
                    rightChain.push(y);
                    if (!compare2Objects(x[p], y[p])) {
                        return false;
                    }
                    leftChain.pop();
                    rightChain.pop();
                    break;
                default:
                    if (x[p] !== y[p]) {
                        return false;
                    }
                    break;
                }
            }
            return true;
        }

        if (arguments.length < 1) {
            return true;
        }

        for (i = 1, l = arguments.length; i < l; i++) {
            leftChain = [];
            rightChain = [];
            if (!compare2Objects(arguments[0], arguments[i])) {
                return false;
            }
        }
        return true;
    },
    /**
     * 检查是否是数组
     * @param {object} o 参数
     * @returns {void}
     */
    checkIsArray (o) {
        return Object.prototype.toString.call(o) === '[object Array]';
    },
    /**
     * 检查是否是数组
     * @param {object} o 参数
     * @returns {void}
     */
    checkIsObject (o) {
        return Object.prototype.toString.call(o) === '[object Object]';
    },
    /**
     * 数组去重
     * @param {Array} arr 数组
     * @returns {void}
     */
    uniqueArr (arr) {
        return arr.filter(function (item, index, arr) {
            // 当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
            return arr.indexOf(item, 0) === index;
        });
    },
    /**
     * 生成验证码
     * @param {Number} len 长度
     * @returns {String} 长度为6位的字符串
     */
    createCode (len = 6) {
        let code = '',
            codeArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        for (let i = 0; i < len; i++) {
            let randomI = Math.floor(Math.random() * 36);
            code += codeArr[randomI];
        }
        return code;
    },
    /**
     * 检查指定值是存在
     * @param {number} n 数值
     * @param {number} key 字段名称
     * @param {object} res 对象
     * @returns {void}
     */
    checkArrAtt (n, key, res) {
        let i, flag = null;
        for (i = 0; i < res.length; i++) {
            if (n === res[i][key]) {
                flag = res[i];
                break;
            }
        }
        return flag;
    },
    /**
     * 检查是否空对象、空值
     * @param {object} res 参数
     * @returns {void}
     */
    checkIsVal (res) {
        return res && JSON.stringify(res) !== '{}';
    },
    /**
     * 检查是否空对象、空值
     * @param {object} res 参数
     * @returns {void}
     */
    checkIsNull (res) {
        return !res || res === 'null' || res === 'undefined';
    },
    /**
     * 获取表情
     * @returns {void}
     */
    getEmot () {
        return [
            [
                { idx: 0, cont: '微笑' }, { idx: 1, cont: '撇嘴' }, { idx: 2, cont: '色' }, { idx: 3, cont: '发呆' }, { idx: 4, cont: '得意' }, { idx: 5, cont: '流泪' }, { idx: 6, cont: '害羞' }, { idx: 7, cont: '闭嘴' },
                { idx: 8, cont: '睡' }, { idx: 9, cont: '大哭' }, { idx: 10, cont: '尴尬' }, { idx: 11, cont: '发怒' }, { idx: 12, cont: '调皮' }, { idx: 13, cont: '呲牙' }, { idx: 14, cont: '惊讶' }, { idx: 15, cont: '难过' },
                { idx: 16, cont: '酷' }, { idx: 17, cont: '冷汗' }, { idx: 18, cont: '抓狂' }, { idx: 19, cont: '吐' }, { idx: 20, cont: '偷笑' }, { idx: 21, cont: '可爱' }, { idx: 22, cont: '白眼' }, { idx: 'x', cont: 'x' }
            ],
            [
                { idx: 23, cont: '傲慢' }, { idx: 24, cont: '饥饿' }, { idx: 25, cont: '困' }, { idx: 26, cont: '惊恐' }, { idx: 27, cont: '流汗' }, { idx: 28, cont: '憨笑' }, { idx: 29, cont: '大兵' }, { idx: 30, cont: '奋斗' },
                { idx: 31, cont: '咒骂' }, { idx: 32, cont: '疑问' }, { idx: 33, cont: '嘘' }, { idx: 34, cont: '晕' }, { idx: 35, cont: '折磨' }, { idx: 36, cont: '衰' }, { idx: 37, cont: '骷髅' }, { idx: 38, cont: '敲打' },
                { idx: 39, cont: '再见' }, { idx: 40, cont: '擦汗' }, { idx: 41, cont: '抠鼻' }, { idx: 42, cont: '鼓掌' }, { idx: 43, cont: '糗大了' }, { idx: 44, cont: '坏笑' }, { idx: 45, cont: '左哼哼' }, { idx: 'x', cont: 'x' }
            ],
            [
                { idx: 46, cont: '右哼哼' }, { idx: 47, cont: '哈欠' }, { idx: 48, cont: '鄙视' }, { idx: 49, cont: '委屈' }, { idx: 50, cont: '快哭了' }, { idx: 51, cont: '阴险' }, { idx: 52, cont: '亲亲' }, { idx: 53, cont: '吓' },
                { idx: 54, cont: '可怜' }, { idx: 55, cont: '菜刀' }, { idx: 56, cont: '西瓜' }, { idx: 57, cont: '啤酒' }, { idx: 58, cont: '篮球' }, { idx: 59, cont: '乒乓' }, { idx: 60, cont: '咖啡' }, { idx: 61, cont: '饭' },
                { idx: 62, cont: '猪头' }, { idx: 63, cont: '玫瑰' }, { idx: 64, cont: '凋谢' }, { idx: 65, cont: '示爱' }, { idx: 66, cont: '爱心' }, { idx: 67, cont: '心碎' }, { idx: 68, cont: '蛋糕' }, { idx: 'x', cont: 'x' }
            ],
            [
                { idx: 69, cont: '闪电' }, { idx: 70, cont: '炸弹' }, { idx: 71, cont: '刀' }, { idx: 72, cont: '足球' }, { idx: 73, cont: '瓢虫' }, { idx: 74, cont: '便便' }, { idx: 75, cont: '月亮' }, { idx: 76, cont: '太阳' },
                { idx: 77, cont: '礼物' }, { idx: 78, cont: '拥抱' }, { idx: 79, cont: '强' }, { idx: 80, cont: '弱' }, { idx: 81, cont: '握手' }, { idx: 82, cont: '胜利' }, { idx: 83, cont: '抱拳' }, { idx: 84, cont: '勾引' },
                { idx: 85, cont: '拳头' }, { idx: 86, cont: '差劲' }, { idx: 87, cont: '爱你' }, { idx: 88, cont: 'NO' }, { idx: 89, cont: 'OK' }, { idx: 90, cont: '爱情' }, { idx: 91, cont: '飞吻' }, { idx: 'x', cont: 'x' }
            ],
            [
                { idx: 92, cont: '跳跳' }, { idx: 93, cont: '发抖' }, { idx: 94, cont: '怄火' }, { idx: 95, cont: '转圈' }, { idx: 96, cont: '磕头' }, { idx: 97, cont: '回头' }, { idx: 98, cont: '跳绳' }, { idx: 99, cont: '挥手' },
                { idx: 100, cont: '激动' }, { idx: 101, cont: '街舞' }, { idx: 95, cont: '献吻' }, { idx: 95, cont: '左太极' }, { idx: 95, cont: '右太极' }, { idx: 'space1', cont: 'space' }, { idx: 'space2', cont: 'space' }, { idx: 'x', cont: 'x' }
            ]
        ];

        // return [
        //     ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢'],
        //     ['饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠'],
        //     ['鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀'],
        //     ['足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈'],
        //     ['磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
        // ];
    },
    /**
     * 解析表情
     * @param {string} content 内容
     * @returns {void}
     */
    parseEmot (content) {
        let list = this.getEmot();
        return content.replace(/\[(.+?)\]/g, (match) => {
            let replaceStr = '';
            list.map((item, index) => {
                for (let i = 0; i < item.length; i++) {
                    if (match === ('[' + item[i].cont + ']')) {
                        // let k = (item.length % 24 === 0 ? (index * item.length + i) : index * 24 + i);
                        let k = item[i].idx;
                        replaceStr += `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${k}.gif" />`;
                    }
                }
            });
            return replaceStr === '' ? match : replaceStr;
        });
    }
};
