import React, { useState } from "react";
import Cookies from "js-cookie";
import "./ProfileFeed.css";
import dateFormat from "dateformat";
import { deletePost } from "../../services/PostCrud";
import { editPost } from "../../services/PostCrud";
import ModalEditTweet from "../Modals/Modal-Edit-Post";

function ProfileFeed({ setToggleApiCall, toggleApiCall, post }) {
	const [showEdit, setShowEdit] = useState(false);
	const [editID, setEditID] = useState(0);

	function doDelete(event) {
		deletePost(event.target.id);
	}

	function doEdit(event) {
		setShowEdit(true);
		setEditID(event.target.id);
	}
	const createdDate = dateFormat(Cookies.get("CreationDate"), "mmmm dS, yyyy");
	const updatedPost = [];

	post.forEach((listItem) => {
		if (listItem.owner === Cookies.get("userEmail")) {
			updatedPost.push(listItem);
		}
	});

	return (
		<div className="feed-container">
			<div className="feed">
				<div className="edit-profile">
					<h1>@{Cookies.get("User")}</h1>
					<button>Edit Profile</button>
				</div>
				<p>Joined {createdDate}</p>
				<h2 className="tweed-title">Your Shills</h2>
				<div className="post">
					{updatedPost != null && (
						<>
							{updatedPost.map((post, i) => (
								<div key={i} className="post-container">
									<div className="post">
										<div className="username">{post.owner}</div>
										<div className="postText"></div>
										{post.text}

										<div className="postImageURL">
											{post.title !== "Text" && (
												<>
													<img className="postImg" src={post.title} alt="" />
												</>
											)}
										</div>
										<div className="buttonsContainer">
											<button className="commentsButton">Comments</button>
											{post != null && post.owner === Cookies.get("userEmail") && (
												<>
													{post != null &&
														post.owner === Cookies.get("userEmail") && (
															<>
																<ModalEditTweet
																	editID={editID}
																	onClose={() => setShowEdit(false)}
																	show={showEdit}
																/>
																<button
																	className="editPostButton"
																	id={post.id}
																	onClick={doEdit}>
																	Edit Post
																</button>
															</>
														)}
													<button
														className="deletePostButton"
														id={post.id}
														onClick={doDelete}>
														Delete Post
													</button>
												</>
											)}
										</div>
									</div>
								</div>
							))}
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProfileFeed;
