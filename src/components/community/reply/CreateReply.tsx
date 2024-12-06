import ButtonIcon from "@/components/global/ButtonIcon";
import UserAvatar from "@/components/global/UserAvatar";
import { Input } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";
import React from "react";

const CreateReply: React.FC = () => {
  return (
    <form className="flex items-center justify-between gap-2 my-2">
      <UserAvatar height="h-[35px]" width="w-[35px]" />
      <Input
        type="email"
        placeholder="Email"
        className="outline-none border-none focus-visible:ring-0 bg-accent rounded-full"
      />
      <ButtonIcon Icon={SendHorizontal} />
    </form>
  );
};

export default CreateReply;
