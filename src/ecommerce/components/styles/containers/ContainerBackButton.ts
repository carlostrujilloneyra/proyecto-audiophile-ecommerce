import { styled } from "styled-components";

export const ContainerBackButton = styled.div`
	padding: 3rem 2.4rem;
	z-index: -1;

	&.pointer-events{
		pointer-events: none;
	}
	
	@media (width >= 600px){
		padding: 4rem 3.2rem;
		padding-bottom: 2rem;
	}
	
	@media (width >= 1024px){
		padding: 4rem 8rem;
		padding-bottom: 2rem;
	}

	.button-back{
		background-color: transparent;
		border: none;
		color: #7c7c7c;
		font-size: 1.6rem;
		font-weight: bolder;
		letter-spacing: .1rem;
		outline: none;
		padding: .4rem;
		position: relative;

	&::before{
		background-color: #7c7c7c;
		position: absolute;
		content: '';
		width: 2%;
		height: .2rem;
		bottom: -.5rem;
		left: -.4rem;
		opacity: 0;
		transition: all .4s;
	}

	&:hover::before{
		opacity: 1;
		width: 100%;
		left: 0;
		transition: all .4s;
	}

	&:hover{
		cursor: pointer;
	}

}


`;