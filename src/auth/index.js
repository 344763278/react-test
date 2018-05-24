import React, { Component } from 'react';  
import { connect } from 'react-redux' 
import { Link } from 'react-router-dom'
import './index.scss'

//把action拿过来
import { setUserInfo } from '../store/userInfo'
import { addData } from '../store/bigData'

class Auth extends Component {  
	componentDidMount() {
		console.log(this.props) 
	}
	handleClick() {
		this.props.setUserInfo({
			desc: '变了'
		})
	}
	handleClickBigData() { 
		this.props.addData({
			id: Math.random(),
			name: `新加的内容${Math.random()}`
		})

	}
  render() { 
    return (
      <div className="auth">  
      	<div>{this.props.userInfo.info.desc}</div>
      	<div>{this.props.userInfo.info.a}</div>
      	<div>{this.props.userInfo.info.b}</div>
        <Link to="/home"> 
					<button>返回到主页</button>  
        </Link> 
        <br/><br/>
        <button onClick={this.handleClick.bind(this)}>点击改变用户信息 -- 触发action 和 reducer</button> <br/><br/>
        <button onClick={this.handleClickBigData.bind(this)}>点击改变大数据列表 -- 触发action 和 reducer</button>
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
    setUserInfo: info => dispatch(setUserInfo(info)),
    addData: data => dispatch(addData(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)