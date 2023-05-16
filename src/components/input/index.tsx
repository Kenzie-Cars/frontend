import { ChangeEvent, useEffect, useState } from "react";
import {
  ITextarea,
  InputInterface,
  iSelectProps,
} from "../../interfaces/components";
import { StyledInput, StyledSelect, StyledTextarea } from "./styledInput";

export const Input = ({
  label,
  type,
  id,
  placeholder,
  disabled,
  register,
  value,
  defaultValue,
  setValue,
  readOnly,
  errors,
}: InputInterface) => {
  return (
    <StyledInput>
      <label htmlFor={id}> {label[0].toUpperCase() + label.slice(1)} </label>
      <input
        {...register(id)}
        value={value}
        id={id}
        type={String(type)}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        onChange={setValue}
        readOnly={readOnly}
      />
      <span>{errors}</span>
    </StyledInput>
  );
};

export const Textarea = ({
  length,
  label,
  row,
  placeHolder,
  id,
  register,
  value,
  defaultValue,
  setValue,
  errors,
  onChange,
}: ITextarea) => {
  const [maxLength, setLength] = useState(0);

  const setOnchange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLength(e.target.value.length);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  useEffect(() => {
    if (value?.length == 0) {
      setLength(0);
    }
  }, [value]);

  return (
    <StyledTextarea>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        rows={row}
        maxLength={length}
        placeholder={placeHolder}
        value={value}
        {...register(id)}
        defaultValue={defaultValue}
        onChange={(e) => {
          setOnchange(e);
        }}
      />
      <span>{errors}</span>
    </StyledTextarea>
  );
};

export const Select = ({
  label,
  id,
  register,
  errors,
  setSelect,
  optionValues,
  disabled,
  value,
  selectedValue,
  ...rest
}: iSelectProps) => {
  return (
    <StyledSelect>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        {...rest}
        {...register(id)}
        disabled={disabled}
        onChange={(e) => setSelect(e.target.value)}
        value={selectedValue}
      >
        <option key={label} value="">
          Selecione uma das opções
        </option>
        {optionValues.length > 0 ? (
          optionValues.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))
        ) : (
          <option key={label} value="">
            Selecione uma das opções
          </option>
        )}
      </select>
      <span>{errors}</span>
    </StyledSelect>
  );
};
