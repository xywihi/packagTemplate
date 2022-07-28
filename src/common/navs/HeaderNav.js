import React, { useState } from 'react'
import {
  useHistory,
  useLocation,
} from 'react-router-dom'
import { NavBar, TabBar } from 'antd-mobile'
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
// const { SubMenu } = Menu;

const HeaderNav = () => {
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location
  const setRouteActive = (value) => {
    console.log(value,'iiiii')
    history.push(value)
  }
  const tabs = [
    {
      key: '/home',
      title: 'Home',
      icon: <AppOutline />,
    },
    {
      key: '/recharge',
      title: 'Recharge',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/team',
      title: 'Team',
      icon: <MessageOutline />,
    },
    {
      key: '/my',
      title: 'My',
      icon: <UserOutline />,
    },
  ]

  const [current, setCurrent] = useState('mail');
  const handleClick = e => {
    setCurrent(e.key);
  };
  return (
    // <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
    //   <Menu.Item key="mail" icon={<MailOutlined />}>
    //     <Link to="/">HOME</Link>
    //   </Menu.Item>
    //   <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
    //     <Link to="/blog">BLOG</Link>
    //   </Menu.Item>
    //   <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
    //     <Menu.ItemGroup title="Item 1">
    //       <Menu.Item key="setting:1">
    //         <Link to="/user">USER1</Link>
    //       </Menu.Item>
    //       <Menu.Item key="setting:2">
    //         <Link to="/user">USER2</Link>
    //       </Menu.Item>
    //     </Menu.ItemGroup>
    //   </SubMenu>
    // </Menu>
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
}

export default HeaderNav
