import { styled } from "styled-components";

export const ProductDetailFP = styled.div`
	display: grid;
	row-gap: 3.2rem;
	padding: 2.4rem;

	@media (width >= 600px){
		grid-template-columns: 28rem 1fr;
		column-gap: 2.4rem;
		row-gap: 0;
	}

	@media (width >= 1024px){
		grid-template-columns: 54rem 1fr;
		column-gap: 3.2rem;
	}

	picture{
		display: flex;
		justify-content: center;
		align-items: center;

		img{
			width: 32.7rem;
			height: 32.7rem;
			border-radius: .8rem;
			
			@media (width >= 600px){
				width: 28rem;
				height: 48rem;
			}

			@media (width >= 1024px){
				width: 54rem;
				height: 56rem;
			}

		}

	}

	.info-product-fp{
		display: flex;
		flex-direction: column;
		justify-content: center;

		@media (width >= 600px){
			padding: 2.4rem;
		}

		@media (width >= 1024px){
			align-items: start;
		}

		h2{
			color: #000;
			font-size: 2.8rem;
			letter-spacing: .2rem;
			text-transform: uppercase;
			margin-bottom: 1.6rem;

			@media (width >= 1024px){
				font-size: 4rem;
			}

		}

		p{
			color: #7d7d7d;
			line-height: 1.4;
			margin-bottom: 2.4rem;
			opacity: .8;
		}

		h3{
			font-weight: 700;
			font-size: 1.8rem;
			letter-spacing: .12rem;
			margin-bottom: 3.2rem;
		}

	}

`;