import { styled } from "styled-components";

export const ProductCartStyled = styled.div`
	
	display: grid;
	grid-template-columns: 6.4rem 1fr 10rem;
	align-items: center;
	column-gap: 1.2rem;
	row-gap: 2.4rem;
	margin-bottom: 2rem;

	.container-buttons-product{
		justify-self: end;
	}

	@media (width >= 1024px){
		column-gap: 2.4rem;
	}

	.container-info-product{
		h3{
			color: #000;
			font-size: 1.5rem;
			text-transform: uppercase;
			letter-spacing: .1rem;
			margin-bottom: .8rem;
		}

		p{
			color: #808080;
			font-size: 1.4rem;
			font-weight: bolder;
			letter-spacing: .12rem;
		}

	}

	img{
		width: 6rem;
		height: 6rem;
		border-radius: .8rem;
	}

	.container-buttons-product{
		display: flex;
		
		button{
			background-color: #f1f1f1;
			border: none;
			color: #b5b5b5;
			cursor: pointer;
			font-size: 1.5rem;
			font-weight: bolder;
			padding: .8rem;
			transition: all .4s;

			&:hover{
				filter: opacity(.7);
				transition: all .4s;
			}
		}

		span{
			background-color: #f1f1f1;
			color: #000;
			display: flex;
			align-items: center;
			font-size: 1.5rem;
			font-weight: bolder;
			justify-content: center;
			padding: .8rem;
		}
	}

`;