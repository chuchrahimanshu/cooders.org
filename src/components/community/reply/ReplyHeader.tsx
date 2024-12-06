import UserAvatar from "@/components/global/UserAvatar";
import { Button } from "@/components/ui/button";
import { EllipsisVertical } from "lucide-react";
import React from "react";

const ReplyHeader: React.FC = () => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <UserAvatar height="h-[35px]" width="w-[35px]" />
        <div className="flex flex-col">
          <p className="text-[14px] font-semibold -mb-[2px]">
            Himanshu Chuchra
          </p>
          <p className="text-[12px] text-muted-foreground font-medium">
            @himanshu
          </p>
        </div>
      </div>
      <Button
        variant="outline"
        className="rounded-full border-none h-[31px] w-[31px] bg-card shadow-none">
        <EllipsisVertical style={{ height: "18px", width: "18px" }} />
      </Button>
    </section>
  );
};

export default ReplyHeader;
