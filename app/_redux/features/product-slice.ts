import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import axios from 'axios';

interface Product {
    id: string;
    brand: string;
    models: Record<string, string[]>;  
  }
  
  interface ProductState {
    brands: string[];
    models: {},
   /*  addedProducts: Product[]; */
   allProducts: Product[];
   filterProduct:Product[];
  }
  
  const initialState: ProductState = {
    brands: [],
    models: [],
    /* addedProducts: [], */
    allProducts: [],
    filterProduct: []
  };

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
    try {
      const response = await axios.get('https://5fc9346b2af77700165ae514.mockapi.io/products');
      console.log('data',response)
      return response.data;
    } catch (error) {
      throw error;
    }
  });
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      // Eklenecek ürünü array'e ekleyen bir reducer
      filterProduct: (state, action: PayloadAction<Product>) => {
        state.filterProduct = []; // allProducts dizisini sıfırla
        state.filterProduct.push(action.payload); // Yeni ürünü ekle
      }
     /*  addProduct: (state, action: PayloadAction<Product>) => {
        state.addedProducts.push(action.payload);
      }, */
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<any[]>) => {
          const brands = Array.from(new Set(action.payload.map((product) => product.brand)));
          const models: Record<string, string[]> = {};
          const allProducts: Product[] = action.payload;
          brands.forEach((brand) => {
            models[brand] = action.payload
              .filter((product) => product.brand.toLowerCase().includes(brand.toLowerCase()))
              .map((product) => product.model);
          });
    
          return {
            ...state,
            brands,
            models,
            allProducts
          };
        });
      },
})

export const {filterProduct  } = productSlice.actions
export default productSlice.reducer
