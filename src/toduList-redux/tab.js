import React, { Component } from 'react';   
import { connect } from 'react-redux' 

import { filterList } from '../store/toduList'

class Tab extends Component {
	constructor(props) {
		super(props)
		this.state = {
			flag: '全部'
		} 
	}
	click(val) { 
		this.setState({
			flag: val
		}) 
		this.props.filterList(val)
	}
  render() { 
    return (
    	<div className="tab">
    		<button className={this.state.flag==='全部'?'active':''} onClick={this.click.bind(this, '全部')}>全部</button>
    		<button className={this.state.flag==='已完成'?'active':''} style={{margin: '0 10px'}} onClick={this.click.bind(this, '已完成')}>已完成</button>
    		<button className={this.state.flag==='未完成'?'active':''} onClick={this.click.bind(this, '未完成')}>未完成</button>
    	</div> 
    );
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
    filterList: key => dispatch(filterList(key)), 
  }
}

//这2个必须写上，那么回来的数据为空，因为传参数有顺序问题
export default connect(mapStateToProps, mapDispatchToProps)(Tab)