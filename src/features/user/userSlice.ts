import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';
import {RootState} from "../../app/store";

export interface UserState {
    id: string;
    name: string;
    age: number;
    role: string
}

type initialStateType = {
    listUser: UserState[];
};


const listUser: UserState[] = [
    {id: uuidv4(), name: 'le van A', age: 23, role: 'TMA'},
    {id: uuidv4(), name: 'le van b', age: 23, role: 'SE'},
    {id: uuidv4(), name: 'le van C', age: 23, role: 'SSE'}
];
const initialState: initialStateType = {
    listUser,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            // state.push({ id: uuid(), message: action.payload, completed: false });
            state.listUser.push(action.payload);
            return state;
        },
        editUser: (state, action) => {
            console.log('121212', action.payload)
            const {
                payload: {id, name, age, role},
            } = action;

            state.listUser = state.listUser.map((user) =>
                user.id === id ? {...user, name, age, role} : user
            );
            console.log(state.listUser)
            console.log(id)
        },

    }
});
export const selectListUser = (state: RootState) => state.user.listUser;
export default userSlice;
