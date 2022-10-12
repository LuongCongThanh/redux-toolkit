import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';
import {RootState} from "../../app/store";

export interface ListUser {
	id: string;
	name: string;
	age: number;
	role: string
}

const userSlice = createSlice({
	name: "user",
	initialState: [
		{id: uuidv4(), name: 'le van A', age: 23, role: 'TMA'},
		{id: uuidv4(), name: 'le van b', age: 23, role: 'SE'},
		{id: uuidv4(), name: 'le van C', age: 23, role: 'SSE'}
	] as ListUser[],
	reducers: {
		addUser: (state, action) => {
			// state.push({ id: uuid(), message: action.payload, completed: false });
			state.push(action.payload);
			return state;
		},

	}
});
export const selectListUser = (state: RootState) => state.user;
export default userSlice;
