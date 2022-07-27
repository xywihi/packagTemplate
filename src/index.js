import React from 'react'
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
} from 'react-router-dom'

import styles from './index.less'
// import 'antd-mobile/dist/antd.css'; // or 'antd/dist/antd.less'

if (process.env.NODE_ENV == 'development') {
    require('./mock');
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: '' };
    }
    async getData() {
        const data = await axios.get('/home/imfo');
        this.setState({
            data: data.data.data
        })
    }
    componentDidMount() {
        this.getData();
    }
    render() {
        return (
            // <BrowserRouter >
            //     <HeaderNav/>
            //    <Routers/>
            // </BrowserRouter>
            <React.Fragment>
                <GlobalStyle />
                <Router initialEntries={['/home']}>

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
}
ReactDom.render(<App />, document.getElementById("app"))