import GamePieces from "components/GamePieces/GamePieces";
import React, { useState, useEffect } from "react";
import {
	GameContainer,
	GameOver,
	HighScore,
	Score,
} from "./GameState.styled";

const GameState = () => {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(
		parseInt(localStorage.getItem("highScore")) || 0,
	);
	const [gameOver, setGameOver] = useState(false);
	const [collisionType, setCollisionType] = useState(null);

	const handleGameOver = type => {
		setGameOver(true);

		if (score > highScore) {
			setHighScore(score);
			localStorage.setItem("highScore", score.toString());
		}

		setCollisionType(type);
	};

	const handleResetGame = () => {
		setScore(0);
		setGameOver(false);
	};

	useEffect(() => {
		const handleKeyPress = e => {
			if (gameOver && e.key === "Enter") {
				handleResetGame();
			}
		};

		window.addEventListener("keydown", handleKeyPress);
	}, [gameOver]);

	return (
		<GameContainer>
			<Score className="score">Score: {score}</Score>
			<HighScore>High Score: {highScore}</HighScore>
			{gameOver && (
				<GameOver>
					<p>
						Game Over!{" "}
						{collisionType === "wall"
							? "You Hit the wall"
							: "You Ate yourself"}
						!
					</p>
					<p>Press Enter to reset the game.</p>
				</GameOver>
			)}
			{!gameOver && (
				<GamePieces
					score={score}
					setScore={setScore}
					onGameOver={type => handleGameOver(type)}
				/>
			)}
		</GameContainer>
	);
};

export default GameState;
