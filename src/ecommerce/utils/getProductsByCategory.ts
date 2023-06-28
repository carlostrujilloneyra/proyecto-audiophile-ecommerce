import { productInterface } from '../interfaces/category.product.interface';
import { products } from "../data/products/products-data";

// Función que devolverá los productos de acuerdo a la categoría

export const getProductsByCategory = (category: string): productInterface[] => {

	const validCategories: string[] = ['headphones', 'speakers', 'earphones'];
	
	if (!validCategories.includes(category)) {
		throw new Error(`${category} is not a valid category`);
	}

	return products.filter(product => product.category === category);

}