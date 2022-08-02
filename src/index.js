import React,{useState,useEffect} from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers'
import HeaderNav from '@/common/navs/HeaderNav'
import { NavBar, TabBar } from 'antd-mobile'
import { GlobalStyle } from './styled.js';
import {
    Route,
    Switch,
    MemoryRouter as Router,
} from 'react-router-dom';
import {
    useHistory,
    useLocation,
  } from 'react-router-dom'
import styles from './index.less'
// import 'antd-mobile/dist/antd.css'; // or 'antd/dist/antd.less'

if (process.env.NODE_ENV == 'development') {
    require('./mock');
}
const App =(props)=> {
    const [data,setData]=useState([]);
    // const location = useLocation()
    // const { pathname } = location
    let getData = async ()=> {
        const data = await axios.get('/client/star');
        setData(data.data.data)
    }
    useEffect(()=>{
        console.log(props.history)
        getData();
    },[])
    return (
        
        <React.Fragment>
            <GlobalStyle />
            <Router initialEntries={['/login']}>
                <div className='app'>
                    <div className='body'>
                        <Routers />
                    </div>
                    <div className='bottom'>
                        <HeaderNav />
                    </div>
                </div>
            </Router>
        </React.Fragment>

    )
}
ReactDom.render(<App />, document.getElementById("app"))