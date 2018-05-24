import { createReducer } from '../util' 
 
// state
const initialState = {
  list: [
		{id: 0, text: '坚持学习', isDone: false, isShow: true} 
  ]
}

//添加一条数据
export const ADD_ONE_CELL  = 'ADD_ONE_CELL'  // 新增
export const TOGGLE_STATUS = 'TOGGLE_STATUS' // 切换
export const FILTER_LIST   = 'FILTER_LIST'   // 过滤

// action
// 获取大数据 可异步  
export const addOneCell = cell => dispatch => {  
	setTimeout(() => {
		dispatch({ type: ADD_ONE_CELL, cell }) 
	}, 1000) 
}

export const toggleStatus = id => dispatch => { 
	dispatch({ type: TOGGLE_STATUS, id }) 
}

export const filterList = key => dispatch => { 
	dispatch({ type: FILTER_LIST, key }) 
}

// reducer
export default createReducer(initialState, {
	[ADD_ONE_CELL]: (state, {cell}) => {   
		let newState = {...state}
		newState.list.push(cell)
		return newState
	},
	[TOGGLE_STATUS]: (state, {id}) => {  
		let newState = {...state}
		newState.list.forEach((item) => {
			if (item.id === id) {
				item.isDone = !item.isDone
			}
		})
		return newState
	},
	[FILTER_LIST]: (state, {key}) => {   
		let newState = {...state}
		if (key === '全部') {
			newState.list.forEach((v) => {
				v.isShow = true
			})
		} 

		if (key === '已完成') {
			newState.list.forEach((v) => {
				if (v.isDone) {
					v.isShow = true
				} else {
					v.isShow = false
				}
			})
		}
		
		if (key === '未完成') {
			newState.list.forEach((v) => {
				if (v.isDone) {
					v.isShow = false
				} else {
					v.isShow = true
				}
			})
		} 
		return newState
	}
})