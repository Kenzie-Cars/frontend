import StyledButton from "./styledButton";

// export interface IButton {
//   size: "1" | "2" | "3" | "4" | "5";
//   type?: string;
//   hover: string;
//   background: string;
//   text: string;
//   color: string;
//   onClick: Function;
// }

export interface IButton {
  size: "1" | "2" | "3" | "4" | "5";
  hover: string;
  background: string;
  color: string;
  // border: string;
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  value?: any;
}

const Button = ({
  size,
  background,
  hover,
  text,
  color,
  onClick,
  disabled,
  type,
  value,
}: IButton) => {
  return (
    <StyledButton
      size={size}
      background={background}
      color={color}
      // border={border}
      value={value}
      onClick={onClick}
      hover={hover}
      disabled={disabled}
      type={type}
    >
      {text}
    </StyledButton>
  );
};

// const Button = ({ size, background, hover, text, color }: IButton) => {
//   return (
//     <StyledButton
//       size={size}
//       background={background}
//       hover={hover}
//       color={color}
//     >
//       {text}
//     </StyledButton>
//   );
// };

export default Button;
