import React from "react";
import CommentHeader from "./CommentHeader";
import CommentBody from "./CommentBody";
import CommentFooter from "./CommentFooter";
import CreateReply from "../reply/CreateReply";

const Comment: React.FC = () => {
  return (
    <section className="my-2">
      <CommentHeader />
      <CommentBody />
      <CommentFooter />
      <CreateReply />
    </section>
  );
};

export default Comment;
