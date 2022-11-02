import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/nftSlice";

const store = configureStore({
  reducer: {
    nfts: reducer,
  },
});

export default store;
