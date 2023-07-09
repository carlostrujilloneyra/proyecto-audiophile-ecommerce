import { styled } from "styled-components";

export const ProductStyled = styled.div`
	display: grid;
	row-gap: 3.2rem;
	padding: 5rem 2.4rem;
	margin-top: 1.2rem;

	@media (width >= 600px){
		row-gap: 4.8rem;
		padding: 5rem 3.2rem;
	}

	@media (width >= 1024px){
		grid-template-columns: 54rem 1fr;
		column-gap: 2.4rem;
		row-gap: 0;
		padding: 6rem 7rem;
	}

	@media (width >= 1100px){
		column-gap: 3.2rem;
	}

	&.change{
		@media (width >= 1024px){
			grid-template-columns: 1fr 54rem;
		}
	}

	&.change picture{
		@media (width >= 1024px){
			order: 4;
		}
	}

	picture{
		display: flex;
		justify-content: center;
		align-items: center;

		img{
		width: 30.7rem;
		height: 33rem;
		border-radius: .8rem;

		@media (width >= 600px){
			width: 69rem;
			height: 36rem;
		}

		@media (width >= 1024px){
			width: 54rem;
			height: 56rem;
		}

	}

	}

	/* Contenedor de la info */
	div{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;

		@media (width >= 1024px){
			align-items: flex-start;
			text-align: start;
			padding: 3.2rem;
		}

		h2{
			font-size: 2.8rem;
			font-weight: 700;
			letter-spacing: .1rem;
			margin-bottom: 2.4rem;
			text-transform: uppercase;

			@media (width >= 600px){
				font-size: 4rem;
			}

		}

		p{
			color: #7d7d7d;
			line-height: 1.4;
			opacity: .8;

			@media (width >= 1024px){
				text-align: justify !important;
			}

		}

	}

`;