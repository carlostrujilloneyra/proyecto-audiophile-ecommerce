import { useNavigate } from "react-router-dom"
import { CheckoutContainer, ContainerBackButton } from "../styles"
import { FormCheckout } from "./components";

export const Checkout = () => {

	const navigate = useNavigate();

	const handleReturn = () => {
		navigate(-1);
	}

	return (
		<>
			
			<ContainerBackButton style={{ backgroundColor: '#f1f1f1' }} className='container'>
					<button
						onClick={handleReturn}
						className='button-back'
					>
						Atrás
					</button>
				</ContainerBackButton>
			
			<CheckoutContainer>
				
				<div className="container checkout-products">
					<FormCheckout />
				</div>
			
			</CheckoutContainer>

		</>
	)
}
