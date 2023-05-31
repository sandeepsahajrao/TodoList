import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import UserDataName from "./storeUserData";
const store =configureStore({
    name:'Toggle',
    reducer:{
        toggleSlice:toggleSlice,
        UserDataName:UserDataName
    }
});

export default store