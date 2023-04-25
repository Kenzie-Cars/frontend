import { useState } from "react";
import { StyledInput, StyledTextarea, StyledSelect } from "./styledInput";
import { ITextarea, InputInterface } from "../../interfaces/components";

export const Input = ({
  label,
  type,
  id,
  placeholder,
  disabled,
  register,
  value,
  errors,
}: InputInterface) => {
  return (
    <StyledInput>
      <label htmlFor={id}> {label} </label>
      <input
        {...register(id)}
        value={value}
        id={id}
        type={String(type)}
        placeholder={placeholder}
        disabled={disabled}
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
  errors,
}: ITextarea) => {
  const [maxLength, setLength] = useState(0);

  return (
    <StyledTextarea>
      <label htmlFor={id}>{label}</label>
      <textarea
        onChange={(event) => setLength(event.target.textLength)}
        id={id}
        rows={row}
        maxLength={length}
        placeholder={placeHolder}
        {...register(id)}
      />
      <p>
        {maxLength}/{length}
      </p>
    </StyledTextarea>
  );
};

// export const Select = ({ options, id, label }: ISelect) => {
//   const [option, setOption] = useState<string>("");
//   const [dropdown, setDropdown] = useState<string>("dropdownOff");

//   const openOption = () => {
//     if (dropdown == "dropdownOff") {
//       setDropdown("dropdownOn");
//     } else {
//       setDropdown("dropdownOff");
//     }
//   };

//   const selectValue = (value: string) => {
//     setOption(value);
//     setDropdown("dropdownOff");
//   };

//   return (
//     <StyledSelect>
//       <label htmlFor={id}>{label}</label>
//       <div id={id} className={`select ${dropdown}`}>
//         <input
//           onClick={() => openOption()}
//           type="text"
//           placeholder="Select an option"
//           value={option}
//         />
//         <div className={`options ${dropdown}`}>
//           <div onClick={() => selectValue("")} id={""}>
//             None
//           </div>
//           {options.map((value) => {
//             return (
//               <div
//                 onClick={() => selectValue(value)}
//                 id={value.replaceAll(" ", "_").toLowerCase()}
//               >
//                 {value}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </StyledSelect>
//   );
// };

// import React, { ReactNode } from "react";

// interface iSelectProps {
//   children: ReactNode;
//   id: string;
//   label: string;
//   register: Function;
//   errors?: string | undefined;
//   setSelect: React.Dispatch<SetStateAction<string>>;
//  arrayValue: string[];

// }

interface iSelectProps {
  id: string;
  label: string;
  register: Function;
  errors?: string;
  setSelect?: any;
  optionValues: string[];
  disabled?: boolean;
  value?: string;
}

export const Select = ({
  label,
  id,
  register,
  errors,
  setSelect,
  optionValues,
  disabled,
  value,
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
