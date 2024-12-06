import { Textarea } from "@/components/ui/textarea";
import React from "react";

const CreatePostBody: React.FC = () => {
  return (
    <Textarea
      placeholder="Type your message here."
      className="border-none focus-visible:ring-0 pt-[6px] px-0 w-[350px] h-auto min-h-24 max-h-36 overflow-y-auto scrollbar-none resize-none cursor-pointer"
      style={{ fontSize: "18px" }}
      name="create-post"
    />
  );
};

export default CreatePostBody;
