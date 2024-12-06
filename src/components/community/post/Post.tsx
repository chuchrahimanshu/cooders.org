import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import CreateComment from "../comment/CreateComment";
import Comment from "../comment/Comment";

const Post: React.FC = () => {
  const [toggleCommentSection, setToggleCommentSection] =
    useState<boolean>(false);

  return (
    <Card className="border-none px-4 pt-[18px] pb-3 w-[450px]">
      <PostHeader />
      <PostBody />
      <PostFooter setToggleCommentSection={setToggleCommentSection} />
      {toggleCommentSection && <CreateComment />}
      <Comment />
    </Card>
  );
};

export default Post;
