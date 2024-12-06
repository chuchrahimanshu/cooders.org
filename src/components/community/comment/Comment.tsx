import React from "react";
import CommentHeader from "./CommentHeader";
import CommentBody from "./CommentBody";
import CommentFooter from "./CommentFooter";

const Comment: React.FC = () => {
  return (
    <section className="my-2">
      <CommentHeader />
      <CommentBody />
      <CommentFooter />
    </section>
  );
};

export default Comment;
