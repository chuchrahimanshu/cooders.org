import React from "react";
import { EllipsisVertical } from "lucide-react";
import UserAvatar from "@/components/global/UserAvatar";
import ButtonIcon from "@/components/global/ButtonIcon";

const PostHeader: React.FC = () => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <UserAvatar height="h-[42px]" width="w-[42px]" />
        <div className="flex flex-col">
          <p className="text-[16px] font-semibold -mb-[2px]">
            Himanshu Chuchra
          </p>
          <p className="text-[14px] text-muted-foreground font-medium">
            @himanshu
          </p>
        </div>
      </div>
      <ButtonIcon Icon={EllipsisVertical} />
    </section>
  );
};

export default PostHeader;
