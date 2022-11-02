import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hooks";

export const fetchNfts = createAsyncThunk("nft/fetchNfts", async () => {
  const { request } = useHttp();
  const data = await request(
    "https://api.opensea.io/api/v1/assets?format=json"
  );
  return data;
});

const initialState = {
  nftItems: [],
  status: null,
  currentProduct: null,
};

const nftSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
  },
  extraReducers: {
    [fetchNfts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchNfts.fulfilled]: (state, action) => {
      state.nftItems = action.payload;
      state.status = "success";
    },
    [fetchNfts.rejected]: (state, action) => {
      state.status = "error";
      state.nftItems = [];
    },
  },
});

export const { setCurrentProduct } = nftSlice.actions;

const { reducer } = nftSlice;
export default reducer;
