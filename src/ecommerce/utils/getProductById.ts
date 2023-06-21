import { productInterface } from '../interfaces/category.product.interface'
import { products } from "../data/products/products-data"

export const getProductById = (id: string): (productInterface | undefined) => {

	// Que te retorne el primer producto que encuentre
	return products.find(product => product.id === id);

}