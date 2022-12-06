import React from "react";
import "./PostDetail.css";
import Sidebar from "../../Sidebar";
import Widget from "../Widgets/Widget";
import Comments from "./Comments";

function PostDetail({ setpostID, postID }) {
	return (
		<div className="postdetail">
			<Sidebar />
			<Comments setpostID={setpostID} postID={postID} />
			<Widget />
		</div>
	);
}

export default PostDetail;
