import React from "react";
import Sidebar from "../../Sidebar";
import Feed from "./Feed";
import Widget from "../Widgets/Widget";
import "./Home.css";

function Home({ setToggleApiCall, post, toggleApiCall }) {
	return (
		<div className="home">
      <Sidebar />
      <Feed
        setToggleApiCall={setToggleApiCall}
        post={post}
        toggleApiCall={toggleApiCall}/>
			<Widget />
		</div>
	);
}

export default Home;
