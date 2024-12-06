import React from "react";
import CommentHeader from "./CommentHeader";
import CommentBody from "./CommentBody";
import CommentFooter from "./CommentFooter";
import CreateReply from "../reply/CreateReply";
import Reply from "../reply/Reply";

const Comment: React.FC = () => {
  return (
    <section className="my-2">
      <CommentHeader />
      <CommentBody />
      <CommentFooter />
      <section className="ml-[42px]">
        <CreateReply />
        <Reply />
      </section>
    </section>
  );
};

export default Comment;
