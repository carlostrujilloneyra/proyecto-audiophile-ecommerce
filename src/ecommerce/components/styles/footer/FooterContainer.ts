import { styled } from "styled-components";

export const FooterContainer = styled.footer`
	background-color: #000;
	padding: 5rem 2.4rem;
	position: relative;

	&::before{
		position: absolute;
		content: '';
		width: 10rem;
		height: .8rem;
		background-color: #D87D4A;
		top: .4rem;
		left: 50%;
		transform: translate(-50%, -50%);

		@media (width >= 600px){
			width: 15rem;
			top: 0;
			left: 5.2rem;
			transform: translate(0,0);
		}

		@media (width >= 1024px){
			left: 8rem;
		}

	}

	@media (width >= 600px){
		padding: 7rem 4rem;
	}

	@media (width >= 1024px){
		padding: 8rem;
	}

	.first-part-footer{
		display: flex;
		align-items: center;
		flex-direction: column;

		@media (width >= 600px){
			justify-content: space-between;
			align-items: flex-start;
		}

		@media (width >= 1024px){
			flex-direction: row;
			align-items: center;
			margin-bottom: 3.2rem;
		}

		img{
			width: 14.5rem;
			height: 2.5rem;

			@media (width >= 600px){
				margin-left: 1.2rem;
			}

			@media (width >= 1024px){
				margin-left: 0;
			}


		}

		nav{
			display: flex;
			margin-top: 3.2rem;
			margin-bottom: 3.2rem;

			@media (width >= 1024px){
				margin: 0;
			}

			li{
				margin-top: 1.6rem;
				
				@media (width >= 1024px){
					margin-top: 0;
				}

			}

		}

	}

	.second-part-footer-paragraph{
		margin-top: 1.2rem;

		p{
			color: #fff;
			opacity: .5;
			text-align: center;
			line-height: 1.5;

			@media (width >= 600px){
				text-align: justify;
			}

			@media (width >= 1024px){
				width: 60%;
			}

		}

	}

	.second-part-footer{
		display: grid;
		grid-template-columns: repeat(1, 1fr);

		@media (width >= 600px){
			grid-template-columns: 1fr 12rem;
			column-gap: 2.4rem;
			align-items: center;
		}

		@media (width >= 1024px){
			grid-template-columns: 1fr 20rem;
			margin-top: 2.4rem;
		}

	}

`;

export const SocialNetworksFooter = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 2.4rem);
	grid-template-rows: 2.4rem;
	column-gap: 1.6rem;
	justify-content: center;
	padding: 2.4rem 1.2rem;
	margin-top: 1.2rem;

	img{
		width: 2.4rem;
		height: 2.4rem;
	}

`;