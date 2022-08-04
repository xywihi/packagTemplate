import { createSlice, configureStore }from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        userInfo: ''
    },
    reducers: {
        getData: (state, action) => {
            console.log(action.payload,'你是什么东西？')
            return {...state, userInfo: action.payload}
        },
        update: (state, action) => {
            let userInfo=JSON.parse(JSON.stringify(state.userInfo))
            userInfo.balance=Number(userInfo.balance)+action.payload.award;
            userInfo.coin=Number(userInfo.coin)+action.payload.coin;
            return {...state, userInfo}
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    }
})

export {
    store,
    counterSlice,
}