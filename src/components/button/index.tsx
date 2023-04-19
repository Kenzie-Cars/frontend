import StyledButton from './styledButton'
import { IButton } from '../../interfaces/components'

const Button = ({ size, background, hover, text, color, border }: IButton) => {
    return (
        <StyledButton
            size={size}
            background={background}
            hover={hover}
            color={color}
            border={border}
        >
            {text}
        </StyledButton>

    )
}

export default Button