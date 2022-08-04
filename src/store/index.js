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
        update: (state, action) => {
            let userInfo=JSON.parse(JSON.stringify(state.userInfo))
            switch (action.payload.type) {
                case 'editCoin':
                    userInfo.balance=Number(userInfo.balance)+action.payload.data.award;
                    userInfo.coin=Number(userInfo.coin)+action.payload.data.coin;
                    userInfo.energy=Number(userInfo.energy)-100;
                    break;
                case 'editEnergy':
                    userInfo.energy=Number(userInfo.energy)+action.payload.data.energy;
                    break;
            
                default:
                    break;
            }
            
            return {...state, userInfo}
        }
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
        update: (state, action) => {
            let data=JSON.parse(JSON.stringify(state.data))
            switch (action.payload.type) {
                case 'editTotal':
                    data.user_stat.total=action.payload.data.total;
                    break;
            
                default:
                    break;
            }
            console.log(data,'yyyyyyyyyyyyyyyyyy')
            return {...state, data}
        }
    }
})
const teamDataSlice = createSlice({
    name: 'teamData',
    initialState: {
        data: null
    },
    reducers: {
        getdata: (state, action) => {
            console.log(action.payload,'wrhweruiowueio')
            return {...state, data: action.payload}
        },
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        homeData: homeDataSlice.reducer,
        teamData: teamDataSlice.reducer,
    }
})

export {
    store,
    counterSlice,
    homeDataSlice,
    teamDataSlice
}