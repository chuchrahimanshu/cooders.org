import React from "react";
import { Clapperboard, Code, HandMetal, ImagePlus } from "lucide-react";
import ButtonIcon from "@/components/global/ButtonIcon";

const CreatePostFooter: React.FC = () => {
  return (
    <div className="flex items-center justify-between pt-1">
      <div className="flex items-center">
        <ButtonIcon Icon={ImagePlus} />
        <ButtonIcon Icon={Clapperboard} />
        <ButtonIcon Icon={Code} />
      </div>
      <ButtonIcon Icon={HandMetal} />
    </div>
  );
};

export default CreatePostFooter;
