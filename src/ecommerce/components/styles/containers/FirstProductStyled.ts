import { styled } from "styled-components";

export const FirstProductStyled = styled.section`
	background-color: #D87D4A;
	border-radius: .8rem;
	display: grid;
	grid-template-rows: max-content max-content;
	row-gap: 3.2rem;
	padding: 5rem 2.4rem;
	
	.container-first-product{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
		@media (width >= 1024px){
			align-items: flex-start;
			justify-content: flex-start;
	}

}

	@media (width >= 600px){
		padding: 6.4rem 4.8rem;
		row-gap: 4.8rem;
	}

	@media (width >= 1024px){
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(1, 1fr);
		padding: 8rem 4rem;
		column-gap: 4.8rem;
		row-gap: 0;
		overflow: hidden;
	}
	
	picture{
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img{
		width: 17.3rem;
		height: 20.8rem;
		transition: all .4s;

		@media (width >= 600px){
			width: 19.8rem;
			height: 23.8rem;

			&:hover{
				transform: scale(1.1);
				transition: all .4s;
			}

		}

		@media (width >= 1024px){
			width: 41rem;
			height: 49rem;
		}

	}

	h2{
		color: #fff;
		letter-spacing: .2rem;
		font-size: 3.2rem;
		margin-bottom: 2.4rem;
		text-transform: uppercase;
		text-align: center;

		@media (width >= 600px){
			font-size: 5.6rem;
		}

		@media (width >= 1024px){
			text-align: start;
		}

	}
	
	p{
		color: #f5ded2;
		font-size: 1.5rem;
		line-height: 1.5;
		text-align: center;

		@media (width >= 600px){
			width: 50%;
		}

		@media (width >= 1024px){
			text-align: justify;
			width: 80%;
		}

	}

`;