const API_URI = 'https://api.it120.cc/tz/'

export default{

	get(url, params) {
		return new Promise((resolve, reject) => {
			wx.request({
				url: `${API_URI}/${url}`,
				data: params,
				methods:'GET',
				header: {
					'content-type': 'application/json'
				},
				success: resolve,
				fail: reject
			})
		})
	},
	
	post(url, params) {
		return new Promise((resolve, reject) => {
			wx.request({
				url: `${API_URI}/${url}`,
				data: params,
				method: 'POST',
				dataType: 'json',
				header: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				success: resolve,
				fail: reject
			})
		})
	},
}

