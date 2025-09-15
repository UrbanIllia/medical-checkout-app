import clsx from "clsx";
import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      name,
      id,
      placeholder,
      label,
      className,
      inputClassName,
      value,
      onChange,
      onBlur,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={clsx("flex flex-col gap-2 w-full relative z-8", className)}
      >
        {label && (
          <label
            htmlFor={id}
            className="absolute top-[-10px] left-3 font-normal text-[14px] leading-[1.28] text-[#aaa] transition z-10 bg-white px-2"
          >
            {label}
          </label>
        )}
        <input
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          className={clsx(
            "w-full px-6 h-[56px] font-dm-sans bg-transparent border border-[#0f0d23]/20 rounded-md",
            "font-normal text-base leading-[1.25]",
            "placeholder:font-normal placeholder:text-[16px] focus:border-blue-500 placeholder:leading-[1.125] placeholder:text-[#aaa]",
            error && "border-red-500 focus:ring-red-500",
            inputClassName
          )}
          {...props}
        />
        {error && (
          <span className="text-red-500 text-sm absolute bottom-[-20px] left-0">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
