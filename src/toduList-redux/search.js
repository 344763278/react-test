import React, { Component } from 'react';   
import { connect } from 'react-redux' 

import { addOneCell } from '../store/toduList'

class Search extends Component { 
	handerSearch() {
		let input = this.refs.input
		if(!input.value) return 
    let cell = {
      id: Math.random(),
      text: input.value,
      isDone: false,
      isShow: true
    }
    this.props.addOneCell(cell) 
		input.value = ''
	}
  render() { 
    return (
      <div className="search">  
      	<input type="text" ref="input"/>
      	<button onClick={this.handerSearch.bind(this)}>搜索</button>
      </div>
    )
  }
}
 
//把redux的数据映射到props上 
//注意，这个userInfo和bigData是某个js文件下的state 
//把redux的action映射到props上 会自动dispatch 

const mapStateToProps = (state) => { 
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addOneCell: info => dispatch(addOneCell(info)), 
  }
}

//这2个必须写上，那么回来的数据为空，因为传参数有顺序问题
export default connect(mapStateToProps, mapDispatchToProps)(Search)