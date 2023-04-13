export interface IButton {
    size: '1' | '2' | '3' | '4' | '5'
    hover: string
    background: string
    text: string
}

export interface IButtonStyled {
    size: '1' | '2' | '3' | '4' | '5'
    hover: string
    background: string
}

export interface InputInterface {
    label: string
    type: string
    id: string
}

export interface ITextarea {
    length: number
    label: string
    row: number
    placeHolder: string
    id: string
}

export interface ISelect {
    options: Array<string>
    id: string
}