import { Card } from "@/components/ui/card";
import React from "react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const Post: React.FC = () => {
  return (
    <Card className="border-none px-4 pt-[18px] pb-3">
      <PostHeader />
      <PostFooter />
    </Card>
  );
};

export default Post;
