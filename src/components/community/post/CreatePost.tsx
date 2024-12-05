import React from "react";
import { Card } from "@/components/ui/card";
import CreatePostAvatar from "./CreatePostAvatar";
import CreatePostBody from "./CreatePostBody";
import CreatePostFooter from "./CreatePostFooter";

const CreatePost: React.FC = () => {
  return (
    <Card className="border-none">
      <section className="flex gap-4 px-4 pt-[18px] pb-3">
        <CreatePostAvatar />
        <section>
          <CreatePostBody />
          <CreatePostFooter />
        </section>
      </section>
    </Card>
  );
};

export default CreatePost;
