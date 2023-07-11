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

interface FormValidate{
	value: boolean
}
interface initialStateInterface {
	products: CartAddState [],
	error: boolean,
	priceTotal: number,
	quantityTotal: number,
	formValidate: boolean
}

// Recuerda que initialState es igual a "state"
const initialState: initialStateInterface = getItem('cart') || {
	products: [],
	error: false,
	priceTotal: 0,
	quantityTotal: 0,
	formValidate: false
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		// Agregar al carrito
		addToCart(state, action: PayloadAction<CartAddState>) {
			// Cuando agregas un producto que ya existe!!!!
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
			// Añado esto línea para remover todo del localstorage correctamente!!!
			localStorage.removeItem('cart');
		},

		// Formulario valido
		validateForm(state, action: PayloadAction<FormValidate>) {
			state.formValidate = action.payload.value
		}

	}
});

export const { addToCart, removeProduct ,removeToCart, validateForm } = cartSlice.actions;