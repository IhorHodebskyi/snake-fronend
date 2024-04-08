import { useEffect, useRef, useState } from "react";
import {
	GameCanvas,
	Text,
	Wrapper,
} from "./GamePieces.styled";

const GamePieces = ({ score, setScore, onGameOver }) => {
	const [pause, setPause] = useState(false);
	const canvasRef = useRef();
	const SNAKE_SPEED = 10;
	const [apple, setApple] = useState({ x: 180, y: 100 });
	const [snake, setSnake] = useState([
		{ x: 100, y: 50 },
		{ x: 95, y: 50 },
	]);
	const [direction, setDirection] = useState(null);
	const [speed, setSpeed] = useState(100);
	const [count, setCount] = useState(10);

	if (count === score) {
		let i = speed - 10;
		setCount(+10);
		setSpeed(i);
	}
	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");

		const newWindow = callBeck => {
			window.addEventListener("keydown", callBeck);
		};

		const takeBreak = e => {
			if (e.key === " ") {
				setPause(!pause);
				setDirection(null);
			}
		};

		newWindow(takeBreak);

		if (!pause) {
			const drawSnake = () => {
				snake.forEach(snakePart => {
					ctx.beginPath();
					ctx.rect(snakePart.x, snakePart.y, 14, 14);
					ctx.fillStyle = "#90ee90";
					ctx.fill();
					ctx.closePath();
				});
			};

			const draftApple = () => {
				ctx.beginPath();
				ctx.rect(apple.x, apple.y, 14, 14);
				ctx.fillStyle = "#ff0000";
				ctx.fill();
				ctx.closePath();
			};

			const moveSnake = () => {
				if (direction) {
					setSnake(prevSnake => {
						const newSnake = [...prevSnake];
						const snakeHead = {
							x: newSnake[0].x,
							y: newSnake[0].y,
						};
						for (let i = newSnake.length - 1; i > 0; i--) {
							newSnake[i].x = newSnake[i - 1].x;
							newSnake[i].y = newSnake[i - 1].y;
						}

						switch (direction) {
							case "right":
								snakeHead.x += SNAKE_SPEED;
								break;
							case "left":
								snakeHead.x -= SNAKE_SPEED;
								break;
							case "up":
								snakeHead.y -= SNAKE_SPEED;
								break;
							case "down":
								snakeHead.y += SNAKE_SPEED;
								break;
							default:
								break;
						}
						newSnake[0] = snakeHead;
						handleAppleCollision(newSnake);
						handleWallCollision(snakeHead);
						handleBodyCollision(newSnake);

						return newSnake;
					});
				}
			};

			const handleWallCollision = snakeHead => {
				if (
					snakeHead.x + SNAKE_SPEED > canvas.width ||
					snakeHead.x + SNAKE_SPEED < 0
				) {
					onGameOver("wall");
				}
				if (
					snakeHead.y + SNAKE_SPEED > canvas.height ||
					snakeHead.y < 0
				) {
					onGameOver("wall");
				}
			};

			const handleBodyCollision = newSnake => {
				const snakeHead = newSnake[0];
				for (let i = 1; i < newSnake.length; i++) {
					if (
						snakeHead.x === newSnake[i].x &&
						snakeHead.y === newSnake[i].y
					) {
						onGameOver("self");
					}
				}
			};

			const handleAppleCollision = newSnake => {
				const snakeHead = newSnake[0];

				if (
					snakeHead.x === apple.x &&
					snakeHead.y === apple.y
				) {
					setScore(++score);

					setApple({
						x:
							Math.floor(
								(Math.random() * canvas.width) /
									SNAKE_SPEED,
							) * SNAKE_SPEED,
						y:
							Math.floor(
								(Math.random() * canvas.height) /
									SNAKE_SPEED,
							) * SNAKE_SPEED,
					});

					newSnake.push({
						x: newSnake[newSnake.length - 1].x,
						y: newSnake[newSnake.length - 1].y,
					});
				}
			};

			const handleKeyPress = e => {
				switch (e.key) {
					case "ArrowRight":
						setDirection("right");
						break;
					case "ArrowLeft":
						setDirection("left");
						break;
					case "ArrowUp":
						setDirection("up");
						break;
					case "ArrowDown":
						setDirection("down");
						break;
					default:
						break;
				}
			};

			newWindow(handleKeyPress);

			const intervale = setInterval(() => {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				drawSnake();
				draftApple();
				moveSnake();
			}, speed);

			return () => {
				clearInterval(intervale);
			};
		}
	}, [
		apple,
		direction,
		onGameOver,
		pause,
		score,
		setScore,
		snake,
		speed,
	]);

	return (
		<Wrapper>
			{pause && <Text>pause</Text>}
			<GameCanvas
				ref={canvasRef}
				width={750}
				height={420}
			/>
		</Wrapper>
	);
};

export default GamePieces;
