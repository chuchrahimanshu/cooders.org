import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { EllipsisVertical } from "lucide-react";

const PostHeader: React.FC = () => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Avatar className="h-[45px] w-[45px] cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        </Avatar>
        <div className="flex flex-col">
          <p className="text-[17px] font-semibold -mb-[2px]">
            Himanshu Chuchra
          </p>
          <p className="text-[15px] text-muted-foreground font-medium">
            @himanshu
          </p>
        </div>
      </div>
      <Button
        variant="outline"
        className="rounded-full border-none h-[35px] w-[35px] bg-card shadow-none">
        <EllipsisVertical style={{ height: "24px", width: "24px" }} />
      </Button>
    </section>
  );
};

export default PostHeader;
