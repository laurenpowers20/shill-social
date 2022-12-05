import "./Comments.css";
import Tweetbox from "./Tweetbox";
import React, { useState, useEffect } from "react";
import { getPostByID } from "../../services/PostCrud";
import Cookies from "js-cookie";
import axios from "axios";
import { createComment } from "../../services/CommentCrud";
import { getComments } from "../../services/CommentCrud";
import { filterComment } from "../../services/CommentCrud";

function Comments({ postID }) {
	const [toggleApiCall, setToggleApiCall] = useState(false);
	const [comment, setComment] = useState("");
	const [thisPost, setthisPost] = useState();
	const [loadedComments, setloadedComments] = useState();

	async function submitComment(event) {
		event.preventDefault();
		const content = {
			text: comment,
			title: parseInt(Cookies.get("currentPost")),
		};
		let response = await createComment(content);
		console.log(response);
		window.location.reload();
	}

	function handleChange(event) {
		if (event.target.id === "text") {
			setComment(event.target.value);
		}
	}

	let comments = [];
	async function fillCommentArray(input) {
		const getComment = async (id) => {
			try {
				let response = await axios.get(
					"https://twitter-clone-backend-production-c9cc.up.railway.app/allcomments/" +
						id +
						"/",
				);
				return response;
			} catch (error) {
				throw error;
			}
		};
		let comments = [];
		for (let i = 0; i < input.length; i++) {
			let response = await getComment(input[i]);
			console.log(response);
			comments.push(response.data);
		}
		console.log(comments);
		setloadedComments(comments);
	}

	useEffect(() => {
		const grabPostbutByID = async () => {
			let response = await getPostByID(Cookies.get("currentPost"));
			setthisPost(response);
			let response2 = await getComments(Cookies.get("currentPost"));
			console.log(response2);
			let response3 = await fillCommentArray(response2);
		};
		grabPostbutByID();
	}, [toggleApiCall]);

	return (
		<div className="determineWidth">
			<div className="postComments-container">
				{thisPost != null && (
					<>
						<div className="username">{thisPost.owner}</div>
						<br></br>
						<div className="text">{thisPost.text}</div>
						<div>
							{thisPost.title != "Text" && (
								<>
									<img className="image" src={thisPost.title} />
								</>
							)}
						</div>
						<div className="buttonsContainer">
							{thisPost != null &&
								thisPost.owner === Cookies.get("userEmail") && (
									<>
										<button className="deletePostButton" id={thisPost.id}>
											Delete Post
										</button>
									</>
								)}
							{thisPost != null &&
								thisPost.owner === Cookies.get("userEmail") && (
									<>
										<button className="editPostButton" id={thisPost.id}>
											Edit Post
										</button>
									</>
								)}
						</div>
						<br></br>
						<div className="comments-container">
							<div className="comments-inner">
								Comment Section:
								<br></br>
								<br></br>
								<br></br>
								{loadedComments != null && (
									<>
										{loadedComments.map((loadedComments, index) => {
											return (
												<div key={index}>
													<div>Owner: {loadedComments.owner}</div>
													<div>Comment: {loadedComments.text}</div>
													<br></br>
												</div>
											);
										})}
									</>
								)}
							</div>
						</div>
					</>
				)}
				<form onSubmit={submitComment}>
					<div>Enter a Comment:</div>
					<input id="text" onChange={handleChange} type="text"></input>
					<input type="submit"></input>
				</form>
			</div>
		</div>
	);
}

export default Comments;
