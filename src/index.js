import React from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers'
import HeaderNav from '@/common/navs/HeaderNav'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

if(process.env.NODE_ENV=='development'){
    require('./mock');
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data:''};
      }
    async getData(){
        const data=await axios.get('/home/imfo');
        this.setState({
            data:data.data.data
        })
    }
    componentDidMount(){
        this.getData();
    }
    render(){
        return (
            <BrowserRouter >
                <HeaderNav/>
               <Routers/>
            </BrowserRouter>
        )
    }
}
ReactDom.render(<App/>,document.getElementById("app"))