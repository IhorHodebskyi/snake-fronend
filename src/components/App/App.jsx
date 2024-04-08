import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute";
import { RestrictedRoute } from "../RestrictedRoute";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "../../hooks/useAuth";
import { Loader } from "components/Loader/Loader";
import { Layout } from "components/Layout/Layout";

const Home = lazy(() => import("pages/Home"));
const Register = lazy(() => import("pages/Register"));
const Login = lazy(() => import("pages/Login"));
const Game = lazy(() => import("pages/Game"));

export const App = () => {
	const dispatch = useDispatch();
	const { isRefreshing } = useAuth();

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return isRefreshing ? (
		<Loader />
	) : (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />

				<Route
					path="/register"
					element={
						<RestrictedRoute
							redirectTo="/login"
							component={<Register />}
						/>
					}
				/>

				<Route
					path="/login"
					element={
						<RestrictedRoute
							redirectTo="/game"
							component={<Login />}
						/>
					}
				/>

				<Route
					path="/game"
					element={
						<PrivateRoute
							redirectTo="/login"
							component={<Game />}
						/>
					}
				/>
				<Route path="*" element={<Navigate to="/" />} />
			</Route>
		</Routes>
	);
};
