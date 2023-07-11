import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../services/store/hooks"
import { ButtonPrimary, ModalStyled } from "../../styles"
import { ProductSummary } from "./ProductSummary";

export const Modal = () => {
	
	const navigate = useNavigate();

	const { products, priceTotal } = useAppSelector((state) => state.cart);
	const firstProduct = products[0];

	const handleNavigateHome = () => {
		navigate('/');
	}

	return (
		<>
			<ModalStyled>
				<img
					className="icon-check"
					src='/assets/icons/check.svg'
					width={64}
					height={64}
					alt="icon-check"
				/>

				<div className="modal-header">
					<h2>Gracias por su pedido</h2>
					<p>Recibirá una confirmación por correo electrónico en breve.</p>
				</div>

				{/* Info */}
				<div className="container-modal-info-product">
					<div className="container-fp">
						<ProductSummary product={firstProduct} />
						<hr />
						
						{
							products.length > 1
							&&
							<p className="other-products">Y otros {products.length - 1} productos</p>
						}

					</div>
					
					<div className="container-sp">
						<h3>Precio Total</h3>
						<h4>s/{priceTotal.toLocaleString('en-US')}</h4>
					</div>

				</div>

				<ButtonPrimary
					style={{ width: '100%', marginTop: 24 }}
					$padding="1.5rem 3.2rem"
					onClick={handleNavigateHome}
				>
					Volver al inicio
				</ButtonPrimary>

			</ModalStyled>
		</>
	)
}
