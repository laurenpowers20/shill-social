import React from "react";
import Sidebar from "../../Sidebar";
import NewsList from "./NewsList";
import Widget from "../Widgets/Widget";
import "../Profile/ProfilePage.css";
import "./newsItem.css";

function News() {
	return (
		<div className="wrapper">
			<Sidebar />
			<NewsList />
			<Widget />
		</div>
	);
}

export default News;