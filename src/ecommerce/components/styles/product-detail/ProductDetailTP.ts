import { styled } from "styled-components";

export const ProductDetailTP = styled.div`
	display: grid;
	row-gap: 2.4rem;
	padding: 4rem 2rem;

	@media (width >= 600px){
		grid-template-columns: 28rem 40rem;
		column-gap: 2rem;
		row-gap: 0;
		padding: 4rem 3.2rem;
	}

	@media (width >= 1024px){
		grid-template-columns: minmax(36rem, 45rem) minmax(58rem, 63.5rem);
		column-gap: 3.2rem;
		padding: 4rem 3.2rem;
	}

	@media (width >= 1100px){
		padding: 4rem 8rem;
	}

	/* Primer container de la tercera parte */
	.first-container{
		display: grid;
		row-gap: 2rem;

		@media (width >= 1024px){
			row-gap: 3.2rem;
		}

		img{
			border-radius: .8rem;
			width: 30.7rem;
			height: 17.4rem;
			transition: all .4s;

			@media (width >= 600px){
				width: 27.7rem;
				height: 17.4rem;
			}

			@media (width >= 1024px){
				width: 100%;
				height: 28rem;
				
				&:hover{
					transform: scale(1.05);
					transition: all .4s;
				}
			}

		}

	}

	/* Segundo container de la tercera parte */
	.second-container{

		img{
			border-radius: .8rem;
			width: 30.7rem;
			height: 34.8rem;
			transition: all .4s;

			@media (width >= 600px){
				width: 39.5rem;
				height: 36.8rem;
			}

			@media (width >= 1024px){
				width: 100%;
				height: 59.2rem;

				&:hover{
					transform: scale(1.02);
					transition: all .4s;
				}

			}

		}

	}

`;