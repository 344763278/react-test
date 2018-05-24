import React, { Component } from 'react'  
import {Route, Switch} from 'react-router-dom' 
import ToduList from '../../toduList' 
import ToduListRedux from '../../toduList-redux'  
import routerConfig from '../../config/routes' 
import NotFound  from '../../404'

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
  componentDidMount() {
    console.log(routerConfig)
  }
  render() { 
    return (
      <div className="right"> 
      	<Switch>	  
          {routerConfig.map((item,i)=>
              <Route key={i} path={item.path} 
                component={item.component}
                exact={item.isExact?true:false}
              />
          )} 
          <Route component={NotFound}/> 
      	</Switch>
      </div>
    );
  }
}

export default Right;