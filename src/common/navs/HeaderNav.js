import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons'
const { SubMenu } = Menu;

const HeaderNav = () => {
    const [current,setCurrent]=useState('mail');
    const handleClick = e => {
        setCurrent(e.key);
      };
    return (
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
        <Link to="/">HOME</Link>
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
        <Link to="/blog">BLOG</Link>
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">
            <Link to="/user">USER1</Link>
            </Menu.Item>
            <Menu.Item key="setting:2">
            <Link to="/user">USER2</Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    );
}

export default HeaderNav
