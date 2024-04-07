import { useDispatch } from "react-redux";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";

import { logIn } from "redux/auth/operations";
import {
	Label,
	Input,
	Button,
	Forma,
} from "./LoginForm.styled";

const initialValues = {
	email: "",
	password: "",
};

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(6).max(16).required(),
});

export const LoginForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = (values, { resetForm }) => {
		dispatch(logIn(values));
		resetForm();
	};

	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={schema}
			>
				{() => (
					<Forma autoComplete="off">
						<Label>
							Email
							<Input
								type="email"
								name="email"
								title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
								placeholder="Enter email ..."
							/>
							<ErrorMessage name="email" component="div" />
						</Label>
						<Label>
							Password
							<Input
								type="password"
								name="password"
								title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
								placeholder="Enter password ..."
							/>
							<ErrorMessage
								name="password"
								component="div"
							/>
						</Label>
						<Button type="submit">Log In</Button>
					</Forma>
				)}
			</Formik>
		</>
	);
};
