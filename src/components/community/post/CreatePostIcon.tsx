import { Button } from "@/components/ui/button";
import { LucideProps } from "lucide-react";
import React from "react";

interface CreatePostIconProps {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

const CreatePostIcon: React.FC<CreatePostIconProps> = ({ Icon }) => {
  return (
    <Button
      variant="outline"
      className="rounded-full border-none h-[35px] w-[35px] bg-card shadow-none">
      <Icon style={{ height: "20px", width: "20px" }} />
    </Button>
  );
};

export default CreatePostIcon;
