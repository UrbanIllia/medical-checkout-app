import clsx from "clsx";
import { useFormik } from "formik";
import PersonalDetails from "../components/PersonalDetails";
import ShippingDetails from "../components/ShippingDetails";
import ShippingMethod from "../components/ShippingMethod";
import PaymentMethod from "../components/PaymentMethod";
import PromoCode from "../components/PromoCode";
import CardList from "../components/CardList";
import { checkoutSchema } from "../config/validationSchema";
// import { toast } from "react-toastify";
import ShoppingCards from "../components/ShoppingCards";
import Total from "../components/Total";
import { t } from "../helpers/helpers";
import { useDispatch, useSelector } from "react-redux";
import { checkoutOrder } from "../redux/checkoutOp";
import { clearCart } from "../redux/cartSlice";
import { persistor } from "../redux/store";

const styleh3 = "font-medium text-black text-[24px]";

const Checkout = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.checkout);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zip: "",
      country: "",
      shippingMethod: "",
      paymentMethod: "",
      promocode: "",
    },
    validationSchema: checkoutSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(checkoutOrder(values));
      resetForm();
      dispatch(clearCart());
      // localStorage.removeItem("cartItems");
      persistor.purge();
      // toast.success("Checkout successful!");
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col mb-[94px]">
      <h2
        className={clsx(
          "pt-[38px] pb-[34px] font-medium text-black text-[40px] text-center",
          "md:pt-[48px] xl:pb-[44px]",
          "lg:pt-[68px] xl:pb-[84px]",
          "xl:pt-[88px] xl:pb-[94px]"
        )}
      >
        {t("Checkout")}
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div
          className={clsx(
            "grid grid-cols-1 gap-[20px] mb-[40px]",
            "lg:grid-cols-[345px_369px] lg:gap-[76px] lg:mb-0",
            "xl:grid-cols-[515px_589px] xl:gap-[96px]"
          )}
        >
          <div className="mb-0 lg:mb-[120px]">
            <PersonalDetails formik={formik} />
            <ShippingDetails formik={formik} />
            <div className="mb-8 relative">
              <h4 className="font-medium font-dm-sans text-base leading-[1.125] text-black mb-[34px]">
                {t("Shipping Method")}
              </h4>
              <ShippingMethod
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.shippingMethod && formik.errors.shippingMethod
                }
              />
            </div>
            <div className="mb-8 relative">
              <h3 className={clsx(styleh3, "mb-6")}>{t("Payment Method")}</h3>
              <PaymentMethod
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.paymentMethod && formik.errors.paymentMethod
                }
              />
            </div>
          </div>
          <div className="w-full">
            <h3 className={clsx(styleh3, "mb-[23px]")}>{t("Order Summary")}</h3>
            <ShoppingCards
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <PromoCode formik={formik} />
            <Total />
            <button
              type="submit"
              disabled={status === "succeeded"}
              className={clsx(
                "font-medium text-xl leading-[0.9] text-white rounded-2xl w-full py-[31px] bg-[#5a9bfe] hover:bg-[#2056a7] transition disabled:bg-gray-600",
                status === "loading" && "bg-green-300"
              )}
            >
              {status === "loading" ? t("Submitting") : t("Checkout")}
            </button>
          </div>
        </div>
      </form>
      <div>
        <CardList />
      </div>
    </div>
  );
};

export default Checkout;
