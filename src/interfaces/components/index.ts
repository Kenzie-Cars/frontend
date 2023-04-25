import { FieldErrors, UseFormRegister } from "react-hook-form"

export interface IButton {
    size: '1' | '2' | '3' | '4' | '5'
    hover: string
    background: string
    text: string
    color?: string
    border?: string
    onClick?: any
}

export interface IButtonStyled {
    size: '1' | '2' | '3' | '4' | '5'
    hover: string
    background: string
    color?: string,
    border?: string
}

export interface InputInterface {
    label: string
    type: string
    id: string
    placeholder?: string
    register: any
    error: any
}


export interface ITextarea {
    length: number
    label: string
    row: number
    placeHolder: string
    id: string
    register: any
}

export interface ISelect {
    options: Array<string>
    id: string
    label: string
    register: UseFormRegister<any>
    errors: string | undefined
    inputField: string
}

export interface IUserLogin {
    email: string
    password: string
}
