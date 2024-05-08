import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [] //intial state
};

export const userSlice = createSlice({    //creating a slice 
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const user = {
        id: Date.now(),
        name: action.payload.name,
        email:action.payload.email,
        password: action.payload.password,
      };
      state.userData.push(user);
    },
  },
});

export const { addUser } = userSlice.actions; // export actions
export default userSlice.reducer; // export reducer functions
