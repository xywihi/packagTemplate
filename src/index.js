import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers'
import HeaderNav from '@/common/navs/HeaderNav'
import { Toast } from 'antd-mobile'
import { GlobalStyle } from './styled.js';
import {
    MemoryRouter as Router,
} from 'react-router-dom';
import styles from './index.less'
import { post } from './api/http';
import { store, counterSlice } from "@/store";
// import 'antd-mobile/dist/antd.css'; // or 'antd/dist/antd.less'

// if (process.env.NODE_ENV == 'development') {
//     require('./mock');
// }
const App = (props) => {
    const [data, setData] = useState([]);
    const isLogin = localStorage.getItem('token')
    // const location = useLocation()
    // const { pathname } = location
    useEffect(() => {
        let token=localStorage.getItem('token');
        if(token){
            post('/client/user-profile').then(res => {
                // document.cookie="token="+res.data.token;
                store.dispatch(counterSlice.actions.getData(res));
            }).catch(err => {
                Toast.show({
                    content: err,
                    position: 'top',
                })
            })
        }
        

    },[])
    return (

        <React.Fragment>
            <GlobalStyle />
            <Router initialEntries={[isLogin ? '/home' : '/login']}>
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