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

export const getProductById = createAsyncThunk("getProductById", async (id) => {
  try {
    const res = await ProductsService.getProductById(id);

    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const addProductToBag = createAsyncThunk(
  "addProductToBag",
  async (product) => {
    try {
      const res = await ProductsService.addProductToBag(product);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getUserProducts = createAsyncThunk(
  "getUserProducts",
  async (id) => {
    try {
      const res = await ProductsService.getUserProducts(id);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteProductFromBag = createAsyncThunk(
  "deleteProductFromBag",
  async (id) => {
    try {
      const res = await ProductsService.deleteProductFromBag({ id: id });

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteAllProductsFromBag = createAsyncThunk(
  "deleteProductFromBag",
  async (id) => {
    try {
      const res = await ProductsService.deleteAllProductsFromBag({
        userId: id,
      });

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const increaseUserProduct = createAsyncThunk(
  "increaseUserProduct",
  async (product) => {
    console.log(product);
    try {
      const res = await ProductsService.increaseUserProduct(product);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const slice = createSlice({
  name: "products",
  initialState: {
    product: {},
    products: [],
    paginatedProducts: [],
    filteredProducts: [],
    userProducts: [],
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
    [getProductById.fulfilled]: (state, action) => {
      state.product = action.payload;
    },
    [addProductToBag.fulfilled]: (state, action) => {
      //state.product = action.payload;
    },
    [getUserProducts.fulfilled]: (state, action) => {
      state.userProducts = action.payload;
    },
    [deleteProductFromBag.fulfilled]: (state, action) => {
      state.userProducts = state.userProducts.filter(
        (product) => product.id !== action.payload.id
      );
    },
    [deleteAllProductsFromBag.fulfilled]: (state, action) => {
      state.userProducts = [];
    },
    [increaseUserProduct.fulfilled]: (state, action) => {
      state.userProducts = action.payload;
    },
  },
});

export default slice.reducer;
