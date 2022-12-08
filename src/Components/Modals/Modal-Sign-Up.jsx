import "./Modal.css";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { doRegister } from "../../services/UserFunctions";

function SignUpModal(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");

	const doRegistering = async (event) => {
		console.log("Registering...");
		event.preventDefault();
		try {
			const credentials = {
				email: email,
				username: username,
				password: password,
			};
			const response = await doRegister(credentials);
			if (response.status === 201) {
				alert("Registered! Go ahead and log in !");
				return;
			}
		} catch (error) {
			console.error(error);
			alert(
				"Email or Username taken, or password is shorter than 6 characters.",
			);
		}
	};
	const handleChange = async (event) => {
		if (event.target.id === "email") {
			setEmail(event.target.value);
			console.log(event.target.value);
		}
		if (event.target.id === "password") {
			setPassword(event.target.value);
		}
		if (event.target.id === "username") {
			setUsername(event.target.value);
		}
	};

	if (!props.show) {
		return null;
	}

	return (
		<div className="modal" onClick={props.onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="modal-header">
					<h1 className="modal-title">Sign Up</h1>
				</div>
				<div className="form-body">
					<form onSubmit={doRegistering}>
						<input
							className="modal-input"
							id="username"
							onChange={handleChange}
							placeholder="Create Username"></input>
						<input
							className="modal-input"
							id="email"
							onChange={handleChange}
							placeholder="Email"></input>
						<input
							className="modal-input"
							type="password"
							id="password"
							onChange={handleChange}
							placeholder="Create Password"></input>
						<br></br>
						<div className="button-container">
							<input type="submit" className="modal-button" value="Sign Up" />
						</div>
					</form>
				</div>
				<Button onClick={props.onClose} className="modal-button">
					Close
				</Button>
			</div>
		</div>
	);
}

export default SignUpModal;
