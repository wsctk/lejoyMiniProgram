const BASE_URL = 'https://lexiang-mechanism.it-10.com/'
// const BASE_URL = 'http://192.168.18.10:8083/' 
export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL + options.url,
			method:options.method || 'GET',
			data:options.data || {},
			header: options.header || {
				'content-type': 'application/x-www-form-urlencoded', 
			},
			success: options.success || ((res)=>{
				switch (res.data.code) {
					case 1: 
						return uni.showToast({
							title: '用户未登录',
							icon: 'none'
						});
						break;
					case 2:
						return uni.showToast({
							title: '非法参数',
							icon: 'none'
						});
						break;
					case 3:
						return uni.showToast({
							title: '用户已存在',
							icon: 'none'
						});
						break;
					case 4:
						return uni.showToast({
							title: '找不到记录',
							icon: 'none'
						});
						break;
					case 5:
						return uni.showToast({
							title: '无权限访问',
							icon: 'none'
						});
						break;
					case 6:
						return uni.showToast({
							title: '服务器内部错误',
							icon: 'none'
						});
						break;
					case 7:
						return uni.showToast({
							title: '状态错误',
							icon: 'none'
						});
						break;
					case 8:
						return uni.showToast({
							title: '内容重复',
							icon: 'none'
						});
						break;
					case 9:
						return uni.showToast({
							title: '找不到内容',
							icon: 'none'
						});
						break;
					case 10:
						return uni.showToast({
							title: '验证失败',
							icon: 'none'
						});
						break;
					case 11:
						return uni.showToast({
							title: '登录过期',
							icon: 'none'
						});
						break;
					case 12:
						return uni.showToast({
							title: '登录失效',
							icon: 'none'
						});
						break;
					case 13:
						return uni.showToast({
							title: '验证码错误',
							icon: 'none'
						});
						break;
					case 14:
						return uni.showToast({
							title: '用户操作异常',
							icon: 'none'
						});
						break;
					case 15:
						return uni.showToast({
							title: '文件读写错误',
							icon: 'none'
						});
						break;
					case 16:
						return uni.showToast({
							title: '无效的请求签名',
							icon: 'none'
						});
						break;
					case 17:
						return uni.showToast({
							title: 'token鉴权错误',
							icon: 'none'
						});
						break;
					case 18:
						return uni.showToast({
							title: 'token已过期',
							icon: 'none'
						});
						break;
					case 19:
						return uni.showToast({
							title: '请求已过期',
							icon: 'none'
						});
						break;
					case 20:
						return uni.showToast({
							title: '用户名或密码错误',
							icon: 'none'
						});
						break;
					case 21:
						return uni.showToast({
							title: '用户不存在',
							icon: 'none'
						});
						break;
					case 22:
						return uni.showToast({
							title: '手机号已存在',
							icon: 'none'
						});
						break;
					case 87014:
						return uni.showToast({
							title: '包含敏感信息',
							icon: 'none'
						});
						break;
					case undefined:
						return uni.showToast({
							title: '获取信息失败',
							icon: 'none'
						});
						break;
					default:
						resolve(res)
						break;
				}
			}),
			fail:(err)=>{
				uni.showToast({
					title:'请求失败'
				})
				reject(err)
			}
		})
})
}