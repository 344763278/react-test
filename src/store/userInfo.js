import { createReducer } from '../util'

// state
const initialState = {
  info: {
    name: '张三',
    phone: '13388889999',
		desc: '我是测试的' 
  },
}

export const GET_USER_INFO = 'GET_USER_INFO'

// action
// 获取用户信息 异步   
export const getUserInfo = info => dispatch => {
	//模仿异步请求
	setTimeout(() => {
		dispatch({ type: GET_USER_INFO, info })
	}, 2000) 
} 
 

// reducer
export default createReducer(initialState, {
    [GET_USER_INFO]: (state, { info }) => { 
        return { ...state, info }
    },
})