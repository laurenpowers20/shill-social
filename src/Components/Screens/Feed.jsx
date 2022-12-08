import React from "react";
import "./Feed.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post.jsx";

function Feed({ setToggleApiCall, toggleApiCall, post, postID, setPostID }) {
	return (
		<div className="feed-container">
			<div className="feed">
				<Tweetbox
					post={post}
					setToggleApiCall={setToggleApiCall}
					toggleApiCall={toggleApiCall}
				/>
				<Post
					setPostID={setPostID}
					postID={postID}
					post={post}
					setToggleApiCall={setToggleApiCall}
					toggleApiCall={toggleApiCall}
				/>
			</div>
		</div>
	);
}

export default Feed;
