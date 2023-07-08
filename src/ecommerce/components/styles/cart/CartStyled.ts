import { styled } from "styled-components";

export const CartStyled = styled.div`
	background-color: #fff;
	bottom: -12rem;
	border-radius: .8rem;
	box-shadow: 0px -7px 21px 15px rgba(0,0,0,0.1);
	position: absolute;
	content: '';
	padding: 2.4rem;
	width: 33rem;
	min-height: 10rem;
	left: 50%;
	transform: translate(-50%, 50%);
	z-index: 20;

	@media (width >= 600px){
		left: auto;
		right: 3.2rem;
		transform: translate(0, 0);
		width: 39rem;
	}

	@media (width >= 1024px){
		right: 8rem;
		width: 42rem;
	}

	.header-cart-container{
		display: grid;
		grid-template-columns: 9rem 1fr 2.4rem;
		column-gap: 1.2rem;
		align-items: center;
		margin-bottom: 3.2rem;

		@media (width >= 600px){
			column-gap: 2.4rem;
		}

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