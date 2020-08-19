const BASE_URL = 'https://lexiang-mechanism.it-10.com/'
// const BASE_URL = 'http://192.168.18.10:8083/' 
export const myUpload = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.uploadFile({
			url:BASE_URL + options.url,
			filePath: options.filepath,
			name: options.name,
			header: options.header || {
				'content-type': 'multipart/form-data'
			},
			success: options.success || ((res)=>{
				resolve(res)
			}),
			fail: options.fail || ((err)=>{
				uni.showToast({
					title:'请求失败'
				})
				reject(err)
			})
		})
	})
	}