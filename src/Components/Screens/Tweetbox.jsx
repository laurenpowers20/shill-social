import React, { useState } from "react";
import "./TweetBox.css";
import Button from "@mui/material/Button";
import { createPost } from "../../services/PostCrud";

function Tweetbox({ setToggleApiCall, toggleApiCall }) {
  const [characterCount, setCharacterCount] = useState(0);
  const [imageURL, setImageURL] = useState("");
  const [text, setText] = useState("");

  function getData() {
    console.log("Refreshing Feed");
    if (toggleApiCall === true) {
      setToggleApiCall(false);
    }
    if (toggleApiCall === false) {
      setToggleApiCall(true);
    }
  }

  const doSubmit = async (event) => {
    event.preventDefault();
    try {
      if (imageURL === "") {
        setImageURL("noImage");
        const content = {
          text: text,
        };
        await createPost(content);
        getData();
        document.getElementById("image").value = "";
        document.getElementById("text").value = "";
      } else {
        const content = {
          text: text,
          title: imageURL,
        };
        await createPost(content);
        getData();
        document.getElementById("image").value = "";
        document.getElementById("text").value = "";
      }
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (event) => {
    if (event.target.id === "text") {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
    if (event.target.id === "image") {
      setImageURL(event.target.value);
    }
  };

  return (
    <div className="tweetBox">
      <form onSubmit={doSubmit}>
        <div className="tweetBox-input">
          <textarea
            className="tweetBox-input"
            id="text"
            placeholder="What's happening?"
            onChange={handleChange}
            type="text"
            size="2rem"
          />
          <input
            // autoComplete="off" // for some reason if i have this active, it will hide all of the posts on the feed until i inspect element and then they'll show up again. super weird, will deal with eventually
            className="tweetBox-inputImage"
            id="image"
            placeholder="Enter image URL"
            onChange={handleChange}
            type="text"
          />
        </div>
        <p className="character-counter">{characterCount}/280</p>
        <Button
          className="feed_tweet_BTN"
          type="submit"
          variant="outlined"
          fullWidth
        >
          Post
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
