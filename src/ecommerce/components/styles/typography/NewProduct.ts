import { styled } from "styled-components";

interface Props{
	$color: string;
}

export const NewProduct = styled.h3<Props>`
	color: ${({$color}) => $color};
	font-size: 1.4rem;
	letter-spacing: .5rem;
	margin-bottom: 2.4rem;
	text-transform: uppercase;
	
	@media (width >= 600px){
		margin-bottom: 1.6rem;
	}

`;