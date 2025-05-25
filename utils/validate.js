/* 正则验证 */
export default {
    /**
     * 验证手机号
     * @param   {string} str 待验证字符
     * @returns {boolean} 布尔值
     */
    rexPhone (str) {
        return /^[1][0-9]{10}$/.test(str);
    },
    /**
     * 验证纯数字
     * @param   {number} num 待验证数字
     * @returns {boolean} 布尔值
     */
    rexNum (num) {
        return /^[0-9]+$/.test(num);
    },
    /**
     * 验证地址特殊字符
     * @param   {number} str 待验证字符
     * @returns {boolean} 布尔值
     */
    rexAddStr (str) {
        return /^[A-Za-z0-9\u2e80-\u9fff()]+$/.test(this.replaceSpace(str));
    },
    /**
     * 验证http
     * @param   {string} str 待验证字符
     * @returns {boolean} 布尔值
     */
    rexDomainPrefix (str) {
        return /^http(s)?:\/\/.+/.test(str);
    },
    /**
     * 验证手机号
     * @param   {string} str 待验证字符
     * @returns {boolean} 布尔值
     */
    rexFilter (str) {
        return /(and)|(exec)|(insert)|(select)|(delete)|(update)|(count)|(chr)|(mid)|(master)|(truncate)|(char)|(declare)|(or)|(\*)|(')|(")|(%)|(;)/g.test(str);
    },
    /**
     * 验证身份证号
     * @param   {string} str 待验证字符
     * @returns {boolean} 布尔值
     */
    rexIdCard (str) {
        return /[1-9]{1}[0-9]{5}(19|20)[0-9]{2}((0[1-9]{1})|(1[0-2]{1}))((0[1-9]{1})|([1-2]{1}[0-9]{1}|(3[0-1]{1})))[0-9]{3}[0-9xX]{1}/.test(str);
    },
    /**
     * 过滤特殊字符
     * @param   {string} str 待验证字符
     * @returns {boolean} 布尔值
     */
    filterStr (str) {
        let rex = /(and)|(exec)|(insert)|(select)|(delete)|(update)|(count)|(chr)|(mid)|(master)|(truncate)|(char)|(declare)|(or)|(\*)|(')|(")|(%)|(;)/g;
        return str.replace(rex, '');
    },
    /**
     * 去除空格
     * @param   {string} str 待替换的字符
     * @returns {boolean} 布尔值
     */
    replaceSpace (str) {
        if (!str) {
            return '';
        }
        return str.replace(/\s+/g, '');
    },
    /**
     * 过滤特殊字符
     * @param   {string} str 待验证字符
     * @param   {string} rex 正则
     * @returns {boolean} 布尔值
     */
    replaceStr (str, rex) {
        let regExp = new RegExp(rex, 'gi');
        return str.replace(regExp, '');
    },
    /**
     * 收货地址收货人只能填写中文和英文
     * @param   {string} str 待验证字符
     * @returns {boolean} 布尔值
     */
    repaddConsignee (str) {
        return /^[\u4e00-\u9fa5_a-zA-Z]+$/.test(str);
    },
    /**
     * 取出域名
     * @param   {string} path url
     * @returns {boolean} 布尔值
    */
    rexMatchHost (path) {
        let mat = path && path.match(/^http[s]{0,1}:\/\/[a-zA-Z0-9.:]*\/?/);
        if (mat && mat.length > 0) {
            return mat[0];
        }
        return null;
    },
   /**
    * 验证邮箱
    * @param   {string} str 待验证字符
    * @returns {boolean} 布尔值
    */
	rexEmail (str) {
		return /^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/.test(str);
   },
};
