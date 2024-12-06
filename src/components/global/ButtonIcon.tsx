import React from "react";
import { Button } from "../ui/button";
import { LucideProps } from "lucide-react";

interface ButtonIconProps {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  handleIconClicked?: () => void;
  buttonHeight?: string;
  buttonWidth?: string;
  iconHeight?: string;
  iconWidth?: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  Icon,
  handleIconClicked,
  buttonHeight = "h-[35px]",
  buttonWidth = "w-[35px]",
  iconHeight = "20px",
  iconWidth = "20px",
}) => {
  return (
    <Button
      variant="outline"
      className={`rounded-full border-none ${buttonHeight} ${buttonWidth} bg-card shadow-none flex items-center justify-center`}
      onClick={handleIconClicked}>
      <Icon style={{ height: iconHeight, width: iconWidth }} />
    </Button>
  );
};

export default ButtonIcon;
