import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'  
import { Menu } from 'antd'
import menuConfig from '../../config/menu'
const SubMenu = Menu.SubMenu

class Left extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keys: []
    }
  }
  onSelect = ({key}) =>{
    let path = key
    this.props.history.push(path) 
  }
  render() { 
    return ( 
      <div className="left"> 
        <Menu mode="inline" theme="dark" onSelect={this.onSelect} selectedKeys={this.state.keys}>
            {menuConfig.map((item,i)=>
              item.list && item.list.length > 0 ?
                <SubMenu key={item.key} title={<span><span className={'font icon-' +item.icon}></span><span>{item.title}</span></span>}>
                    {item.list.map((listItem,ii)=>
                        <Menu.Item key={item.key+listItem.key}>
                            <span>{listItem.title}</span>
                        </Menu.Item>
                    )}
                </SubMenu>
                :
                <Menu.Item key={item.key}>
                    <span className={'font icon-' +item.icon}></span>
                    <span>{item.title}</span>
                </Menu.Item>
            )}
        </Menu>
      </div>
      
    );
  }
}

export default withRouter(Left);