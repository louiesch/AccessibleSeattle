import React from "react";
import Post from "./Post";

function SocialFeed() {
  return (
    <>
      <Post 
        userName='LouieSch'
        post='My first post, yay!' />
      <Post 
        userName='LBJ'
        post='hey Louie this is so cool - Landes' />
    </>
  );
}

export default SocialFeed