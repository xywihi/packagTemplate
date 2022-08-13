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
export const toLogin=(parameter)=>new Promise((resolve,reject)=>{
    post('/client/login',parameter).then(res => {
        // document.cookie="token="+res.data.token;
        // store.dispatch(counterSlice.actions.update(res));
        resolve(res.data)
    }).catch(err => {
        reject(err)
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
//充值记录
export const getRechargeRecord=(params)=>new Promise((resolve)=>{
    get('/client/recharge-list',params).then(res => {
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
//提现记录
export const getWithdrawalRecord=(params)=>new Promise((resolve)=>{
    get('/client/withdraw-list',params).then(res => {
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
//资金记录
export const getFundRecord=(params)=>new Promise((resolve)=>{
    get('/client/user-wallet-log',params).then(res => {
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
//收入统计
export const getIncomeStatistics=()=>new Promise((resolve)=>{
    get('/client/user-earnings').then(res => {
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

//获取用户钱包地址

export const handleGetWallet = () =>
  new Promise((resolve) => {
    get("/client/user-wallet")
      .then((res) => {
        // document.cookie="token="+res.data.token;
        // store.dispatch(counterSlice.actions.update(res));
        resolve(res.data.data);
      })
      .catch((err) => {
        Toast.show({
          icon: "fail",
          content: err,
          position: "top",
        });
      });
  });

//提交提现申请
export const handleWithdraw = (data) =>
  new Promise((resolve) => {
    post("/client/user-withdraw", { ...data })
      .then((res) => {
        // document.cookie="token="+res.data.token;
        // store.dispatch(counterSlice.actions.update(res));
        Toast.show({
          icon: "success",
          content: res.message,
          position: "center",
        });
      
        resolve(res);
      })
      .catch((err) => {
        Toast.show({
          icon: "fail",
          content: err,
          position: "top",
        });
      });
  });