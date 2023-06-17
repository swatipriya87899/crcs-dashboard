import { combineReducers } from "@reduxjs/toolkit";
import appInfoSlice from "./appInfoSlice";


const rootReducer=combineReducers({
    appInfo:appInfoSlice
})

export default rootReducer