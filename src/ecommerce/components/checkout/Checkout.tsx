import { useNavigate } from "react-router-dom"
import { CheckoutContainer, ContainerBackButton } from "../styles"
import { FormCheckout } from "./components";
import { useEffect } from "react";
import { useAppSelector } from "../../services/store/hooks";


export const Checkout = () => {

	const navigate = useNavigate();

	const { formValidate } = useAppSelector((state) => state.cart);

	useEffect(() => {
		const backgroundAllPage: any = document.getElementById('root');
		backgroundAllPage.style.backgroundColor = '#f1f1f1'

		return () => {
			backgroundAllPage.style.backgroundColor = '#fff'
		}

	}, [])
	
	const handleReturn = () => {
		navigate(-1);
	}

	return (
		<>
			
			<ContainerBackButton style={{ backgroundColor: '#f1f1f1', zIndex: 2 }} className={`container ${formValidate ? 'pointer-events': ''}`}>
					<button
						onClick={handleReturn}
						className='button-back'
					>
						Atrás
					</button>
				</ContainerBackButton>
			
			<CheckoutContainer>
				
				<div className="container">
					<FormCheckout
					/>
				</div>
			
			</CheckoutContainer>

		</>
	)
}
