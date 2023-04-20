import { useState } from "react";
import { StyledInput, StyledTextarea, StyledSelect } from "./styledInput";
import { ISelect, ITextarea, InputInterface } from '../../interfaces/components'


export const Input = ({ label, type, id, register, errors, inputField }: InputInterface) => {
    return (
        <StyledInput className="input">
            <label htmlFor={id}> {label} </label>
            {/* <p>{errors.email ? (<p>{errors.email.message}</p>) : (<p>Teste</p>)}</p> */}
            <input id={id} type={String(type)}
                {...register(`${inputField}`)} />
            {errors && <span>{errors}</span>}

        </StyledInput>
    )
}



export const Textarea = ({ length, label, row, placeHolder, id }: ITextarea) => {

    const [maxLength, setLength] = useState(0)

    return (
        <StyledTextarea>
            <label htmlFor={id}>{label}</label>
            <textarea
                onChange={(event) => setLength(event.target.textLength)}
                id={id}
                rows={row}
                maxLength={length}
                placeholder={placeHolder}
            />
            <p>{maxLength}/{length}</p>
        </StyledTextarea>
    )
}


export const Select = ({ options, id, label }: ISelect) => {

    const [option, setOption] = useState<string>('')
    const [dropdown, setDropdown] = useState<string>('dropdownOff')

    const openOption = () => {
        if (dropdown == 'dropdownOff') {
            setDropdown('dropdownOn')
        } else {
            setDropdown('dropdownOff')
        }
    }

    const selectValue = (value: string) => {
        setOption(value)
        setDropdown('dropdownOff')
    }

    return (
        <StyledSelect>
            <label htmlFor={id}>{label}</label>
            <div id={id} className={`select ${dropdown}`}>
                <input onClick={() => openOption()} type="text" placeholder="Select an option" value={option} />
                <div className={`options ${dropdown}`}>
                    <div onClick={() => selectValue('')} id={''}>None</div>
                    {
                        options.map(value => {
                            return <div onClick={() => selectValue(value)} id={value.replaceAll(' ', '_').toLowerCase()}>{value}</div>
                        })
                    }
                </div>
            </div>
        </StyledSelect>
    )
}

