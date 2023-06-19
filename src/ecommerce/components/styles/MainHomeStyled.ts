import { styled } from "styled-components";

export const MainHomeStyled = styled.main`
	display: grid;
	grid-template-rows: 60rem 32rem 43rem;
	row-gap: 2.4rem;
	padding: 4rem 2.4rem;

	@media (width >= 600px){
		grid-template-rows: 72rem 32rem 32rem;
		row-gap: 3.2rem;
		padding: 6rem 3.2rem;
	}

	@media (width >= 1024px){
		grid-template-rows: 56rem 32rem 32rem;
		row-gap: 4.8rem;
		padding: 7rem 8rem;
	}

`;