import http from '../utils/http.js';
import wxApi from '../utils/wxApi.js';
export default {
	/**
	 *  登录
	 * @param {function} param 参数
	 * @param {function} callback 成功回调
	 * @param {function} errorcallback 失败回调
	 * @returns {void}
	 */
	login (param, callback, errorcallback) {
	    let data = Object.assign(param, {});
	    http.httpPost('/user/login', data, null, callback, errorcallback);
	},
	/**
	 *  查询教员信息
	 * @param {function} param 参数
	 * @param {function} callback 成功回调
	 * @param {function} errorcallback 失败回调
	 * @returns {void}
	 */
	getTeacherList (param, callback, errorcallback) {
	    let data = Object.assign(param, {});
	    http.httpPost('/teacherInfo/pageTeacherInfo', data, null, callback, errorcallback);
	},
	/**
	 *  查询订单信息
	 * @param {function} param 参数
	 * @param {function} callback 成功回调
	 * @param {function} errorcallback 失败回调
	 * @returns {void}
	 */
	getOrderList (param, callback, errorcallback) {
	    let data = Object.assign(param, {});
	    http.httpPost('/reservationOrder/pageReservationOrderInfo', data, null, callback, errorcallback);
	},
	/**
	 * 查询教员详情
	 * @param {function} param 参数
	 * @param {function} callback 成功回调
	 * @param {function} errorcallback 失败回调
	 * @returns {void}
	 */
	getTeacherInfoDetail (param, callback, errorcallback) {
		let data = Object.assign(param, {});
		http.httpGet('/teacherInfo/getTeacherInfoDetail', data, null, callback, errorcallback);
	},
	/**
	 * 查询年级信息
	 * @param {function} param 参数
	 * @param {function} callback 成功回调
	 * @param {function} errorcallback 失败回调
	 * @returns {void}
	 */
	getListGradeInfo (param, callback, errorcallback) {
		let data = Object.assign(param, {});
		http.httpPost('/gradeInfo/listGradeInfo', data, null, callback, errorcallback);
	},
	/**
	 * 根据年级编码查询科目
	 * @param {function} param 参数
	 * @param {function} callback 成功回调
	 * @param {function} errorcallback 失败回调
	 * @returns {void}
	 */
	getGradeSubject (param, callback, errorcallback) {
		let data = Object.assign(param, {});
		http.httpGet('/gradeSubjectRel/getGradeSubject', data, null, callback, errorcallback);
	},
	/**
	 * 新增老师
	 * @param {function} param 参数
	 * @param {function} callback 成功回调
	 * @param {function} errorcallback 失败回调
	 * @returns {void}
	 */
	setTeacher (param, callback, errorcallback) {
		let data = Object.assign(param, {});
		http.httpPost('/teacherInfo/save', data, null, callback, errorcallback);
	},
	/**
	 * 判断是否可进入老师新增
	 * @param {function} param 参数
	 * @param {function} callback 成功回调
	 * @param {function} errorcallback 失败回调
	 * @returns {void}
	 */
	getStatus (param, callback, errorcallback) {
		let data = Object.assign(param, {});
		http.httpGet('/teacherInfo/getStatus', data, null, callback, errorcallback);
	},
	/**
	 * 获取banner列表
	 * @param {function} param 参数
	 * @param {function} callback 成功回调
	 * @param {function} errorcallback 失败回调
	 * @returns {void}
	 */
	getBanner (param, callback, errorcallback) {
		let data = Object.assign(param, {});
		http.httpGet('/teacherInfo/getBanner', data, null, callback, errorcallback);
	},
	/**
	 * 获取新增老师html
	 * @param {function} param 参数
	 * @param {function} callback 成功回调
	 * @param {function} errorcallback 失败回调
	 * @returns {void}
	 */
	getHtml (param, callback, errorcallback) {
		let data = Object.assign(param, {});
		http.httpGet('/teacherInfo/getHtml', data, null, callback, errorcallback);
	},
}
