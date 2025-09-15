import CustomRadio from "./CustomRadio";

const PaymentMethod = ({ onChange, onBlur, error }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        <CustomRadio
          label="Credit Card"
          id="12"
          name="paymentMethod"
          value="Credit Card"
          onChange={onChange}
          onBlur={onBlur}
        />
        <CustomRadio
          label="Paypal"
          id="13"
          name="paymentMethod"
          value="Paypal"
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

export default PaymentMethod;
