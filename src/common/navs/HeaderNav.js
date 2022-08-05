import React, { useState } from 'react'
import {
  useHistory,
  useLocation,
} from 'react-router-dom'
import { NavBar, TabBar, Image } from 'antd-mobile';
import home from '@/assets/icons/bottomNav/home.png';
import home_active from '@/assets/icons/bottomNav/home_active.png';
import recharge from '@/assets/icons/bottomNav/recharge.png';
import recharge_active from '@/assets/icons/bottomNav/recharge_active.png';
import team from '@/assets/icons/bottomNav/team.png';
import team_active from '@/assets/icons/bottomNav/team_active.png';
import my from '@/assets/icons/bottomNav/my.png';
import my_active from '@/assets/icons/bottomNav/my_active.png';
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
      key: '/',
      title: ((active) => <span style={{color:active ? '#333' : '#B0B0B0'}}>home</span>),
      icon: ((active) => <Image
      src={active ? home_active : home}
      width={30}
      height={30}
      fit='contain'
  />),
    },
    {
      key: '/recharge',
      title: ((active) => <span style={{color:active ? '#333' : '#B0B0B0'}}>Recharge</span>),
      icon: ((active) => <Image
      src={active ? recharge_active : recharge}
      width={30}
      height={30}
      fit='contain'
  />),
    },
    {
      key: '/team',
      title: ((active) => <span style={{color:active ? '#333' : '#B0B0B0'}}>Team</span>),
      icon: ((active) => <Image
      src={active ? team_active : team}
      width={30}
      height={30}
      fit='contain'
  />),
    },
    {
      key: '/my',
      title: ((active) => <span style={{color:active ? '#333' : '#B0B0B0'}}>My</span>),
      icon: ((active) => <Image
      src={active ? my_active : my}
      width={30}
      height={30}
      fit='contain'
  />),
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
