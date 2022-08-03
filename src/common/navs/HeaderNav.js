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
  const { pathname } = location;
  console.log(pathname,'sssss')
  const setRouteActive = (value) => {
    console.log(pathname,'iiiii')
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
    tabs.some(item=>pathname==item.key) &&
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
}

export default HeaderNav
