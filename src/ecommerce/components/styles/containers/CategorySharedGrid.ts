import { styled } from "styled-components";

export const CategorySharedGrid = styled.div`
	display: grid;
	grid-template-rows: repeat(3, minmax(13rem, 16rem));
	row-gap: 7.2rem;

	@media (width >= 600px) {
		grid-template-columns: repeat(3, minmax(17rem, 25rem));
		grid-template-rows: repeat(1, minmax(13rem, 16rem));
		column-gap: 1.6rem;
		row-gap: 0;
		justify-content: center;
	}

	@media (width >= 1024px) {
		grid-template-columns: repeat(3, minmax(28rem, 35rem));
		column-gap: 2.4rem;
		justify-content: flex-start;
	}

	h4{
		letter-spacing: .1rem;
	}

`;