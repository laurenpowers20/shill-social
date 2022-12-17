import React from "react";
import "./Post.css"
import Sidebar from "../../Sidebar";
import Widget from "../Widgets/Widget";
import Comments from "./Comments";

function PostDetail({ setPostID, postID }) {
	return (
		<div className="post-detail">
			<Sidebar />
			<Comments setPostID={setPostID} postID={postID} />
			<Widget />
		</div>
	);
}

export default PostDetail;
