import React from "react";
import Sidebar from "../../Sidebar";
import Feed from "./Feed";
import Widget from "../Widgets/Widget";
import "./Home.css";

function Home({setToggleApiCall, post , toggleApiCall, setpostID, postID}) {

	return (
		<div className="home">
      <Sidebar />
      <Feed
        setToggleApiCall={setToggleApiCall}
        post={post}
        toggleApiCall={toggleApiCall}
        setpostID={setpostID}
        postID={postID } />
			<Widget />
		</div>
	);
}

export default Home;
