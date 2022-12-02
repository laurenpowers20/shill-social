import api from "./apiConfig.js";
import Cookies from 'js-cookie'
import axios from "axios";

async function filterComments(list,postID) {
  let commentsAssociatedWithPost = []
  for (let i = 0; i < list.data.length; i++){
    if (list.data[i]["title"] == postID) {
      commentsAssociatedWithPost.push(list.data[i]["id"])
    }
  }
  return commentsAssociatedWithPost
  
}
export const getComments = async (postID) => { 
  try {
    let response = await axios.get("https://twitter-clone-backend-production-c9cc.up.railway.app/allcomments/")
    let nextFunction = await filterComments(response,postID)
    return nextFunction
  } catch (error) {
    throw error;
  }
};

export const getComment = async (id) => {//post id
  try {
    const response = await api.get(`/comments/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createComment = async (content) => {
  try {
    if (Cookies.get("AccessToken") === undefined || Cookies.get("AccessToken") === "loggedout") {
      alert("Please log in to create a post!")
    }
    const config = {
      headers: {
        "Authorization": `Bearer ${Cookies.get("AccessToken")}`,
      },
    };
    let response = await axios.post(`https://twitter-clone-backend-production-c9cc.up.railway.app/user/comments`, content, config)
    return response
  } catch (error) {
    throw error;
  }
};

export const editComment = async (id, commentData) => {
  try {
    const response = await api.post(`/comments/${id}`, commentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const deleteComment = async (id) => {
  try {
    const response = await api.delete(`/comments/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};




