import { createSlice } from "@reduxjs/toolkit";
import { OrdersPageState } from "../../../lib/types/screen";

const initialState: OrdersPageState = {
    pausedOrders: [],
    processOrders: [],
    finishedOrders: [],
};

const ordersPageSlice = createSlice({
    name: "ordersPage",
    initialState,
    reducers: {
        setpausedOrders: (state, action) => {
            state.pausedOrders = action.payload;
        },
        setprocessOrders: (state, action) => {
            state.processOrders = action.payload;
        },
        setfinishedOrders: (state, action) => {
            state.finishedOrders = action.payload;
        },
    }
});

export const { 
    setpausedOrders, 
    setprocessOrders, 
    setfinishedOrders 
} = ordersPageSlice.actions;

const OrdersPageReducer = ordersPageSlice.reducer;
export default OrdersPageReducer;