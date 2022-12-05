import Cookies from "js-cookie";
import "./ProfileFeed.css";
import dateFormat from "dateformat";
import { deletePost } from "../../services/PostCrud";
import { editPost } from "../../services/PostCrud";
import ModalEditTweet from "../Modals/Modal-Edit-Post";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ProfileFeed({ setToggleApiCall, toggleApiCall, post }) {
	const [showEdit, setShowEdit] = useState(false);
	const [editID, setEditID] = useState(0);
	const [displayPost, setdisplayPost] = useState();

	function doDelete(event) {
		deletePost(event.target.id);
	}

	useEffect(() => {
		async function displayPost() {
			let response = await axios.get(
				"https://twitter-clone-backend-production-c9cc.up.railway.app/user/" +
					parseInt(Cookies.get("AccountID")),
			);
			let totalPosts = response.data.post_owner;
			let storePosts = [];
			for (let i = 0; i < totalPosts.length; i++) {
				console.log(totalPosts);
				let response = await axios.get(
					"https://twitter-clone-backend-production-c9cc.up.railway.app/allposts/" +
						totalPosts[i],
				);
				storePosts.push(response.data);
			}
			setdisplayPost(storePosts);
		}

		displayPost();
	}, []);

	function doEdit(event) {
		setShowEdit(true);
		setEditID(event.target.id);
	}
	const createdDate = dateFormat(Cookies.get("CreationDate"), "mmmm dS, yyyy");
	const updatedPost = [];

	return (
		<div className="feed-container">
			<div className="feed">
				<div className="edit-profile">
					<h1>{Cookies.get("User")}</h1>
				</div>
				<p>Joined {createdDate}</p>
				<h2 className="tweed-title">Your Tweeds</h2>

				<div className="tweetContainer">
					{displayPost != null && (
						<>
							{displayPost.map((displayPost, index) => {
								return (
									<div key={index}>
										<div>
											<button id={displayPost.id} onClick={doDelete}>
												Delete
											</button>
										</div>
										<div>{displayPost.text}</div>
										<div>{displayPost.date}</div>
										{displayPost.title != "Text" && (
											<>
												<img src={displayPost.title} />
											</>
										)}
										<br></br>
									</div>
								);
							})}
						</>
					)}
				</div>

				{displayPost === undefined && (
					<>
						<div>No Tweeds Yet</div>
					</>
				)}
			</div>
		</div>
	);
}

export default ProfileFeed;
