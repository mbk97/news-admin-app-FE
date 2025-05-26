import React from "react";

interface ISelectProps {
  options: any[];
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

        {name === "Role" && (
          <>
            {options?.map((item: any) => {
              return (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              );
            })}
          </>
        )}
        {name === "category" && (
          <>
            {options?.map((item: any) => {
              return (
                <option value={item.categoryName} key={item.id}>
                  {item.categoryName}
                </option>
              );
            })}
          </>
        )}
      </select>
    </div>
  );
};

export default CustomSelect;
