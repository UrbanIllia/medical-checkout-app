import clsx from "clsx";
import Input from "./Input";

const styleh3 = "font-medium text-black text-[24px]";

const ShippingDetails = ({ formik }) => {
  return (
    <div className="mb-8">
      <h3 className={clsx(styleh3, "mb-[28px]")}>Shipping Details</h3>
      <div className="flex flex-col gap-[38px]">
        <Input
          name="address"
          id="4"
          placeholder="Street Address"
          label="Street Address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && formik.errors.address}
        />
        <div className="flex flex-row gap-6">
          <Input
            name="city"
            id="5"
            placeholder="City"
            label="City"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.city && formik.errors.city}
          />
          <Input
            name="zip"
            id="6"
            placeholder="Zip Code"
            label="Zip Code"
            value={formik.values.zip}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.zip && formik.errors.zip}
          />
        </div>
        <Input
          name="country"
          id="7"
          placeholder="Country"
          label="Country"
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
