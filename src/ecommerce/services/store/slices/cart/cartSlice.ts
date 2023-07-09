import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getItem } from "../../../../utils";

export interface CartAddState{
	id: string,
	image: string,
	name: string,
	price: number,
	quantity: number
}

interface CartRemoveState{
	id: string | number
}

interface initialStateInterface {
	products: CartAddState [],
	error: boolean,
	priceTotal: number,
	quantityTotal: number
}

// Recuerda que initialState es igual a "state"
const initialState: initialStateInterface = getItem('cart') || {
	products: [],
	error: false,
	priceTotal: 0,
	quantityTotal: 0
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
						state.quantityTotal += action.payload.quantity;
						state.priceTotal += action.payload.quantity * action.payload.price;
					}

				})
			} else {
				state.products = [...state.products, action.payload]
				state.quantityTotal += action.payload.quantity;
				state.priceTotal += action.payload.quantity * action.payload.price;
			}
		},

		removeProduct(state, action: PayloadAction<CartRemoveState>) {
			if (state.products.some(product => product.id === action.payload.id)) {
				state.products.find(product => {
					if (product.id === action.payload.id) {
						product.quantity -= 1;
						state.quantityTotal -= 1;
						state.priceTotal -= product.price;

						if (product.quantity === 0) {
							state.products = state.products.filter(product => product.quantity !== 0);
						}

					}
				})

				state.quantityTotal === 0 && (state.products = [])

			}
		},

		// Borrar todo
		removeToCart(state) {
			state.products = [];
			state.quantityTotal = 0;
			state.priceTotal = 0;
		}
	}
});

export const { addToCart, removeProduct ,removeToCart } = cartSlice.actions;