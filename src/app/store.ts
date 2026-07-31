import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";
import HomePage from './screens/homePage/index';
import HomePageReducer from "./screens/homePage/slice";
import OrdersPageReducer from "./screens/ordersPage/slice";
import ProductsPageReducer from "./screens/productsPage/slice";


export const store = configureStore({
  middleware: (getDefaultMiddleware) =>   // redux-logger integration - bu bizga har bir changeni log qilib berar ekan
    // @ts-ignore
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
    productsPage: ProductsPageReducer,
    ordersPage: OrdersPageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
