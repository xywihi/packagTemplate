import { createSlice, configureStore }from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        userInfo: ''
    },
    reducers: {
        getData: (state, action) => {
            
            return {...state, userInfo: action.payload}
        },
        editCoin:(state, action)=>{
            let userInfo=JSON.parse(JSON.stringify(state.userInfo))
            userInfo.balance=Number(userInfo.balance)+action.payload.award;
            userInfo.coin=Number(userInfo.coin)+action.payload.coin;
            userInfo.energy=Number(userInfo.energy)-100;
            return {...state, userInfo}
        },
        editEnergy:(state, action)=>{
            let userInfo=JSON.parse(JSON.stringify(state.userInfo))
            userInfo.energy=Number(userInfo.energy)+action.payload.data.energy;
            return {...state, userInfo}
        },
        updateUserInfo:(state, action)=>{
            console.log(action.payload,'pppppp')
            // let userInfo=JSON.parse(JSON.stringify(state.userInfo))
            // userInfo.energy=Number(userInfo.energy)+action.payload.data.energy;
            return {...state, userInfo:action.payload}
        },
    }
})
const homeDataSlice = createSlice({
    name: 'homeData',
    initialState: {
        data: null
    },
    reducers: {
        getdata: (state, action) => {
            return {...state, data: action.payload}
            
        },
        editTotal:(state, action)=>{
            let data=JSON.parse(JSON.stringify(state.data))
            data.user_stat.total=action.payload;
            return {...state, data}
            
        },
    }
})
const teamDataSlice = createSlice({
    name: 'teamData',
    initialState: {
        data: null
    },
    reducers: {
        getdata: (state, action) => {
            return {...state, data: action.payload}
        },
    }
})
const staticDataSlice = createSlice({
    name: 'staticData',
    initialState: {
        data: null
    },
    reducers: {
        getdata: (state, action) => {
            console.log(action.payload,'wrhweruiowueio')
            return {...state, data: {...state.data,...action.payload}}
        },
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        homeData: homeDataSlice.reducer,
        teamData: teamDataSlice.reducer,
        staticData:staticDataSlice.reducer
    }
})

export {
    store,
    counterSlice,
    homeDataSlice,
    teamDataSlice,
    staticDataSlice
}