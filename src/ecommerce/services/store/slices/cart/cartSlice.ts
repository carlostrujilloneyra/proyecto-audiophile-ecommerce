import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: []
	},
	reducers: {
		addProduct(state) {
			
		}
	}
});

export const { addProduct } = cartSlice.actions;