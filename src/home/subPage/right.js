import React, { Component } from 'react'  
import {Route, Switch} from 'react-router-dom' 
import ToduList from '../../toduList' 

const Sub2 = () => (
  <div>
    <h2>Sub2</h2>
  </div>
)

const Sub3 = () => (
  <div>
    <h2>Sub3</h2>
  </div>
)

const NoMatch = () => (
  <div>
    <h2>404</h2>
  </div>
)

class Right extends Component {
  render() { 
    return (
      <div className="right"> 
      	<Switch>	   
	      	<Route path="/home" exact component={ToduList} />  
	      	<Route path="/home/sub1"  component={ToduList} />  
	      	<Route path="/home/sub2"  component={Sub2} />  
	      	<Route path="/home/sub3"  component={Sub3} />  
	      	<Route component={NoMatch}/>
      	</Switch>
      </div>
    );
  }
}

export default Right;