import React from "react";
import "./TweetBox.css";
import Button from "@mui/material/Button";
import { createPost } from "../../services/PostCrud";
import { useState } from "react";

function Tweetbox({ setToggleApiCall, toggleApiCall, post }) {
	// const [characterCount, setCharacterCount] = useState(0);
	const [imageURL, setImageURL] = useState("");
	const [characterCount, setCharacterCount] = useState(0);
	const [text, setText] = useState("");

	function getData() {
		console.log("Refreshing Feed");
		if (toggleApiCall === true) {
			setToggleApiCall(false);
		}
		if (toggleApiCall === false) {
			setToggleApiCall(true);
		}
	}

	const doSubmit = async (event) => {
		event.preventDefault();
		try {
			if (imageURL === "") {
				setImageURL("noImage");
				const content = {
					text: text,
				};
				await createPost(content);
				getData();
				document.getElementById("image").value = "";
				document.getElementById("text").value = "";
			} else {
				const content = {
					text: text,
					title: imageURL,
				};
				await createPost(content);
				getData();
				document.getElementById("image").value = "";
				document.getElementById("text").value = "";
			}
		} catch (error) {
			throw error;
		}
	};

	const handleChange = (event) => {
		if (event.target.id === "text") {
			setText(event.target.value);
			setCharacterCount(event.target.value.length);
		}
		if (event.target.id === "image") {
			setImageURL(event.target.value);
		}
	};

	return (
		<div className="tweetBox">
			<form onSubmit={doSubmit}>
				<div className="tweetBox-input">
					<textarea
						className="tweetBox-input"
						id="text"
						placeholder="What's happening, tweed?"
						type="text"
						size="2rem"
						onChange={handleChange}
					/>

					<input
						id="image"
						className="tweetBox-inputImage"
						placeholder="Enter image URL"
						type="text"
						onChange={handleChange}
					/>
				</div>
				<p className="character-counter">{characterCount}/280</p>

				<Button
					variant="outlined"
					className="feed_tweet_BTN"
					type="submit"
					// onClick={sendTweet}
					fullWidth>
					Post
				</Button>
			</form>
		</div>
	);
}

export default Tweetbox;
