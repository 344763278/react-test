import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './index.scss' 
import Header from './subPage/header'  
import Left from './subPage/left'  
import Right from './subPage/right'  

class Home extends Component {
  render() { 
    return (
      <div className="home">
        <Header></Header> 
      	<BrowserRouter>  
    	  	<div>  
	    	  	<Left></Left> 
	    	  	<Right></Right> 
    	  	</div> 
        </BrowserRouter> 
      </div>
    );
  }
}

export default Home;