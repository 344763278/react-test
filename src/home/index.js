import React, { Component } from 'react'; 
import ToduList from '../toduList'  

class Home extends Component {
  render() { 
    return (
      <div className="home"> 
        <ToduList></ToduList>
      </div>
    );
  }
}

export default Home;