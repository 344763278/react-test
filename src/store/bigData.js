import { createReducer } from '../util'
// import { fetchHero, delHero, editeHero } from '../api'
// state
const initialState = {
  list: [
		{id: '1', name: '上海'},
		{id: '2', name: '北京'},
		{id: '3', name: '广州'},
		{id: '4', name: '深圳'}
  ],
}

export const ADD_DATA = 'ADD_DATA'

// action
// 获取大数据 异步
// export const getHero = prams => dispatch => {
// 	return fetchHero(prams).then(res => {
// 		dispatch({ type: GETHERO, hero: res.result })
// 		return res
// 	})
// }  

export const addData = data => dispatch => { 
	dispatch({ type: ADD_DATA, data }) 
}

// reducer
export default createReducer(initialState, {
	[ADD_DATA]: (state, {data}) => {  
		let newState = {...state}
		newState.list.push(data)
		return newState
	},
})