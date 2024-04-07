import GameState from "components/GameState/GameState";
import { Wrapper } from "./Game.stayled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchGame } from "redux/game/operations";

const Game = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchGame());
	}, [dispatch]);

	return (
		<Wrapper>
			<GameState />
		</Wrapper>
	);
};

export default Game;
