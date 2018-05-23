import React, { Component } from 'react'
import { Link } from 'react-router-dom'  

class Left extends Component {
  render() { 
    return ( 
      <div className="left">
        <ul >
          <li><Link to="/home/sub1">页面1</Link></li> 
          <li><Link to="/home/sub2">页面2</Link></li> 
          <li><Link to="/home/sub3">页面3</Link></li> 
        </ul> 
      </div>
      
    );
  }
}

export default Left;