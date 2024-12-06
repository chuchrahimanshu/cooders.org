import React from "react";
import ReplyHeader from "./ReplyHeader";
import ReplyBody from "./ReplyBody";
import ReplyFooter from "./ReplyFooter";

const Reply: React.FC = () => {
  return (
    <section className="my-2">
      <ReplyHeader />
      <ReplyBody />
      <ReplyFooter />
    </section>
  );
};

export default Reply;
