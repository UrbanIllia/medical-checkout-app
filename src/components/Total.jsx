import clsx from "clsx";
import React from "react";

const style = "font-normal text-xl leading-[0.9] text-black";
const stylerow = "flex flex-row justify-between items-center pb-4 pt-8";

const Total = () => {
  return (
    <div className="mb-[38px]">
      <div className={clsx(stylerow, "border-b border-[#ddd]")}>
        <span className={clsx(style)}>Sub total</span>
        <span className={clsx(style)}>$240</span>
      </div>
      <div className={clsx(stylerow, "border-b border-[#ddd]")}>
        <span className={clsx(style)}>Shipping Fee</span>
        <span className={clsx(style)}>$40</span>
      </div>
      <div className={clsx(stylerow, "pt-14")}>
        <span className={clsx(style)}>Total</span>
        <span className="font-medium text-2xl leading-[0.75] text-black">
          $280
        </span>
      </div>
    </div>
  );
};

export default Total;
