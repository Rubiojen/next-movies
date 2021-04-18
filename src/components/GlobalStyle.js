import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	html, body {
		height: 100vh;
		max-width: 100%;
		font-size: 62.5%;
		background-color: #e1e4e8;
		color: #3E4C59;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	body {
		display: flex;
		justify-content: center;
	}
`;
