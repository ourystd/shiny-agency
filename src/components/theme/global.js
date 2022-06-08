import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,body {
	background-color: ${({ theme }) => theme.bodyBg};;
	transition: background-color ${(props) => props.theme.transitionTime};
}

::-webkit-scrollbar-thumb {
	background-color: ${({ theme }) => theme.scrollBar};
	
	&:hover {
		background-color: ${({ theme }) => theme.scrollBarHover};
	}
}
`;
