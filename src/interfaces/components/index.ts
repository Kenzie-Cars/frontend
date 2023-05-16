import { ImagesInterface } from "../advertisement";

export interface IButton {
  size: "1" | "2" | "3" | "4" | "5";
  hover: string;
  background: string;
  text: string;
  color?: string;
  border?: string;
}

export interface IButtonStyled {
  size: "1" | "2" | "3" | "4" | "5" | "6" | "7";
  hover: string;
  background: string;
  color?: string;
  border?: string;
  padding?: string;
  is_active?: string;
}

export interface OnChangeFunc {
  (e: React.FormEvent<HTMLInputElement>): void;
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
  setValue?: OnChangeFunc;
  readOnly?: boolean;
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
  onChange?: any;
  setValue?: any;
}

export interface iSelectProps {
  id: string;
  label: string;
  register: Function;
  errors?: string;
  setSelect?: any;
  optionValues: string[];
  disabled?: boolean;
  value?: string;
  selectedValue?: React.ComponentState;
}

export interface IProductCard {
  id: string;
  cover_img: string;
  user: {
    name: string;
    id: string;
    description: string;
  };
  model: string;
  description: string;
  year: number;
  km: number;
  brand: string;
  price: number;
  is_goodSale: boolean;
  is_active: boolean;
  images: ImagesInterface[];
  userColor?: string;
}
