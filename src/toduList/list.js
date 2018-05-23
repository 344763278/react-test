import React, { Component } from 'react';   

class List extends Component {
	
	
	componentDidMount() {
		// console.log(this.props) 
	}
  render() { 

  	let list = this.props.data.map((item) => {
  		return <li key={item.id} style={{margin:'10px 0',textDecoration:item.isDone?'line-through':'',display:item.isShow?'block':'none',cursor:'pointer'}} onClick={()=>{this.props.clickLi(item.id)}}>{item.text}</li>
  	})

    return (
      <ul> 
      {list}
      </ul>
    );
  }
}

export default List;