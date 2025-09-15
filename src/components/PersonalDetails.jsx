import clsx from "clsx";
import Input from "./Input";

const styleh3 = "font-medium text-black text-[24px]";

const PersonalDetails = ({ formik }) => {
  return (
    <div>
      <h3 className={clsx(styleh3, "mb-[28px]")}>Personal Details</h3>
      <div className="flex flex-col gap-[38px] mb-8">
        <Input
          name="name"
          id="1"
          placeholder="Full Name"
          label="Full Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && formik.errors.name}
        />
        <Input
          name="email"
          id="2"
          placeholder="Email Address"
          label="Email Address"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email}
        />
        <Input
          name="phone"
          id="3"
          placeholder="Phone number"
          label="Phone number"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && formik.errors.phone}
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
