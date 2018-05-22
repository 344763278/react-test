import React, { Component } from 'react';  
import './index.scss' 
import Search from './search'
import List from './list'
import Tab from './tab'

class ToduList extends Component {
	constructor(props) {
		super(props)
		this.id = 0
		this.state = {
			data: [{
				id: this.id,
				text: '静夜思',
				isDone: false,
				isShow: true
			}],
			showData: []
		}
		this.clickSeach = this.clickSeach.bind(this)
		this.clickLi = this.clickLi.bind(this)
	}

	clickSeach(val) {  
		let data = [...this.state.data]
		this.id++
		data.push({
			id: this.id,
			text: val,
			isDone: false,
			isShow: true
		}) 
		this.setState({
			data
		})   
	}	

	clickLi(id) {
		console.log(id)
		let data = [...this.state.data]
		data.forEach((item) => {
			if (item.id === id) {
				item.isDone = !item.isDone
			}
		})
		this.setState({
			data
		})
	}

	clickActive(val) { 
		let data = [...this.state.data]
		switch(val) {
			case '全部':
				data.forEach((item) => {
					item.isShow = true
				})
				break
			case '已完成':
				data.forEach((item) => {
					item.isDone ? item.isShow = true : item.isShow = false
				})
				break
			case '未完成':
				data.forEach((item) => {
					!item.isDone ? item.isShow = true : item.isShow = false 
				}) 
				break
		}
 
		this.setState({
			data
		})
	}
  render() { 
    return (
      <div className="dodu-list" style={{width:'230px',marginTop:'100px',marginLeft:'auto',marginRight:'auto'}}> 
      	<Search clickSeach={this.clickSeach}></Search> 
      	<List data={this.state.data} clickLi={this.clickLi}></List> 
      	<Tab clickActive={this.clickActive.bind(this)}></Tab>
      </div>
    );
  }
}

export default ToduList;