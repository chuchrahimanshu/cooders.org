import React from "react";
import PostIcon from "./PostIcon";
import {
  Bookmark,
  Heart,
  MessageSquareText,
  Repeat,
  TextQuote,
} from "lucide-react";

const PostFooter: React.FC = () => {
  return (
    <section className="flex items-center justify-between pt-2">
      <div className="flex items-center">
        <PostIcon Icon={Heart} />
        <PostIcon Icon={MessageSquareText} />
        <PostIcon Icon={Repeat} />
        <PostIcon Icon={TextQuote} />
      </div>
      <PostIcon Icon={Bookmark} />
    </section>
  );
};

export default PostFooter;
