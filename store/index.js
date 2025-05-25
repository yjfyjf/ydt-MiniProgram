import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		port: '',
		area: {},
		garden: {},
		build: {},
		room: {},
		thisRoom: {}
	},
	mutations: {
		setPort(state,result){
			state.port = result
		},
		setArea(state,result){
			state.area = result
		},
		setGarden(state,result){
			state.garden = result
		},
		setBuild(state,result){
			state.build = result
		},
		setRoom(state,result){
			state.room = result
		},
		setThisRoom(state,result){
			state.thisRoom = result
		},
	},
    // getters:{
    //     currentColor(state){
    //         return state.colorList[state.colorIndex]
    //     }
    // },
	actions: {
		// lazy loading openid
		getUserOpenId: async function ({
			commit,
			state
		}) {
			return await new Promise((resolve, reject) => {
				if (state.openid) {
					resolve(state.openid)
				} else {
					uni.login({
						success: (data) => {
							commit('login')
							setTimeout(function () { //模拟异步请求服务器获取 openid
								const openid = '123456789'
								console.log('uni.request mock openid[' + openid + ']');
								commit('setOpenid', openid)
								resolve(openid)
							}, 1000)
						},
						fail: (err) => {
							console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
							reject(err)
						}
					})
				}
			})
		}
	}
})

export default store
