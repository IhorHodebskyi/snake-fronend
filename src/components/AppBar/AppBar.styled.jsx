import styled from "styled-components";

export const Container = styled.div`
	padding: 0 16px;
	margin: auto;

	@media (min-width: 480px) {
		width: 480px;
	}

	@media (min-width: 768px) {
		width: 768px;
	}

	@media (min-width: 1200px) {
		width: 1200px;
	}
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 40px;
	padding: 12px;
	margin: 0 0 12px 0;

	border-bottom: 1px solid #646464;
`;
