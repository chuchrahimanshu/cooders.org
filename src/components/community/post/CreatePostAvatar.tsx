import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const CreatePostAvatar: React.FC = () => {
  return (
    <Avatar className="h-[50px] w-[50px] cursor-pointer">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    </Avatar>
  );
};

export default CreatePostAvatar;
