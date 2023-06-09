import StyledButton from "./styledButton";

export interface IButton {
  size: "1" | "2" | "3" | "4" | "5" | "6" | "7";
  hover: string;
  background: string;
  color?: string;
  border?: string;
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  value?: any;
  width?: string;
  padding?: string;
  is_active?: string;
}

const Button = ({
  size,
  background,
  hover,
  text,
  color,
  border,
  onClick,
  disabled,
  type,
  value,
  width,
  padding,
  is_active,
}: IButton) => {
  return (
    <StyledButton
      size={size}
      background={background}
      color={color}
      border={border}
      value={value}
      onClick={onClick}
      hover={hover}
      disabled={disabled}
      type={type}
      is_active={is_active}
    >
      {text}
    </StyledButton>
  );
};
export default Button;
