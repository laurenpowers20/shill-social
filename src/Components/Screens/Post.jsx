import React from "react";
import "./Post.css";
import Cookies from "js-cookie";
import { deletePost } from "../../services/PostCrud"
import { editPost} from "../../services/PostCrud"
import ModalEditTweet from "../Modals/Modal-Edit-Post"
import { useState } from "react";

function Post({ post }) {

  const [showEdit, setShowEdit] = useState(false);
  const [editID, seteditID] = useState(0)

  function doDelete(event) {
    deletePost(event.target.id)
  }

  function doEdit(event) {
    setShowEdit(true)
    seteditID(event.target.id)
  }
  
	return (
    <div className="post">
      { post != null && <>
        {post.map((post,i) => (
          <div key = { i } className="post-container">
            <div className="post">
              <br></br>
              <div className="username">
                {post.owner}
              </div>
              <br></br>
              <div className="postText"></div>
              {post.text}
              <div className="postText"></div>
              <div className="postImageURL">
                {post.title != "Text" && <>
                  <img class = "image" src={post.title} /></>}
              </div>
              <br></br>
              <div className ="buttonsContainer"> 
              <button className= 'commentsButton'>Comments</button>
              {post != null && post.owner === Cookies.get("userEmail") && <>
                <button className = "deletePostButton" id={post.id} onClick={doDelete} >Delete Post</button></>}
              {post != null && post.owner === Cookies.get("userEmail") && <>
                <ModalEditTweet
                editID = {editID}
                onClose={() => setShowEdit(false)}
                show={showEdit}/>
                  <button className="editPostButton" id={post.id} onClick={doEdit} >Edit Post</button></>}
            </div>
            </div>
            <br></br>
          </div>
      ))}
      </>}
		</div>
	);
};

export default Post;
