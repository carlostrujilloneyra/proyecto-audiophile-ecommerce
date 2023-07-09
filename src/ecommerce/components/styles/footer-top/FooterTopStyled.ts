import { styled } from "styled-components";

export const FooterTopStyled = styled.article`
	display: grid;
	grid-template-rows: 30rem max-content;
	row-gap: 2.4rem;
	padding: 4rem 2.4rem;

	@include media(width >= 600px){
		row-gap: 5.6rem;
	}

	@media(width >= 1024px){
		grid-template-columns: 1fr 54rem;
		grid-template-rows: repeat(1, 59rem);
		column-gap: 4.8rem;
		row-gap: 0;
		padding: 6rem 3.2rem;
	}

	@media (width >= 1100px){
		padding: 8rem;
	}

	img{
		border-radius: .8rem;
		width: 100%;
		height: 100%;
		transition: all .4s;

		&:hover{
				transform: scale(1.08);
				transition: all .4s;
			}

	}

`

export const FooterTopSP = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 3rem 2.4rem;
	
	@media (width >= 600px){
		padding: 2rem 4.8rem;
	}

	@media (width >= 1024px){
		align-items: start;
		order: -4;
		padding: 8rem 4rem;
	}

	h2{
		color: #000;
		font-size: 2.8rem;
		letter-spacing: .1rem;
		line-height: 1.1;
		text-align: center;
		margin-bottom: 3.2rem;
		text-transform: uppercase;

		@media (width >= 600px){
			font-size: 4rem;
		}

		@media (width >= 1024px){
			text-align: start;
		}

		span{
			color: #D87D4A;
		}

	}

	p{
		color: #7d7d7d;
		text-align: center;
		line-height: 1.6;
		margin-bottom: 2.4rem;
		opacity: .8;

		@media (width >= 1024px){
			text-align: justify;
			align-items: flex-start;
	}

	}

`;