import StyledButton from './styledButton'
import { IButton } from '../../interfaces/components'

const Button = ({ size, background, hover, text, color, border, onClick }: IButton) => {
    return (
        <StyledButton
            size={size}
            background={background}
            hover={hover}
            color={color}
            border={border}
            onClick={onClick}
        >
            {text}
        </StyledButton>

    )
}

export default Button