import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductInfo } from "../../../types";

const initialState: ProductInfo = {
   id: "",
   title: "",
   image: "",
   subtitle: "",
   brand: "",
   reviews: [],
   retailer: "",
   details: [],
   tags: [],
   sales: [],
};

export const productSlice = createSlice({
   name: "product",
   initialState,
   reducers: {
      setProduct: (state, action: PayloadAction<ProductInfo>) => {
         state = action.payload;
         return state;
      },
   },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
