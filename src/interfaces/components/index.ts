export interface IButton {
    size: '1' | '2' | '3' | '4' | '5'
    hover: string
    background: string
    color?: string
    border?: string
    text: string
    onClick: () => void
}

export interface IButtonStyled {
    size: '1' | '2' | '3' | '4' | '5'
    hover: string
    background: string
    color?: string
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
}