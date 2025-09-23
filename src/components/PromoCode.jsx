import clsx from "clsx";
import Input from "./Input";
import { toast } from "react-toastify";
import { t } from "../helpers/helpers";

const PromoCode = ({ formik }) => {
  const handleApplyPromo = () => {
    if (!formik.values.promocode) {
      toast.error("Promo code is empty");
    }
    if (formik.values.promocode) {
      formik.setFieldTouched("promocode", true);
      toast.info(`Promo code "${formik.values.promocode}" applied!`);
    }
  };

  return (
    <div className="mt-9 mb-[40px]">
      <h3 className="mb-[24px] font-medium text-base leading-[1.125] text-black">
        {t("Apply Promocode")}
      </h3>
      <div className="relative">
        <Input
          name="promocode"
          id="14"
          placeholder="Promotion or Discount code"
          value={formik.values.promocode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.promocode && formik.errors.promocode}
          inputClassName="h-[60px] rounded-[12px] placeholder:text-sm md:placeholder:text-[16px] lg:placeholder:text-[14px] xl:placeholder:text-[16px]"
        />
        <button
          type="button"
          onClick={handleApplyPromo}
          className={clsx(
            "absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-base text-white rounded-[10px] px-[14px] md:px-[16px] xl:px-[22px] py-[13px] bg-[#5a9bfe] hover:bg-[#2056a7] transition leading-[1.125]"
          )}
        >
          {t("Apply Code")}
        </button>
      </div>
    </div>
  );
};

export default PromoCode;
