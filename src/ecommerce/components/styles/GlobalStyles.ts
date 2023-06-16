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

	h1{
		font-size: 4rem;
	}

`;