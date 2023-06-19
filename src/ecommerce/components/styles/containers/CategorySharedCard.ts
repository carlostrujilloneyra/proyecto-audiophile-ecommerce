import { styled } from "styled-components";

export const CategorySharedCard = styled.div`
	width: 100%;
	background-color: #F1F1F1;
	border-radius: .8rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2.4rem;

	img{
		transition: all .4s;
		@media (width >= 1024px){
			&:hover{
				transform: scale(1.2);
				transition: all .4s;
			}
		}
	}

`;