import React, { Component } from 'react'  
import { connect } from 'react-redux' 
import { Link } from 'react-router-dom'

class Header extends Component {
  render() { 
  	/*let info = this.props.userInfo.info*/
    return (
      <div className="header">  
        <Link to="/auth">返回登录页面</Link>  
        {/*<span>{info.desc}</span>*/}
      </div>
    );
  }
}
 
//把redux的数据映射到props上
const mapStateToProps = ({ userInfo }) => ({ userInfo }) 

export default connect(mapStateToProps)(Header)