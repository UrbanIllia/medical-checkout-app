import clsx from "clsx";
import Input from "./Input";
import { t } from "../helpers/helpers";

const styleh3 = "font-medium text-black text-[24px]";

const ShippingDetails = ({ formik }) => {
  return (
    <div className="mb-8">
      <h3 className={clsx(styleh3, "mb-[28px]")}>{t("Shipping Details")}</h3>
      <div className="flex flex-col gap-[38px]">
        <Input
          name="address"
          id="4"
          placeholder={t("Street Address")}
          label={t("Street Address")}
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && formik.errors.address}
        />
        <div className="flex flex-row gap-6">
          <Input
            name="city"
            id="5"
            placeholder={t("City")}
            label={t("City")}
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.city && formik.errors.city}
          />
          <Input
            name="zip"
            id="6"
            placeholder={t("Zip Code")}
            label={t("Zip Code")}
            value={formik.values.zip}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.zip && formik.errors.zip}
          />
        </div>
        <Input
          name="country"
          id="7"
          placeholder={t("Country")}
          label={t("Country")}
          value={formik.values.country}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.country && formik.errors.country}
        />
      </div>
    </div>
  );
};

export default ShippingDetails;
