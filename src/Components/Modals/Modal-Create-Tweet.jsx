import "./Modal.css";
// import { TextInput } from 'react-native';
import React, { useState } from "react";
import Cookies from "js-cookie";
import { createPost } from "../../services/PostCrud";

function ModalCreateTweet(props) {
	const [characterCount, setCharacterCount] = useState(0);
	const [tweet, setTweet] = useState("");

	function handleChange(event) {
		setTweet(event.target.value);
		setCharacterCount(event.target.value.length);
	}

	async function doSubmit(event) {
		event.preventDefault();
		try {
			const content = {
				text: tweet,
				title: "Text",
			};
			await createPost(content);
			window.location.reload();
		} catch (error) {
			throw error;
		}
		return props.onClose;
	}

	if (!props.show) {
		return null;
	}
	return (
		<div className="modal" onClick={props.onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="modal-header">
					<h1>@{Cookies.get("User")}</h1>
				</div>
				<div className="modal-body">
					<textarea
						className="text-area"
						id="tweetMessage"
						name="tweetMessage"
						placeholder="What's Happening?"
						maxLength="280"
						onChange={handleChange}></textarea>
					<br></br>
					<textarea
						className="text-area"
						id="tweetImage"
						name="tweetImage"
						placeholder="Input ImageURL"
						maxLength="280"
						onChange={handleChange}></textarea>
				</div>
				<div className="modal-footer">
					<p className="character-counter">{characterCount}/280</p>
					<button className="modal-button" onClick={doSubmit}>
						Post
					</button>
				</div>
			</div>
		</div>
	);
}

export default ModalCreateTweet;
