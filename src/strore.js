import { configureStore } from "@reduxjs/toolkit";
import citySlice from "./redux/CitySlice";
import LocationSlice from "./redux/LocationSlice";
import CartSlice from "./redux/CartSlice";
import ServiceSlice from "./redux/ServiceSlice";

export const store=configureStore({
    reducer:{
        city:citySlice,
        location:LocationSlice,
        cart:CartSlice,
        service:ServiceSlice
    }
})