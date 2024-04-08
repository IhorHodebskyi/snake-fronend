import { useDispatch } from "react-redux";
import { signUp } from "redux/auth/operations";
import React from "react";
import { Formik, ErrorMessage } from "formik";
import {
	Button,
	Forma,
	Input,
	Label,
	WrapperEmail,
	WrapperName,
	WrapperPassword,
} from "./RegisterForm.styles";
import * as yup from "yup";

const initialValues = {
	name: "",
	email: "",
	password: "",
};

const schema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().min(6).max(16).required(),
});

export const RegisterForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = (values, { resetForm }) => {
		dispatch(signUp(values));
		resetForm();
	};

	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={schema}
			>
				{formik => {
					return (
						<Forma autoComplete="off">
							<Label>
								User name
								<Input
									type="text"
									name="name"
									title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
									placeholder="Enter name ..."
									className={`${
										formik.touched.name &&
										!formik.errors.name &&
										"success"
									}
                                ${
																	formik.touched.name &&
																	formik.errors.name &&
																	"error"
																}`}
								/>
								{formik.touched.name && (
									<WrapperName>
										{formik.errors.name ? (
											<ErrorMessage
												name="name"
												component="p"
											/>
										) : (
											<p>Success!</p>
										)}
									</WrapperName>
								)}
							</Label>
							<Label>
								Email
								<Input
									type="email"
									name="email"
									title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
									placeholder="Enter email ..."
									className={`${
										formik.touched.email &&
										!formik.errors.email &&
										"success"
									}
                                ${
																	formik.touched.email &&
																	formik.errors.email &&
																	"error"
																}`}
								/>
								{formik.touched.email && (
									<WrapperEmail>
										{formik.errors.email ? (
											<ErrorMessage
												name="email"
												component="p"
											/>
										) : (
											<p>Success!</p>
										)}
									</WrapperEmail>
								)}
							</Label>
							<Label>
								Password
								<Input
									type="password"
									name="password"
									title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
									placeholder="Enter password ..."
									className={`${
										formik.touched.password &&
										!formik.errors.password &&
										"success"
									}
                                ${
																	formik.touched.password &&
																	formik.errors.password &&
																	"error"
																}`}
								/>
								{formik.touched.password && (
									<WrapperPassword>
										{formik.errors.password ? (
											<ErrorMessage
												name="password"
												component="p"
											/>
										) : (
											<p>Success!</p>
										)}
									</WrapperPassword>
								)}
							</Label>
							<Button type="submit">Register</Button>
						</Forma>
					);
				}}
			</Formik>
		</>
	);
};
