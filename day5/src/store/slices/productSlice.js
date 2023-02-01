import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
import axios from "axios";

const baseURL = "http://localhost:3000/data";
let initialState = {
  productsList: [],
  errors: [],
  isLoading: false,
};

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(`${baseURL}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post(baseURL, product);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (product, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.put(`${baseURL}/${product.id}`, product);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const removeProduct = createAsyncThunk(
  "products/removeProduct",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.delete(`${baseURL}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.productsList = action.payload;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    [getProductById.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProductById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.productsList = action.payload;
    },
    [getProductById.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    [createProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [createProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.productsList = action.payload;
    },
    [createProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    [editProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [editProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.productsList = action.payload;
    },
    [editProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    [removeProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [removeProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.productsList = action.payload;
    },
    [removeProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const productsReducer = productsSlice.reducer;
export const productsActions = productsSlice.actions;
