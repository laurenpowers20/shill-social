import "./Modal.css";
import React, { useState } from "react";
import { editPost } from "../../services/PostCrud";

function ModalEditTweet(props) {
	const [newText, setNewText] = useState("");
	const [newImageURL, setnewImageURL] = useState("Text");

	function handleChange(event) {
		if (event.target.id === "text") {
			setNewText(event.target.value);
		}
		if (event.target.id === "image") {
			setnewImageURL(event.target.value);
		}
	}

	async function doSubmit(event) {
		event.preventDefault();
		try {
			if (newText === "" && newImageURL === "") {
				alert("Please enter stuff");
				return;
			} else {
				console.log(props.editID);
				const content = {
					text: newText,
					title: newImageURL,
				};
				editPost(content, props.editID);
			}
		} catch (error) {
			throw error;
		}
		return props.onClose;
	}

	if (!props.show) {
		return null;
	}

	return (
		<div className="modal">
			<div className="modal-content">
				<div className="modal-body">
					<div className="modal-header">
						<h1 className="modal-title">Edit Post:</h1>
					</div>
					<form onSubmit={doSubmit}>
						<input
							onChange={handleChange}
							type="text"
							id="text"
							placeholder="Editing Text"></input>
						<input
							onChange={handleChange}
							type="text"
							id="image"
							placeholder="Editing ImageURL"></input>
						<br></br>
						<input type="submit"></input>
					</form>
					<button onClick={props.onClose}>Exit</button>
				</div>
			</div>
		</div>
	);
}

export default ModalEditTweet;
