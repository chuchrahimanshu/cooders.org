import CreatePost from "@/components/community/post/CreatePost";
import Post from "@/components/community/post/Post";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div>
      <CreatePost />
      <br />
      <Post />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Dashboard;
