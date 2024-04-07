import GameState from "components/GameState/GameState";
import { Wrapper } from "./Game.stayled";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchResults } from "redux/game/operations";

const Game = () => {
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(fetchResults());
	// }, [dispatch]);

	return (
		<Wrapper>
			<GameState />
		</Wrapper>
	);
};

export default Game;
