import React, { Component } from 'react'; 
// import { BrowserRouter, Route, Switch, link, hasHistory, IndexLink, router, match} from 'react-router-dom'
import { BrowserRouter, Route, Switch, Link, Router} from 'react-router-dom'
import './App.css';  
// import ToduList from './toduList'
import Auth from './auth'
import Home from './home'

class App extends Component {
  render() { 
    return (
      <div className="App">   
			  	<BrowserRouter> 
				  	<div> 
			  			<Link to="/auth">点击访问auth</Link> &nbsp;&nbsp;&nbsp;&nbsp;
			  			<Link to="/home">点击访问home</Link> 
			  		  <Route path="/" exact component={Auth} />
			  		  <Route path="/auth" component={Auth} />
			  		  <Route path="/home" component={Home} /> 
				  	</div> 
			    </BrowserRouter> 
      </div>
    );
  }
}

export default App;
