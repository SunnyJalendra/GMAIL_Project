import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./appSlice";
const Store = configureStore({
    reducer: {
        appSlice: appReducer
    }
})
export default Store;