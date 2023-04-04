import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductsService from "../../api/services/Products";

export const getProducts = createAsyncThunk("fetchProducts", async () => {
  try {
    const res = await ProductsService.getAllProducts();

    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const getPaginatedProducts = createAsyncThunk(
  "paginateProducts",
  async (numbersForPaginations) => {
    try {
      const res = await ProductsService.getPaginatedProducts(
        numbersForPaginations.currentPage,
        numbersForPaginations.numberOfProductsForPage
      );

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getFilteredProducts = createAsyncThunk(
  "filterProducts",
  async (category) => {
    try {
      const res = await ProductsService.getFilteredProducts(category);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const slice = createSlice({
  name: "products",
  initialState: {
    products: [],
    paginatedProducts: [],
    filteredProducts: [],
  },

  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [getPaginatedProducts.fulfilled]: (state, action) => {
      state.paginatedProducts = action.payload;
    },
    [getFilteredProducts.fulfilled]: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
});

export default slice.reducer;
