import React, { ChangeEventHandler, MouseEventHandler } from "react";

interface FormFieldProps {
  labelName: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  isSurpriseMe?: boolean;
  handleSurpriseMe?: MouseEventHandler<HTMLButtonElement>;
}

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}: FormFieldProps) => {
  return (
    <div>
      <div className={"mb-2 flex items-center gap-2"}>
        <label
          htmlFor={name}
          className={"block text-sm font-medium text-gray-900"}
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type={"button"}
            onClick={handleSurpriseMe}
            className={
              "rounded-[5px] bg-[#ececf1] py-1 px-2 text-xs font-semibold text-black"
            }
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className={
          "block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 outline-none focus:border-[#4649ff] focus:ring-[#4649ff]"
        }
      />
    </div>
  );
};

export default FormField;
