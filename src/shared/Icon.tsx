import * as icons from "@/components/atoms/icons/Icons";

export type IconsType = keyof typeof icons;

export interface IconProps {
  icon: IconsType;
  size?: string;
  onClick?: () => void;
}

export const Icon = ({ size = "icon--small", icon, ...props }: IconProps) => {
  return (
    <span className={`${size} flex`} {...props}>
      {icons[icon]()}
    </span>
  );
};
