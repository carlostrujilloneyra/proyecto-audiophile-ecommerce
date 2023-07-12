import { styled } from "styled-components";

export const HeroStyled = styled.div`
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 4rem 2.4rem;
	height: 65rem;

	@media (width >= 600px){
		padding: 10rem;
		height: 72rem;
	}

	@media (width >= 1024px){
		align-items: flex-start;
		height: 66rem;
		padding: 10rem 8rem;
	}

	h1{
		color: white;
		font-size: 3.6rem;
		font-weight: bolder;
		letter-spacing: .2rem;
		line-height: 1.1;
		margin-bottom: 2.4rem;
		text-align: center;
		text-transform: uppercase;

		@media (width >= 600px){
			font-size: 5.6rem;
		}

		@media (width >= 1024px){
			text-align: start;
			width: 50%;
		}
		
	}

	p{
		font-size: 1.5rem;
		line-height: 1.6;
		text-align: center;

		@media (width >= 1024px){
			text-align: justify;
			width: 35%;
		}

	}

	h3{
		text-align: center;

		@media (width >= 1024px){
			text-align: start;
		}

	}

	.container-button{
		display: flex;
		justify-content: center;
		align-items: center;

		@media (width >= 1024px){
			justify-content: flex-start;
		}

	}

`;