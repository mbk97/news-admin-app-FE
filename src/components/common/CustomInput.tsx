import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import { IoEyeOutline } from "react-icons/io5";

interface IInputProps {
  type: string;
  placeholder?: string;
  value: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  labelStyle?: string;
  otpBtn?: true;
}

const CustomInput = ({
  type,
  placeholder,
  value,
  name,
  handleChange,
  label,
  className,
  labelStyle,
  disabled,
  handleBlur,
  loading,
}: IInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="relative">
      {label && (
        <label
          htmlFor={name}
          className={`mb-3 ${labelStyle} block text-[12px] font-medium`}
        >
          {label}
        </label>
      )}
      <input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        name={name}
        disabled={disabled}
        onChange={handleChange}
        onBlur={handleBlur}
        datatype=""
        className={`${className} w-[100%] text-[12px]  border-[#D1D5DB] rounded-[8px] h-[45px] outline-primary px-[20px] border ${
          disabled ? "cursor-not-allowed bg-[#F9FAFB]" : "bg-[#f9fafb]"
        }`}
      />
      {loading && (
        <div>
          <ImSpinner9 className="animate-spin text-primary absolute top-11 right-8" />
        </div>
      )}
      {type === "password" && (
        <div
          className="absolute right-7 cursor-pointer bottom-10 top-10"
          onClick={togglePasswordVisibility}
        >
          <>
            {showPassword ? (
              <FaRegEyeSlash size={25} />
            ) : (
              <IoEyeOutline size={25} />
            )}
          </>
        </div>
      )}
    </div>
  );
};

export default CustomInput;
