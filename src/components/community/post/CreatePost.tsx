import React from "react";
import { Card } from "@/components/ui/card";
import CreatePostBody from "./CreatePostBody";
import CreatePostFooter from "./CreatePostFooter";
import UserAvatar from "@/components/global/UserAvatar";

const CreatePost: React.FC = () => {
  return (
    <Card className="border-none">
      <section className="flex gap-4 px-4 pt-[18px] pb-3">
        <UserAvatar height="h-[50px]" width="w-[50px]" />
        <section>
          <CreatePostBody />
          <CreatePostFooter />
        </section>
      </section>
    </Card>
  );
};

export default CreatePost;
