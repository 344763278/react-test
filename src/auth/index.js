import React, { Component } from 'react';  
import { connect } from 'react-redux' 
import { Link } from 'react-router-dom'
import './index.scss'

//把action拿过来
import { getUserInfo } from '../store/userInfo'
import { getData } from '../store/bigData'

class Auth extends Component { 
	componentDidMount() {
		console.log(this.props) 
	}
	handleClick() {
		this.props.getUserInfo({
			desc: '变了'
		})
	}
  render() { 
    return (
      <div className="auth">  
      	<div>{this.props.userInfo.info.desc}</div>
        <Link to="/home"> 
					<button>返回到主页</button>  
        </Link> 
        <br/><br/>
        <button onClick={this.handleClick.bind(this)}>点击改变 -- 触发action 和 reducer</button>
        {this.props.bigData.list.map((v) => {
					return <div key={v.id}>{v.name}</div>
        })}
      </div>
    );
  }
} 

//把redux的数据映射到props上 
//注意，这个userInfo和bigData是某个js文件下的state
const mapStateToProps = (state) => { 
  return {
    userInfo: state.userInfo,
    bigData: state.bigData
  }
}

//把redux的action映射到props上 会自动dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: info => dispatch(getUserInfo(info)),
    getData: data => dispatch(getData(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)