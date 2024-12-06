import React from "react";
import {
  Bookmark,
  Heart,
  MessageSquareText,
  Repeat,
  TextQuote,
} from "lucide-react";
import ButtonIcon from "@/components/global/ButtonIcon";

interface PostFooterProps {
  setToggleCommentSection: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostFooter: React.FC<PostFooterProps> = ({ setToggleCommentSection }) => {
  const handleToggleCommentSection = (): void => {
    setToggleCommentSection((prev) => !prev);
  };

  return (
    <section className="flex items-center justify-between pt-2">
      <div className="flex items-center">
        <ButtonIcon Icon={Heart} />
        <ButtonIcon
          Icon={MessageSquareText}
          handleIconClicked={handleToggleCommentSection}
        />
        <ButtonIcon Icon={Repeat} />
        <ButtonIcon Icon={TextQuote} />
      </div>
      <ButtonIcon Icon={Bookmark} />
    </section>
  );
};

export default PostFooter;
