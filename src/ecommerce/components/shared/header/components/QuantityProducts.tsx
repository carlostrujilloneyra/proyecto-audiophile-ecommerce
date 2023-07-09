import { useEffect, useState } from "react"
import { useAppSelector } from "../../../../services/store/hooks";
import { QuantityProductsStyled } from "../../../styles";

export const QuantityProducts = () => {

	const [showQuantity, setShowQuantity] = useState<boolean>(false);
	const { quantityTotal } = useAppSelector((state) => state.cart);
	const [quantityProducts, setQuantityProducts] = useState<number | string >(quantityTotal);

	useEffect(() => {
		quantityTotal > 0 ? setShowQuantity(true) : setShowQuantity(false);
		setQuantityProducts(quantityTotal);
	}, [quantityTotal]);

	return (
		<>
			{
				showQuantity && (
					<QuantityProductsStyled>
						{
							quantityTotal > 10 ? <h3>+10</h3> : <h3>{quantityProducts}</h3>
						}
					</QuantityProductsStyled>
				)
			}
		</>
	)
}
