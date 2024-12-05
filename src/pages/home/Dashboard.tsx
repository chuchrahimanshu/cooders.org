import CreatePost from "@/components/community/post/CreatePost";
import Post from "@/components/community/post/Post";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div>
      <CreatePost />
      <br />
      <Post />
    </div>
  );
};

export default Dashboard;
