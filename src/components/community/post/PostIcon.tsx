import React from "react";
import { Button } from "@/components/ui/button";
import { LucideProps } from "lucide-react";

interface PostIconProps {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

const PostIcon: React.FC<PostIconProps> = ({ Icon }) => {
  return (
    <Button
      variant="outline"
      className="rounded-full border-none h-[35px] w-[35px] bg-card shadow-none">
      <Icon style={{ height: "23px", width: "23px" }} />
    </Button>
  );
};

export default PostIcon;
