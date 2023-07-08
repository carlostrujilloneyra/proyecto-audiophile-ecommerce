import { styled } from "styled-components";

export const CartStyled = styled.div`
	background-color: #fff;
	top: 11rem;
	border-radius: .8rem;
	box-shadow: 0px -7px 21px 15px rgba(0,0,0,0.1);
	position: absolute;
	content: '';
	padding: 3.6rem 2.4rem;
	width: calc(100vw - 2.4rem);
	min-height: 14rem;
	left: 50%;
	transform: translate(-50%, 0);
	z-index: 20;

	.grid-no-products{
		display: grid;
		grid-template-columns: repeat(2, max-content);
		align-items: center;
		column-gap: 1.6rem;

		@media (width >= 600px){
			column-gap: 3.2rem;
		}

		p{
			color: #7d7d7d;
			font-size: 1.4rem;
			
			@media (width >= 600px){
				font-size: 1.5rem;
			}

		}

	}

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
			font-size: 1.5rem;

			@media (width >= 600px){
				font-size: 1.8rem;
			}

		}

		button{
			background-color: transparent;
			border: none;
			color: #7f7f7f;
			font-size: 1.5rem;
			outline: none;
			text-decoration: underline;

			&:hover{
				cursor: pointer;
			}

			@media (width >= 600px){
				font-size: 1.6rem;
			}

		}

	}

	.footer-cart-container{
		margin-top: 2.8rem;

		div{

			p{
				color: #808080;
				font-size: 1.5rem;
				letter-spacing: .12rem;
				text-transform: uppercase;
			}

			h3{
				color: #000;
				font-size: 1.8rem;
				letter-spacing: .12rem;
			}

		}

	}

	.container-cart-button-footer{
		display: flex;
		justify-content: center;
		align-items: center;
	}

`;