import { createReducer } from '../util'

// state
const initialState = {
  info: {
    name: '张三',
    phone: '13388889999',
		desc: '我是测试的' 
  },
}

export const SET_USER_INFO = 'SET_USER_INFO'

// action
// 获取用户信息 异步   
export const setUserInfo = info => dispatch => {
	//模仿异步请求
	setTimeout(() => {
		dispatch({ type: SET_USER_INFO, info })
	}, 2000) 
} 
 

// reducer
export default createReducer(initialState, {
    [SET_USER_INFO]: (state, { info }) => {  
        return { ...state, info}
    },
})