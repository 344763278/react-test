import React, { Component } from 'react';   

class Search extends Component {
	handerSearch() {
		let val = this.refs.input.value
		if(!val) return
		this.props.clickSeach(val)
		this.refs.input.value = ''
	}
  render() { 
    return (
      <div className="search">  
      	<input type="text" ref="input"/>
      	<button onClick={this.handerSearch.bind(this)}>搜索</button>
      </div>
    );
  }
}

export default Search;