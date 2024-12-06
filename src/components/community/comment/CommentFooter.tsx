import ButtonIcon from "@/components/global/ButtonIcon";
import { Heart, MessageSquareText, TextQuote } from "lucide-react";
import React from "react";

const CommentFooter: React.FC = () => {
  return (
    <section className="flex items-center ml-[40px]">
      <ButtonIcon Icon={Heart} />
      <ButtonIcon Icon={MessageSquareText} />
      <ButtonIcon Icon={TextQuote} />
    </section>
  );
};

export default CommentFooter;
