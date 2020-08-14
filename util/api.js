const BASE_URL = 'http://192.168.18.10:8083/' 
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
				if(res.data.code !==0){
					return uni.showToast({
						title:'获取数据失败'
					})
				}
				resolve(res)
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