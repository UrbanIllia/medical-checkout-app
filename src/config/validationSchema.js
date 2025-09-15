import * as Yup from "yup";

export const checkoutSchema = Yup.object({
  name: Yup.string()
    .min(2, "Full Name must be at least 2 characters")
    .max(50, "Full Name must be at most 50 characters")
    .matches(
      /^[a-zA-Z\s'-]+$/,
      "Full Name can only contain letters, spaces, hyphens, and apostrophes"
    )
    .required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .max(100, "Email Address must be at most 100 characters")
    .required("Email Address is required"),
  phone: Yup.string()
    .min(6, "Phone number must be at least 6 characters")
    .max(20, "Phone number must be at most 20 characters")
    .matches(
      /^\+?[\d\s-]{6,20}$/,
      "Phone number can only contain digits, spaces, hyphens, and an optional leading +"
    )
    .required("Phone number is required"),
  address: Yup.string()
    .min(5, "Street Address must be at least 5 characters")
    .max(100, "Street Address must be at most 100 characters")
    .matches(
      /^[a-zA-Z0-9\s,.-]+$/,
      "Street Address can only contain letters, numbers, spaces, commas, periods, and hyphens"
    )
    .required("Street Address is required"),
  city: Yup.string()
    .min(2, "City must be at least 2 characters")
    .max(50, "City must be at most 50 characters")
    .matches(
      /^[a-zA-Z\s-]+$/,
      "City can only contain letters, spaces, and hyphens"
    )
    .required("City is required"),
  zip: Yup.string()
    .min(3, "Zip Code must be at least 3 characters")
    .max(10, "Zip Code must be at most 10 characters")
    .matches(
      /^[a-zA-Z0-9\s-]+$/,
      "Zip Code can only contain letters, numbers, spaces, and hyphens"
    )
    .required("Zip Code is required"),
  country: Yup.string()
    .min(2, "Country must be at least 2 characters")
    .max(50, "Country must be at most 50 characters")
    .matches(
      /^[a-zA-Z\s-]+$/,
      "Country can only contain letters, spaces, and hyphens"
    )
    .required("Country is required"),
  shippingMethod: Yup.string()
    .oneOf(
      ["Odeon Express", "Cipay Jet", "Gorgom Express", "Eunioa Fast"],
      "Please select a valid shipping method"
    )
    .required("Shipping method is required"),
  paymentMethod: Yup.string()
    .oneOf(["Credit Card", "Paypal"], "Please select a valid payment method")
    .required("Payment method is required"),
  promocode: Yup.string()
    .matches(
      /^[A-Z0-9]{3,10}$/,
      "Promo code must be 3-10 alphanumeric characters"
    )
    .optional(),
});
