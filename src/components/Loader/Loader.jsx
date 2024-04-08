import { BallTriangle } from "react-loader-spinner";
import { Div } from "./Loader.styled";

export const Loader = () => (
	<>
		<Div>
			<BallTriangle
				height={100}
				width={100}
				radius={5}
				color="#64b5f6"
				ariaLabel="ball-triangle-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		</Div>
	</>
);
