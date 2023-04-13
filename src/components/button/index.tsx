import StyledButton from './styledButton'

export interface IButton {
    size: '1' | '2' | '3' | '4' | '5'
    hover: string
    background: string
    text: string
}

const Button = ({ size, background, hover, text }: IButton) => {
    return (
        <StyledButton
            size={size}
            background={background}
            hover={hover}
        >
            {text}
        </StyledButton>

    )
}

export default Button