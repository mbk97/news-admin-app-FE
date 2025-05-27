import React from "react";
import { ICategory, IRoles } from "../../types";

interface ISelectProps {
  options: IRoles[] | ICategory[];
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  className?: string;
}

const CustomSelect = ({
  label,
  options,
  name,
  handleChange,
  className,
  value,
}: ISelectProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-3 block text-[12px] leading-[16.94px] font-medium"
      >
        {label}
      </label>
      <select
        className={`h-[45px] py-[12px] px-[16px] bg-[#f9fafb] rounded-[8px] text-[12px] border w-full outline-primary cursor-pointer ${className} border-[#D1D5DB]`}
        onChange={handleChange}
        value={value}
        name={name}
      >
        <option value="" disabled>
          Select a value
        </option>

        {name === "roleName" &&
          (options as IRoles[]).map((item) => (
            <option value={item.roleName} key={item._id}>
              {item.roleName}
            </option>
          ))}

        {name === "category" &&
          (options as ICategory[]).map((item) => (
            <option value={item.categoryName} key={item._id}>
              {item.categoryName}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CustomSelect;
