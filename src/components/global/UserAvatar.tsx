import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";

interface UserAvatarProps {
  height: string;
  width: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ height, width }) => {
  return (
    <Avatar className={`${height} ${width} cursor-pointer rounded-full`}>
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        className={`${height} ${width} rounded-full`}
      />
    </Avatar>
  );
};

export default UserAvatar;
