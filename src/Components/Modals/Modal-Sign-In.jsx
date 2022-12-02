import "./Modal.css";
import Button from "@mui/material/Button";
import { doLogin } from "../../services/UserFunctions";
import React, { useState } from "react";
import Cookies from "js-cookie";

function Modal(props) {
	const [Inputemail, setEmail] = useState("");
	const [Inputpassword, setPassword] = useState("");
	if (!props.show) {
		return null;
	}
	const doLogging = async (event) => {
		event.preventDefault();
		console.log("Logging in...");
		try {
			const credentials = {
				email: Inputemail,
				password: Inputpassword,
			};
			const response = await doLogin(credentials);
			let accessToken = response.data.tokens;
      let emailOwner = response.data.email;
      let AccountID = response.data.id
			emailOwner = emailOwner.toString();
      Cookies.set("userEmail", emailOwner);
			accessToken = accessToken.split("'");
			if (response.data.email === Inputemail) {
				console.log(response.data);
				console.log("Logged in... Token is " + accessToken[7]);
				Cookies.set("AccessToken", accessToken[7].toString());
				Cookies.set("User", response.data.username);
				Cookies.set("CreationDate", response.data.created_at);
				window.location.reload();
			}
		} catch (error) {
			console.error(error);
		}
	};
	const handleChange = async (event) => {
		if (event.target.id === "email") {
			setEmail(event.target.value);
		}
		if (event.target.id === "password") {
			setPassword(event.target.value);
		}
	};
	return (
		<div className="modal" onClick={props.onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="modal-header">
					<h1 className="modal-title">Sign In to Shills</h1>
				</div>
				<div className="form-body">
					<form onSubmit={doLogging}>
						<input
							className="modal-input"
							onChange={handleChange}
							id="email"
							placeholder="Email"></input>
						<input
							className="modal-input"
							type="password"
							onChange={handleChange}
							id="password"
							placeholder="Password"></input>
            <br></br>
            {/* <input type="submit" className="modal-button" value="Sign In" /> */}
            <div className="button-container">
				<input type="submit" className="modal-button" value="Sign In" />
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
export default Modal;
