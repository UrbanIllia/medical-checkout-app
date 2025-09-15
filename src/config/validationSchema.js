import * as Yup from "yup";

export const checkoutSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name too short")
    .max(50, "Name too long")
    .matches(/^[a-zA-Z\s'-]+$/, "Invalid name format")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .max(100, "Email too long")
    .required("Email is required"),
  phone: Yup.string()
    .min(6, "Phone too short")
    .max(20, "Phone too long")
    .matches(/^\+?[\d\s-]{6,20}$/, "Invalid phone format")
    .required("Phone is required"),
  address: Yup.string()
    .min(5, "Address too short")
    .max(100, "Address too long")
    .matches(/^[a-zA-Z0-9\s,.-]+$/, "Invalid address format")
    .required("Address is required"),
  city: Yup.string()
    .min(2, "City too short")
    .max(50, "City too long")
    .matches(/^[a-zA-Z\s-]+$/, "Invalid city format")
    .required("City is required"),
  zip: Yup.string()
    .min(3, "Zip too short")
    .max(10, "Zip too long")
    .matches(/^[a-zA-Z0-9\s-]+$/, "Invalid zip format")
    .required("Zip is required"),
  country: Yup.string()
    .min(2, "Country too short")
    .max(50, "Country too long")
    .matches(/^[a-zA-Z\s-]+$/, "Invalid country format")
    .required("Country is required"),
  shippingMethod: Yup.string()
    .oneOf(
      ["Odeon Express", "Cipay Jet", "Gorgom Express", "Eunioa Fast"],
      "Invalid shipping method"
    )
    .required("Shipping method required"),
  paymentMethod: Yup.string()
    .oneOf(["Credit Card", "Paypal"], "Invalid payment method")
    .required("Payment method required"),
  promocode: Yup.string()
    .matches(/^[A-Z0-9]{3,10}$/, "Invalid promo code")
    .optional(),
});
