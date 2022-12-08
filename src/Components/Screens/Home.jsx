import React from "react";
import Sidebar from "../../Sidebar";
import Feed from "./Feed";
import Widget from "../Widgets/Widget";
import "./Home.css";

function Home({ setToggleApiCall, post, toggleApiCall, setPostID, postID }) {
	return (
		<div className="home">
			<Sidebar />
			<Feed
				setToggleApiCall={setToggleApiCall}
				post={post}
				toggleApiCall={toggleApiCall}
				setPostID={setPostID}
				postID={postID}
			/>
			<Widget />
		</div>
	);
}

export default Home;
