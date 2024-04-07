import styled from "styled-components";

export const GameContainer = styled.div`
	display: flex
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
export const Score = styled.p`
	color: #1e88e5;
	font-size: 24px;
`;
export const HighScore = styled.p`
	color: #e74c3c;
	font-size: 18px;
`;

export const GameOver = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: #e74c3c;
	font-size: 24px;
	margin-top: 20px;
`;
