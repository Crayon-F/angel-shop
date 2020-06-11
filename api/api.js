import ajax from '../utils/ajax'
export default{
	getState(params){
		return ajax.get('/banner/list',params)
	},
	getSwiper(params){
		return ajax.get('banner/list',params)
	},
	getSearch(){
		return ajax.post('shop/goods/list',params)
	},
	getScrollShop(params){
		return ajax.get('site/goods/dynamic',params)
	},
	getNotice(params){
		return ajax.get('notice/list',params)
	},
	getNoticeInfo(params){
		return ajax.get('notice/detail',params)
	},
	getNavList(params){
		return ajax.get('shop/goods/category/all',params)
	},
	getSeckill(params){
		return ajax.get('shop/goods/list',params)
	},
	getRecommend(params){
		return ajax.post('shop/goods/list',params)
	}
}