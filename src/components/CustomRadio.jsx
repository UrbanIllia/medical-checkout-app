import clsx from "clsx";
import { forwardRef } from "react";

const CustomRadio = forwardRef(
  ({ name, id, label, className, value, onChange, onBlur, ...props }, ref) => {
    return (
      <div
        className={clsx(
          "flex items-center w-full h-[56px] pl-3 pr-[18px] bg-transparent border border-[#0f0d23]/20 rounded-md",
          "shadow-inset-white",
          className
        )}
      >
        <style jsx>{`
          .peer:checked ~ .radio-container .radio-inner {
            background-color: #5a9bfe;
          }
        `}</style>
        <label
          htmlFor={id}
          className="flex items-center gap-3 w-full cursor-pointer"
        >
          <div
            className={clsx(
              "w-8 h-5 rounded-[10px] bg-gradient-to-br",
              "from-[#5a9bfe] to-transparent"
            )}
            style={{
              backgroundImage:
                "linear-gradient(138deg, #5a9bfe 0%, rgba(90, 155, 254, 0) 100%)",
            }}
          />
          <span className="font-normal text-base leading-[1.125] text-black transition flex-1">
            {label}
          </span>
          <input
            type="radio"
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            className="peer hidden"
            {...props}
          />
          <div
            className={clsx(
              "radio-container w-5 h-5 rounded-full border border-[#ccc] bg-transparent flex justify-center items-center",
              "peer-checked:border-[#5a9bfe] transition-colors duration-200"
            )}
          >
            <div
              className={clsx(
                "radio-inner w-[10px] h-[10px] rounded-full bg-transparent transition-colors duration-200"
              )}
            />
          </div>
        </label>
      </div>
    );
  }
);

CustomRadio.displayName = "CustomRadio";

export default CustomRadio;
