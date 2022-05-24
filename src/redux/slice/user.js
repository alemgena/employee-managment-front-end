import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: {
        id: 0,
        name: '',
        salary: '',
        gender: 'male',
        brthDate:''
    },
    reducers: {
        setUserSlice: (state, action) => {
            state = action.payload
            return state
        }
    }
})
export const { setUserSlice } = user.actions
export default user.reducer