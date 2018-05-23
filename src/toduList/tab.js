import React, { Component } from 'react';   

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
		this.props.clickActive(val)
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

export default Tab;