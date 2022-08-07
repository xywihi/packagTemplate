import React, { useState, useEffect} from 'react'
import {
    MemoryRouter as Router,
    useHistory,
    withRouter 
} from 'react-router-dom';

// import 'antd-mobile/dist/antd.css'; // or 'antd/dist/antd.less'

// if (process.env.NODE_ENV == 'development') {
//     require('./mock');
// }
const Auth = ({children,...props}) => {
    const history=useHistory();
    // const location = useLocation()
    // const { pathname } = location
    useEffect(() => {
        let token = localStorage.getItem('token');
        console.log(token,'kkklllnnnmmm')
        if (!token) {
            history.push('/login')
            console.log(props,'lllllllll')
        }else{
            
            console.log(history,'kkklllnnnmmm')
        }


    }, [])
    return (

        <div>
        {children}
        </div>

    )
}
export default Auth;