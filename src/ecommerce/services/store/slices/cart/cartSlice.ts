import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartAddState{
	id: string,
	image: string,
	name: string,
	price: number,
	quantity: number
}

interface initialStateInterface {
	products: CartAddState [],
	error: boolean,
	priceTotal: number
}

const initialState: initialStateInterface = {
	products: [],
	error: false,
	priceTotal: 0
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		// Agregar al carrito
		addToCart(state, action: PayloadAction<CartAddState>) {
			if (state.products.filter(product => product.id === action.payload.id).length > 0) {
				state.products.map(product => {
					if (product.id === action.payload.id) {
						product.quantity += action.payload.quantity;
						product.price+= action.payload.quantity*action.payload.price
					}

				})
			} else {
				state.products = [...state.products, action.payload]
			}
		},

		// Borrar todo
		removeToCart(state) {
			state.products = []
		}
	}
});

export const { addToCart } = cartSlice.actions;