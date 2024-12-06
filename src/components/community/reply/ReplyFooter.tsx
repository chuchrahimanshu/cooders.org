import ButtonIcon from "@/components/global/ButtonIcon";
import { Heart, TextQuote } from "lucide-react";
import React from "react";

const ReplyFooter: React.FC = () => {
  return (
    <section className="flex items-center ml-[40px]">
      <ButtonIcon Icon={Heart} />
      <ButtonIcon Icon={TextQuote} />
    </section>
  );
};

export default ReplyFooter;
