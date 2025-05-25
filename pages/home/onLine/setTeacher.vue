<template>
	<view>
		<uni-nav title="教员入驻" :isLeft="true" />
		<view class="pages">
			<view class="main">
				<view class="piece">
					<view v-if="teacherDetail.teacherName.isShow" class="line">
						<view class="title">{{ teacherDetail.teacherName.name }}</view>
						<view class="value">
							<input v-model="teacherForm.teacherName" :placeholder="teacherDetail.teacherName.tips" />
						</view>
					</view>
					<view class="line">
						<view class="title">擅长学科：</view>
						<view class="discipline">
							<picker class="picker_line" @change="gradePickerChange" range-key="gradeName" :value="gradeCodeIndex" :range="gradeArray">
								<view class="uni-input">{{ gradeArray[gradeCodeIndex].gradeName }}</view>
							</picker>
							<picker class="picker_line" @change="subjectPickerChange" range-key="subjectName" :value="subjectIndex" :range="subjectArray">
								<view class="uni-input">{{ subjectArray[subjectIndex].subjectName }}</view>
							</picker>
						</view>
					</view>
					<view class="line">
						<view class="title">补充学科：</view>
						<view class="value">
							<input v-model="teacherForm.otherSubject" placeholder="填写其它可授学科,没有可不填" />
						</view>
					</view>
					<view class="line">
						<view class="title">接受时薪：</view>
						<view class="value">
							<input v-model="teacherForm.expectedHourWage" placeholder="请输入接受时薪" />
						</view>
					</view>
				</view>
				<view class="piece">
					<view v-if="teacherDetail.school.isShow" class="line line_school">
						<view class="title">{{ teacherDetail.school.name }}</view>
						<view class="value">
							<input v-model="teacherForm.school" :placeholder="teacherDetail.school.tips" />
						</view>
					</view>
					<view v-if="teacherDetail.profession.isShow" class="line">
						<view class="title">{{ teacherDetail.profession.name }}</view>
						<view class="value">
							<input v-model="teacherForm.profession" :placeholder="teacherDetail.profession.tips" />
						</view>
					</view>
					<view v-if="teacherDetail.address.isShow" class="line">
						<view class="title">{{ teacherDetail.address.name }}</view>
						<view class="value">
							<input v-model="teacherForm.address" :placeholder="teacherDetail.address.tips" />
						</view>
					</view>
				</view>
				<view class="piece">
					<view class="line_time">
						<view class="line_time_title">空闲时间</view>
						<view class="time_content">
							<view class="time_value">
								<view v-for="(item, index) in timeList" :key="index" class="vertical">
									<view v-if="item.type == 'checkbox'" class="vertical_checkbox_box">
										<view class="vertical_title">{{ item.label }}</view>
										<checkbox-group v-for="(jtem, jndex) in item.children" :key="jndex" class="check_box" @change="timeChange(jtem)">
											<checkbox :value="jtem.value" :checked="jtem.check"/>
										</checkbox-group>
									</view>
									<view v-else class="vertical_title_box">
										<view class="vertical_title" v-for="(jtem, jndex) in item.children" :key="jndex">{{ jtem.label }}</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view v-if="teacherDetail.phone.isShow" class="line">
						<view class="title">{{ teacherDetail.phone.name }}</view>
						<view class="value">
							<input v-model="teacherForm.phone" :placeholder="teacherDetail.phone.tips" />
						</view>
					</view>
					<view v-if="teacherDetail.wxAccount.isShow" class="line">
						<view class="title">{{ teacherDetail.wxAccount.name }}</view>
						<view class="value">
							<input v-model="teacherForm.wxAccount" :placeholder="teacherDetail.wxAccount.tips" />
						</view>
					</view>
				</view>
				<view class="piece">
					<view v-if="teacherDetail.images.isShow" class="line_photo">
						<view class="title">{{ teacherDetail.images.name }}</view>
						<view v-if="images.length == 0" class="value" @click="upload">
							<image src="/static/camera.png" mode="scaleToFill" class="photo_img"></image>
						</view>
						<view v-if="images.length > 0" class="value">
							<view v-for="(item, index) in images" :key="index" class="teacher_photo">
								<image :src="item" mode="scaleToFill" class="photo_img"></image>
							</view>
						</view>
					</view>
					<view class="remark">
						<view class="label">备注：</view>
						<view class="text">必须正装蓝红底照</view>
					</view>
				</view>
				<view class="piece">
					<view class="line line_intro">
						<view class="title">教员风采：</view>
						<view class="value">
							<textarea class="introduction" v-model="teacherForm.introduction" placeholder="请输入个人简介、家教经验, 不少于20字"/>
						</view>
					</view>
				</view>
				<view @click="submit" class="btn">申请注册</view>
			</view>
		</view>
	</view>
</template>

<script>
	import homeService from '@/api/homeService.js';
	export default {
		data() {
			return {
				gradeArray: [],
				gradeCodeIndex: 0,
				subjectArray: [],
				subjectIndex: 0,
				timeList: [
					{
					  value: "0",
					  label: "",
					  type: 'title',
					  children: [
						{
						  value: "100",
						  label: "",
						  check: false
						},
						{
						  value: "001",
						  label: "上午",
						  check: false
						},
						{
						  value: "002",
						  label: "下午",
						  check: false
						},
						{
						  value: "003",
						  label: "晚上",
						  check: false
						}
					  ]
					},
					{
					  value: "1",
					  label: "周一",
					  type: 'checkbox',
					  children: [
						{
						  value: "101",
						  label: "上午",
						  check: false
						},
						{
						  value: "102",
						  label: "下午",
						  check: false
						},
						{
						  value: "103",
						  label: "晚上",
						  check: false
						}
					  ]
					},
					{
					  value: "2",
					  label: "周二",
					  type: 'checkbox',
					  children: [
						{
						  value: "201",
						  label: "上午",
						  check: false
						},
						{
						  value: "202",
						  label: "下午",
						  check: false
						},
						{
						  value: "203",
						  label: "晚上",
						  check: false
						}
					  ]
					},
					{
					  value: "3",
					  label: "周三",
					  type: 'checkbox',
					  children: [
						{
						  value: "301",
						  label: "上午",
						  check: false
						},
						{
						  value: "302",
						  label: "下午",
						  check: false
						},
						{
						  value: "303",
						  label: "晚上",
						  check: false
						}
					  ]
					},
					{
					  value: "4",
					  label: "周四",
					  type: 'checkbox',
					  children: [
						{
						  value: "401",
						  label: "上午",
						  check: false
						},
						{
						  value: "402",
						  label: "下午",
						  check: false
						},
						{
						  value: "403",
						  label: "晚上",
						  check: false
						}
					  ]
					},
					{
					  value: "5",
					  label: "周五",
					  type: 'checkbox',
					  children: [
						{
						  value: "501",
						  label: "上午",
						  check: false
						},
						{
						  value: "502",
						  label: "下午",
						  check: false
						},
						{
						  value: "503",
						  label: "晚上",
						  check: false
						}
					  ]
					},
					{
					  value: "6",
					  label: "周六",
					  type: 'checkbox',
					  children: [
						{
						  value: "601",
						  label: "上午",
						  check: false
						},
						{
						  value: "602",
						  label: "下午",
						  check: false
						},
						{
						  value: "603",
						  label: "晚上",
						  check: false
						}
					  ]
					},
					{
					  value: "7",
					  label: "周天",
					  type: 'checkbox',
					  children: [
						{
						  value: "701",
						  label: "上午",
						  check: false
						},
						{
						  value: "702",
						  label: "下午",
						  check: false
						},
						{
						  value: "703",
						  label: "晚上",
						  check: false
						}
					  ]
					}
				],
				images: [],
				teacherForm: {
					teacherName: '',
					otherSubject: '',
					expectedHourWage: '',
					school: '',
					address: '',
					phone: '',
					wxAccount: '',
					introduction: '',
					channel: 2 // 注册渠道为1是PC 为2是小程序
				},
				teacherDetail: ''
			};
		},
		onLoad() {
			this.getHtml()
			this.getGradeList()
		},
		methods: {
			getHtml() { // 获取新增老师html
				homeService.getHtml({}, res => {
					this.teacherDetail = res.data
					console.log(this.teacherDetail, 'teacherDetail');
				}, err => {
					console.log(err);
				})
			},
			getGradeList() { // 获取年级
				homeService.getListGradeInfo({}, res => {
					console.log(res, 1)
					this.gradeArray = res.data || []
					this.getGradeSubject()
				})
			},
			getGradeSubject() { // 获取年级
				homeService.getGradeSubject({gradeCode: this.gradeArray[this.gradeCodeIndex].gradeCode}, res => {
					console.log(res, 1)
					this.subjectArray = res.data || []
				})
			},
			gradePickerChange(val) {
				console.log(val, 'val年级')
				this.gradeCodeIndex = val.detail.value
				this.getGradeSubject()
				this.subjectIndex = 0
			},
			subjectPickerChange(val) {
				console.log(val, 'val科目')
				this.subjectIndex = val.detail.value
			},
			timeChange(jtem) { // 时间复选框
				console.log(jtem);
				jtem.check = !jtem.check
			},
			upload() { // 上传图片
				let _this = this;
				let tempFiles = [];
				uni.chooseImage({
					count: 1, //默认9
					success: function (res) {
						uni.showLoading({
							mask: true,
							title: '图片上传中',
							complete() {}
						});
						res.tempFilePaths.map((item) => {
							uni.uploadFile({
								url: `https://yidiantong.cc/edu/attachment/upload`,
								filePath: item,
								name: 'file',
								header: {
									'Token': uni.getStorageSync('Token')
								},
								success: function (uploadFileRes) {
									let arr = JSON.parse(uploadFileRes.data).data;
									if (arr) {
										_this.images.push(arr.fileUrl)
										uni.hideLoading()
										uni.showToast({
											icon: 'success',
											title: '图片上传成功',
											duration: 1000,
											mask: true
										});	
									}
								},
								fail: function(err) {
									console.log(err)
									uni.hideLoading()
									uni.showToast({
										icon: 'none',
										title: err.msg,
										duration: 1000,
										mask: true
									});
								}
							})
						})
					},
					fail: function(err) {
						console.log(err)
					}
				});
			},
			submit() { // 申请注册
				const _this = this
				console.log(_this.timeList)
				if(!_this.teacherForm.teacherName) {
					return _this.prompt('姓名不能为空') 
				} else if(!_this.teacherForm.expectedHourWage){
					return _this.prompt('接受时薪不能为空')
				} else if(!_this.teacherForm.school){
					return _this.prompt('就读学校不能为空')
				} else if(!_this.teacherForm.profession){
					return _this.prompt('年级专业不能为空')
				} else if(!_this.teacherForm.address){
					return _this.prompt('居住地址不能为空')
				} else if(!_this.teacherForm.phone){
					return _this.prompt('联系电话不能为空')
				} else if(!_this.teacherForm.wxAccount){
					return _this.prompt('微信不能为空')
				} else if(_this.images.length == 0){
					return _this.prompt('头像不能为空')
				} else if(!_this.teacherForm.introduction){
					return _this.prompt('教员风采不能为空')
				}
				let freeTimeList = []
				_this.timeList.forEach(item => { 
					item.children.forEach(jtem => {
						if(jtem.check) {
							freeTimeList.push(jtem.value)
						}
					})
				})
				let freeTimeListArr = []
				if (freeTimeList && freeTimeList.length > 0) {
					freeTimeList.forEach(item => {
					  let obj = {
						periodList: []
					  }
					  _this.timeList.forEach(jtem => {
						jtem.children.forEach(ktem => {
						  if (item == ktem.value) {
							obj.periodList.push({
							  period: item,
							  periodDesc: ktem.label,
							})
							obj.weekday = jtem.value
							obj.weekdayDesc = jtem.label
						  }
						})
					  })
					  freeTimeListArr.push(obj)
					})
				} else {
					return _this.prompt('空闲时间不能为空')
				}
				let tempArr = [];
				let dataList = [];
				for (let i = 0; i < freeTimeListArr.length; i++) {
					if (tempArr.indexOf(freeTimeListArr[i].weekday) === -1) {
					  dataList.push({
						weekday: freeTimeListArr[i].weekday,
						weekdayDesc: freeTimeListArr[i].weekdayDesc,
						periodList: freeTimeListArr[i].periodList
					  });
					  tempArr.push(freeTimeListArr[i].weekday);
					} else {
					  for (let j = 0; j < dataList.length; j++) {
						if (dataList[j].weekday== freeTimeListArr[i].weekday) {
						  dataList[j].periodList.push(freeTimeListArr[i].periodList[0]);
						  break;
						}
					  }
					}
				}
				_this.teacherForm.freeTimeList = dataList
				_this.teacherForm.wechatImgLink = this.images.toString()
				_this.teacherForm.teacherSubjectList = []
				_this.teacherForm.teacherSubjectList.push({
					gradeCode: _this.gradeArray[this.gradeCodeIndex].gradeCode,
					subjectCode:  _this.subjectArray[this.subjectIndex].subjectCode
				})
				uni.showLoading({
					mask: true,
					title: '注册中',
					complete() {}
				});
				homeService.setTeacher(_this.teacherForm, res => {
					uni.hideLoading()
					if (res.code == 0) {
						uni.showToast({
							icon: 'success',
							title: '注册成功',
							duration: 1000,
							mask: true
						});
						let timer = setTimeout(() => {
							uni.reLaunch({
								url: '/pages/home/home'
							});
							clearInterval(timer);
						}, 1000);
					} else {
						uni.showToast({
							icon: 'error',
							title: res.msg,
							duration: 1000,
							mask: true
						});
					}
				})
			},
			prompt(title) {
				uni.showToast({
					icon: 'none',
					title: title,
					duration: 1000,
					mask: true
				});
				return
			},
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		background: #fafafa;
		padding: 0 0 160rpx 0;
		// margin: 0 0 160rpx 0;
		.piece{
			padding: 20rpx 10rpx;
			border-radius: 20rpx;
			background: #ffffff;
			margin: 20rpx;
			.line{
				display: flex;
				padding: 20rpx 0;
				font-size: 28rpx;
				border-bottom: 3rpx solid #eeeeee;
				&:last-child{
					border-bottom: none;
				}
				.title{
					width: 220rpx;
					// width: 300rpx;
					margin: auto 0;
					text-align: left;
				}
				.discipline{
					width: 100%;
					display: flex;
					.picker_line{
						width: 50%;
					}
				}
				.value{
					width: 100%;
					margin: auto 0;
				}
			}
			.line_time{
				padding: 20rpx 0;
				font-size: 28rpx;
				border-bottom: 3rpx solid #eeeeee;
				.line_time_title{
					text-align: center;
					padding: 0 0 24rpx 0;
					border-bottom: 3rpx solid #eeeeee;
				}
				.time_content{
					display: flex;
					padding: 26rpx 0 0 0;
					.title_box{
						// width: 160rpx;
						width: 300rpx;
						.time_box{
							display: flex;
							flex-direction: column;
							justify-content: center;
							.title{
								height: 48rpx;
								line-height: 48rpx;
								// margin: 8rpx 0;
								// &:first-child{
								// 	margin: 4rpx 0;
								// }
							}
						}
					}
					.time_value{
						width: 100%;
						display: flex;
						justify-content: space-between;
						.check_box{
							margin: 10rpx 0;
						}
						.vertical{
							.vertical_title_box{
								.vertical_title{
									&:first-child{
										height: 32rpx;
										line-height: 32rpx;
									}
									height: 24px;
									line-height: 24px;
									margin: 5px 0;
								}
							}
						}
					}
				}
			}
			.line_intro{
				.title{
					margin: initial;
					min-width: 140rpx;
					// min-width: 300rpx;
				}
				.value{
					padding: 6rpx 0 0 0;
					.introduction{
						position: initial;
					}
				}
			}
			.line_school{
				.title{
					width: 300rpx;
				}
			}
			.line_photo{
				display: flex;
				font-size: 28rpx;
				.title{
					width: 140rpx;
					// width: 300rpx;
					text-align: left;
				}
				.value{
					.photo_img{
						width: 160rpx;
						height: 160rpx;
						border: 3rpx solid #eeeeee;
						border-radius: 12rpx;
					}
					.teacher_photo{
						.photo_img{
							width: 160rpx;
							height: 160rpx;
							border: 3rpx solid #eeeeee;
							border-radius: 12rpx;
						}
					}
				}
			}
			.remark{
				font-size: 28rpx;
				display: flex;
				.text{
					color: red;
				}
			}
		}
		.btn{
			width: 100%;
			text-align: center;
			font-size: 32rpx;
			padding: 24rpx 0;
			background: #88a169;
			color: #FFFFFF;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 9;
		}
	}
</style>
