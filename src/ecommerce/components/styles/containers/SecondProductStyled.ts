import { styled } from "styled-components";

export const SecondProductStyled = styled.section`
	background-repeat: no-repeat;
	background-size: 100% 100%;
	border-radius: .8rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 5rem 2.4rem;

	h3{
		color: #000;
		font-size: 2.8rem;
		letter-spacing: .2rem;
		text-transform: uppercase;
	}

	@media (width >= 600px){
		padding: 6.4rem 4.8rem;
	}

	@media (width >= 1024px){
		padding: 8rem 4rem;
	}

`;