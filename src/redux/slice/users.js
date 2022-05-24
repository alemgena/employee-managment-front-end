import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
    name: 'users',
    initialState: [{
        _id: '',
        name: '',
        salary: '',
        gender: '',
        birthDate:''
    }],
    reducers: {
        getUsersSlice: (state, action) => {
            state = action.payload
            return state
        },
        addUserSlice: (state, action) => {
            state.push(action.payload)
            return state
        },
        editUserSlice: (state, action) => {
            console.log(action)
            state = state.map(i => i.name == action.payload.name? action.payload : i)
            console.log(state)
            return state
        },
        deleteUserSlice: (state, action) => {
            console.log(action.payload)
            state = state.filter(i => i._id!== action.payload)
            console.log(state)
            return state
        }
    }
})
export const { getUsersSlice, addUserSlice, editUserSlice, deleteUserSlice } = users.actions
export default users.reducer