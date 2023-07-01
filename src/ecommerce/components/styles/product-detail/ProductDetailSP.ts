import { styled } from "styled-components";

export const ProductDetailSP = styled.div`
	display: grid;
	row-gap: 6.4rem;
	padding: 4rem 2.4rem;


	@media (width >= 600px){
		row-gap: 4.8rem;
		padding: 4rem 3.2rem;
	}

	@media (width >= 1024px){
		grid-template-columns: 1fr 36rem;
		column-gap: 2.4rem;
		row-gap: 0;
		padding: 8rem;
	}

	.container-info-sp{
		h2{
			color: #000;
			font-size: 2.4rem;
			letter-spacing: .3rem;
			margin-bottom: 2.4rem;
			text-transform: uppercase;
			
			@media (width >= 600px){
				font-size: 3.2rem;
			}
		}
		
		p{
			color: #7c7c7c;
			line-height: 1.4;
			margin-bottom: 2.4rem;
			opacity: .8;
		}
	}

	@media (width >= 600px){
		padding: 4rem;
	}

	@media (width >= 1024px){
		padding: 8rem;
	}




`;