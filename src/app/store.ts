import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { productApi } from "../services/product";
import { categoryApi } from "../services/category";
import productReducer from "../slice/product";

const store = configureStore({
  reducer: {
    // products: productReducer,
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      categoryApi.middleware
    ),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(categoryApi.middleware),
});
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

export default store;
