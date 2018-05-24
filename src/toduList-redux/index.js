import React, { Component } from 'react';  
import { connect } from 'react-redux' 
import './index.scss' 
import Search from './search'
import List from './list'
import Tab from './tab'

import { addOneCell, toggleStatus, filterList } from '../store/toduList'

class ToduList extends Component { 
  render() { 
    return (
      <div className="dodu-list" style={{width:'230px',marginTop:'100px',marginLeft:'auto',marginRight:'auto'}}> 
      	<h3>redux版本--页面2</h3>
      	<Search></Search> 
      	<Tab></Tab>
      	<List></List> 
      </div>
    );
  }
}
 
//把redux的数据映射到props上 
//注意，这个userInfo和bigData是某个js文件下的state
const mapStateToProps = (state) => { 
  return {
    toduList: state.toduList 
  }
}

//把redux的action映射到props上 会自动dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    addOneCell: cell => dispatch(addOneCell(cell)),
    toggleStatus: cell => dispatch(toggleStatus(cell)),
    filterList: key => dispatch(filterList(key)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToduList)