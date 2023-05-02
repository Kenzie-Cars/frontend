export interface IButton {
  size: "1" | "2" | "3" | "4" | "5";
  hover: string;
  background: string;
  text: string;
  color?: string;
  border?: string;
}

export interface IButtonStyled {
  size: "1" | "2" | "3" | "4" | "5";
  hover: string;
  background: string;
  color?: string;
  border?: string;
  padding?: string;
}

export interface InputInterface {
  label: string;
  type: string;
  id: string;
  placeholder?: string;
  disabled?: boolean;
  register: Function;
  errors?: string | undefined;
  value?: number | string;
  defaultValue?: number | string;
}

export interface ITextarea {
  length: number;
  label: string;
  row: number;
  placeHolder?: string;
  id: string;
  register: Function;
  errors?: string | undefined;
  value?: string;
  defaultValue?: string;
}

export interface ISelect {
  options: Array<string>;
  id: string;
  label: string;
  errors?: string | undefined;
  register: Function;
}
