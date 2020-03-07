
const baseURL="https://www.liulongbin.top:8888"

export default function request(option) {
		return new Promise((resolve,reject)=>{
			uni.request({
				url:baseURL+option.url,
				method:option.method||'GET',
				data:option.data||{},
				success:resolve,
				fail:reject
			})
		})
	}
