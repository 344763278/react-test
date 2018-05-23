import React, { Component } from 'react'; 
import { Provider } from 'react-redux'
import store from './store'
// import { BrowserRouter, Route, Switch, link, hasHistory, IndexLink, router, match} from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss';   
import Auth from './auth'
import Home from './home'

class App extends Component { 
  render() {  
    return (
    	<Provider store={store}>
	      <div className="app-wrap">   
				  	<BrowserRouter> 
					  	<div>
					  		<Switch>  
					  		  <Route path="/" exact component={Auth} />
					  		  <Route path="/auth" component={Auth} />
					  		  <Route path="/home" component={Home} /> 
				  		  </Switch>
					  	</div> 
				    </BrowserRouter> 
	      </div>
      </Provider>
    );
  }
}

export default App;
