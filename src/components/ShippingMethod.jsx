import React from "react";
import CustomRadio from "./CustomRadio";

const ShippingMethod = ({ onChange, onBlur, error }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        <CustomRadio
          label="Odeon Express"
          id="8"
          name="shippingMethod"
          value="Odeon Express"
          onChange={onChange}
          onBlur={onBlur}
        />
        <CustomRadio
          label="Cipay Jet"
          id="9"
          name="shippingMethod"
          value="Cipay Jet"
          onChange={onChange}
          onBlur={onBlur}
        />
        <CustomRadio
          label="Gorgom Express"
          id="10"
          name="shippingMethod"
          value="Gorgom Express"
          onChange={onChange}
          onBlur={onBlur}
        />
        <CustomRadio
          label="Eunioa Fast"
          id="11"
          name="shippingMethod"
          value="Eunioa Fast"
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      {error && (
        <span className="text-red-500 text-sm absolute bottom-[-20px] left-0">
          {error}
        </span>
      )}
    </div>
  );
};

export default ShippingMethod;
