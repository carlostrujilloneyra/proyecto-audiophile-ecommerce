import { useParams } from "react-router-dom"
import { getProductById } from "../utils";
import { ProductDetail } from "../components/shared";

export const ProductPage = () => {

	const { productId } = useParams();
	const productSelected = getProductById(productId);

	return (
		<>
			<main>
				<ProductDetail key={productSelected.id} product={productSelected} />
			</main>
		</>
	)
}
