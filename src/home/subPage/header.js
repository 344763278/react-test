import React, { Component } from 'react'  
import { connect } from 'react-redux' 
import { Link } from 'react-router-dom'

class Header extends Component {
  render() { 
    return (
      <div className="header">  
        <Link to="/auth">返回登录页面</Link> 
        -------
        <span>{this.props.userInfo.info.desc}</span>
      </div>
    );
  }
}
 
//把redux的数据映射到props上
const mapStateToProps = ({ userInfo }) => ({ userInfo }) 

export default connect(mapStateToProps)(Header)