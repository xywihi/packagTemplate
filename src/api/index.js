import { get, post } from './http';
import { Toast } from 'antd-mobile';

//获取区号
export const getCountry=()=>new Promise((resolve)=>{
    get('/client/get-country').then(res => {
        // document.cookie="token="+res.data.token;
        // store.dispatch(counterSlice.actions.update(res));
        resolve(res.data.data)
    }).catch(err => {
        Toast.show({
            content: err,
            position: 'top',
        })
    })
})

//登录
export const toLogin=(parameter)=>new Promise((resolve)=>{
    post('/client/login',parameter).then(res => {
        // document.cookie="token="+res.data.token;
        // store.dispatch(counterSlice.actions.update(res));
        resolve(res.data)
    }).catch(err => {
        Toast.show({
            content: err,
            position: 'top',
        })
    })
})

//登出
export const toLogout=()=>new Promise((resolve)=>{
    post('/client/logout').then(res => {
        // document.cookie="token="+res.data.token;
        // store.dispatch(counterSlice.actions.update(res));
        resolve(res.data)
    }).catch(err => {
        Toast.show({
            content: err,
            position: 'top',
        })
    })
})

//获取用户信息
export const getUserInfo=()=>new Promise((resolve)=>{
    let token=localStorage.getItem('token');
    post('/client/user-profile').then(res => {
        // document.cookie="token="+res.data.token;
        // store.dispatch(counterSlice.actions.update(res));
        resolve(res)
    }).catch(err => {
        Toast.show({
            content: err,
            position: 'top',
        })
    })
})

//获取首页信息
export const getHomeData=()=>new Promise((resolve)=>{
    get('/client/home').then(res => {
        // document.cookie="token="+res.data.token;
        // store.dispatch(counterSlice.actions.update(res));
        resolve(res.data.data)
    }).catch(err => {
        Toast.show({
            content: err,
            position: 'top',
        })
    })
})

//获取团队
export const getTeams=()=>new Promise((resolve)=>{
    get('/client/team').then(res => {
        // document.cookie="token="+res.data.token;
        // store.dispatch(counterSlice.actions.update(res));
        resolve(res.data.data)
    }).catch(err => {
        Toast.show({
            content: err,
            position: 'top',
        })
    })
})

//获取团队详情
export const getTeamsDetail=()=>new Promise((resolve)=>{
    get('/client/team-detail').then(res => {
        // document.cookie="token="+res.data.token;
        // store.dispatch(counterSlice.actions.update(res));
        resolve(res.data.data)
    }).catch(err => {
        Toast.show({
            content: err,
            position: 'top',
        })
    })
})

//获取星级列表
export const getLevels=()=>new Promise((resolve)=>{
    get('/client/star').then(res => {
        // document.cookie="token="+res.data.token;
        // store.dispatch(counterSlice.actions.update(res));
        resolve(res.data.data)
    }).catch(err => {
        Toast.show({
            content: err,
            position: 'top',
        })
    })
})

//捐赠
export const handleDonate=(money)=>new Promise((resolve)=>{
    post('/client/donate',{money}).then(res => {
        // document.cookie="token="+res.data.token;
        // store.dispatch(counterSlice.actions.update(res));
        resolve(res.data)
    }).catch(err => {
        Toast.show({
            content: err,
            position: 'top',
        })
    })
})

//领取每日奖励
export const getDailyReward=()=>new Promise((resolve)=>{
    get('/client/star-award').then(res => {
        // document.cookie="token="+res.data.token;
        // store.dispatch(counterSlice.actions.update(res));
        resolve(res.data.data)
    }).catch(err => {
        Toast.show({
            content: err,
            position: 'top',
        })
    })
})



//守护者抽奖
export const handleLotteryNormal=()=>new Promise((resolve)=>{
    get('/client/normal-lottery').then(res => {
        // document.cookie="token="+res.data.token;
        // store.dispatch(counterSlice.actions.update(res));
        resolve(res.data.data)
    }).catch(err => {
        Toast.show({
            content: err,
            position: 'top',
        })
    })
})
//先锋者抽奖
export const handleLotterySuper=()=>new Promise((resolve)=>{
    get('/client/super-lottery').then(res => {
        // document.cookie="token="+res.data.token;
        // store.dispatch(counterSlice.actions.update(res));
        resolve(res.data.data)
    }).catch(err => {
        Toast.show({
            content: err,
            position: 'top',
        })
    })
})


