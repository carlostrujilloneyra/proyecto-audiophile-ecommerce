import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html{
		font-size: 10px;
		font-family: 'Manrope', sans-serif;
	}

	.container{
		max-width: 125rem;
		margin: auto;
	}

	h1{
		font-size: 5.6rem;
		color: white;
	}

	h4{
		color: #000;
		font-size: 1.8rem;
		text-transform: uppercase;
	}

`;