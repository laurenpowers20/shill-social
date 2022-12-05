import React from "react";
import Sidebar from "../../Sidebar";
import Widget from "../Widgets/Widget";
import ProfileFeed from "./ProfileFeed";
import "./ProfilePage.css";

function ProfilePage({
	setToggleApiCall,
	post,
	toggleApiCall,
	userPosts,
	setUserPosts,
}) {
	return (
		<div className="profile-page">
			<Sidebar />
			<ProfileFeed
				setToggleApiCall={setToggleApiCall}
				post={post}
				setUserPosts={setUserPosts}
				userPosts={userPosts}
				toggleApiCall={toggleApiCall}
			/>
			<Widget />
		</div>
	);
}

export default ProfilePage;
