import React, { useEffect, useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

import { Avatar } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import TodayIcon from "@material-ui/icons/Today";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  const sendPost = (e) => {
    //prevents default behaviour
    //stops page from refreshing when pressed submit
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user.photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="feed">
      {/* Write a post */}
      <div className="feed__inputContainer">
        <div className="feed__input">
          <div className="feed__avatar">
            <Avatar src={user?.photoURL}>{user?.displayName[0]}</Avatar>
          </div>
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__options">
          {/* INPUT OPTIONS */}
          <InputOption Icon={ImageIcon} title={"Photo"} color="#70b5f9" />
          <InputOption
            Icon={SubscriptionsIcon}
            title={"Video"}
            color="#7fc15e"
          />
          <InputOption Icon={TodayIcon} title={"Event"} color="#e7a33e" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title={"Write Article"}
            color="#f5987e"
          />
        </div>
      </div>
      {/* List of Posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoURL } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoURL={photoURL}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
