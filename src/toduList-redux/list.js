import React, { Component } from 'react';   
import { connect } from 'react-redux' 

import { toggleStatus } from '../store/toduList'

class List extends Component { 
  handleClickLi(id) {
    this.props.toggleStatus(id)
  }
  render() {  
    let list = this.props.toduList.list
  	let arrList = list.map((item) => {
  		return <li key={item.id} style={{margin:'10px 0',textDecoration:item.isDone?'line-through':'',display:item.isShow?'block':'none',cursor:'pointer'}} onClick={this.handleClickLi.bind(this,item.id)}>{item.text}</li>
  	}) 
    return (
      <ul> 
      {arrList}
      </ul>
    );
  }
}
 
//把redux的数据映射到props上 
//注意，这个userInfo和bigData是某个js文件下的state
const mapStateToProps = (state) => {  
  return { 
    toduList: state.toduList 
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    toggleStatus: id => dispatch(toggleStatus(id)), 
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(List)