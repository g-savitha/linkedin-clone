import { Avatar } from "@material-ui/core";
import React from "react";
import InputOption from "./InputOption";
import "./Post.css";

import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
function Post({ name, description, message, photoURL }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoURL}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpOutlinedIcon} title={"Like"} color={"gray"} />
        <InputOption Icon={ChatOutlinedIcon} title={"Comment"} color={"gray"} />
        <InputOption Icon={ShareOutlinedIcon} title={"Share"} color={"gray"} />
        <InputOption Icon={SendOutlinedIcon} title={"Send"} color={"gray"} />
      </div>
    </div>
  );
}

export default Post;
