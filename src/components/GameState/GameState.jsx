import GamePieces from "components/GamePieces/GamePieces";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	GameContainer,
	GameOver,
	HighScore,
	Score,
} from "./GameState.styled";

import { updateResult } from "redux/game/operations";
import { selectUser } from "redux/auth/selectors";
import { selectGame } from "redux/game/selectors";

const GameState = () => {
	const dispatch = useDispatch();
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [collisionType, setCollisionType] = useState(null);
	const { high_score } = useSelector(selectUser);
	const [count, setCount] = useState(high_score);
	const items = useSelector(selectGame);

	const handleGameOver = type => {
		setGameOver(true);

		if (score > count) {
			dispatch(updateResult(score));
			setCount(score);
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
			<HighScore>High Score: {count}</HighScore>
			{gameOver && (
				<GameOver>
					<p>
						Game Over!{" "}
						{collisionType === "wall"
							? "You Hit the wall"
							: "You Ate yourself"}
						!
					</p>
					<p>Press Enter to reset the game</p>
					<p>Records</p>
					<ul>
						{items.map(({ id, name, high_score }) => (
							<li key={id}>
								{" "}
								{name}:{high_score}
							</li>
						))}
					</ul>
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
