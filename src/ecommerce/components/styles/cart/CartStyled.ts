import { styled } from "styled-components";

export const CartStyled = styled.div`
	background-color: #fff;
	bottom: -12.5rem;
	position: absolute;
	content: '';
	padding: 2.4rem;
	width: 33rem;
	min-height: 10rem;
	right: 2.4rem;
	border: .1rem solid red;
	border-radius: .8rem;

	@media (width >= 600px){
	}

	@media (width >= 1024px){
		right: 8rem;
		width: 38rem;
	}

	.header-cart-container{
		display: grid;
		grid-template-columns: max-content 1fr max-content;
		column-gap: 2.4rem;
		align-items: center;

		h2{
			text-transform: uppercase;
			font-size: 1.8rem;
		}

		button{
			background-color: transparent;
			border: none;
			color: #7f7f7f;
			font-size: 1.6rem;
			outline: none;
			text-decoration: underline;

			&:hover{
				cursor: pointer;
			}

		}

	}

`;