import { styled } from "styled-components";

export const HeroCategory = styled.div`
	background-color: #000;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 10rem;

	@media (width >= 600px){
		height: 18rem;
	}

	h2{
		color: white;
		font-size: 2.8rem;
		letter-spacing: .2rem;
		text-align: center;
		text-transform: uppercase;
		
		@media (width >= 600px){
			font-size: 4rem;
		}

	}

`;