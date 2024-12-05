import React from "react";
import CreatePostIcon from "./CreatePostIcon";
import { Clapperboard, Code, HandMetal, ImagePlus } from "lucide-react";

const CreatePostFooter: React.FC = () => {
  return (
    <div className="flex items-center justify-between pt-1">
      <div className="flex items-center">
        <CreatePostIcon Icon={ImagePlus} />
        <CreatePostIcon Icon={Clapperboard} />
        <CreatePostIcon Icon={Code} />
      </div>
      <CreatePostIcon Icon={HandMetal} />
    </div>
  );
};

export default CreatePostFooter;
