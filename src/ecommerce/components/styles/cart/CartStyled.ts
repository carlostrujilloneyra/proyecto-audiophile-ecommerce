import { styled } from "styled-components";

export const CartStyled = styled.div`
	background-color: #fff;
	bottom: -12rem;
	position: absolute;
	content: '';
	padding: 2.4rem;
	width: 33rem;
	min-height: 10rem;
	right: 2.4rem;
	border-radius: .8rem;

	@media (width >= 1024px){
		right: 8rem;
		width: 38rem;
	}

	.header-cart-container{
		display: grid;
		grid-template-columns: 9rem 1fr 3.2rem;
		column-gap: 2.4rem;
		align-items: center;
		margin-bottom: 3.2rem;

		h2{
			letter-spacing: .12rem;
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