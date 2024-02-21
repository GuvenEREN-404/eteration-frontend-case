import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  brand: string;
  model: string;
  models: Record<string, string[]>;
}

interface ProductState {
  brands: string[];
  models: {};
  sortType: string;
  allProducts: Product[];
  filterProduct: Product[];
  page:number;
  per_page:number;
}

const initialState: ProductState = {
  brands: [],
  models: [],
  sortType: "",
  allProducts: [],
  filterProduct: [],
  page:1,
  per_page:12,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    try {
      const response = await axios.get(
        "https://5fc9346b2af77700165ae514.mockapi.io/products"
      );
      console.log("data", response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    sortByDateOldToNew: (state) => {
      if (state.filterProduct.length <= 0) {
        const sortedProducts: any = [...state.allProducts].sort(
          //@ts-ignore
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        state.filterProduct = sortedProducts;
        state.sortType = "OLD_TO_NEW";
      } else {
        const sortedProducts: any = [...state.filterProduct].sort(
          //@ts-ignore
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        state.filterProduct = sortedProducts;
        state.sortType = "OLD_TO_NEW";
      }
    },
    sortByDateNewToOld: (state) => {
      if (state.filterProduct.length <= 0) {
        const sortedProducts: any = [...state.allProducts].sort(
          //@ts-ignore
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        state.filterProduct = sortedProducts;
        state.sortType = "NEW_TO_OLD";
      } else {
        const sortedProducts: any = [...state.filterProduct].sort(
          //@ts-ignore
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        state.filterProduct = sortedProducts;
        state.sortType = "NEW_TO_OLD";
      }
    },
    sortByPriceLowToHigh: (state) => {
      if (state.filterProduct.length <= 0) {
        const sortedProducts: any = [...state.allProducts].sort(
          //@ts-ignore
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        state.filterProduct = sortedProducts;
        state.sortType = "LOW_TO_HIGH";
      } else {
        const sortedProducts: any = [...state.filterProduct].sort(
          //@ts-ignore
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        state.filterProduct = sortedProducts;
        state.sortType = "LOW_TO_HIGH";
      }
    },
    sortByPriceHighToLow: (state) => {
      if (state.filterProduct.length <= 0) {
        const sortedProducts: any = [...state.allProducts].sort(
          //@ts-ignore
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
        state.filterProduct = sortedProducts;
        state.sortType = "HIGH_TO_LOW";
      } else {
        const sortedProducts: any = [...state.filterProduct].sort(
          //@ts-ignore
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
        state.filterProduct = sortedProducts;
        state.sortType = "HIGH_TO_LOW";
      }
    },
    filterBrandProduct: (state, action: PayloadAction<{ brand: string[] }>) => {
      const { brand } = action.payload;

      if (brand.length <= 0) {
        state.filterProduct = state.allProducts;
      } else {
        // Markaya göre filtreleme işlemi
        const filteredBrandData = state.allProducts.filter((item) =>
          brand.includes(item.brand)
        );
        // Filtrelenmiş verileri state'e atama
        state.filterProduct = filteredBrandData;
      }
    },
    filterModelProduct: (
      state,
      action: PayloadAction<{ model: string[]; brand: string[] }>
    ) => {
      const { model, brand } = action.payload;

      if (model.length <= 0) {
        const filteredBrandData = state.allProducts.filter((item) =>
          brand.includes(item.brand)
        );
        state.filterProduct = filteredBrandData;
      } else {
        // Markaya göre filtreleme işlemi
        const filteredModelData = state.allProducts.filter((item) =>
          model.includes(item.model)
        );
        const filteredBrandData = state.allProducts.filter((item) =>
          brand.includes(item.brand)
        );
        // Model ve marka filtreleme işlemlerini birleştirerek çakışan sonuçları elde et
        const intersection = filteredBrandData.filter((item) =>
          filteredModelData.some((modelItem) => modelItem.model === item.model)
        );
        // Filtrelenmiş verileri state'e atama
        state.filterProduct = intersection;
      }
    },
    pagination: (state, action: PayloadAction<{ page:number}>) => {
     
      state.page=action.payload.page

      const start = (Number(state.page) - 1) * Number(state.per_page);
      const end = start + Number(state.per_page);
      const entries = state.allProducts.slice(start, end);  

      state.filterProduct = entries
    }
  },
 
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<any[]>) => {
        const brands = Array.from(
          new Set(action.payload.map((product) => product.brand))
        );
        const models: Record<string, string[]> = {};
        const allProducts: Product[] = action.payload;
        brands.forEach((brand) => {
          models[brand] = action.payload
            .filter((product) =>
              product.brand.toLowerCase().includes(brand.toLowerCase())
            )
            .map((product) => product.model);
        });
        const filterProduct = allProducts;
        return {
          ...state,
          brands,
          models,
          allProducts,
          filterProduct,
        };
      }
    );
  },
});

export const {
  filterBrandProduct,
  filterModelProduct,
  sortByDateOldToNew,
  sortByDateNewToOld,
  sortByPriceLowToHigh,
  sortByPriceHighToLow,
  pagination
} = productSlice.actions;
export default productSlice.reducer;
