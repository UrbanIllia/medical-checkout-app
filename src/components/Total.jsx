import clsx from "clsx";
import { t } from "../helpers/helpers";
import { useSelector } from "react-redux";

const style = "font-normal text-xl leading-[0.9] text-black";
const stylerow = "flex flex-row justify-between items-center pb-4 pt-8";

const Total = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subTotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const shippingFee = subTotal === 0 ? 0 : 40;
  const totalPrice = subTotal + shippingFee;
  return (
    <div className="mb-[38px]">
      <div className={clsx(stylerow, "border-b border-[#ddd]")}>
        <span className={clsx(style)}>{t("Sub total")}</span>
        <span className={clsx(style)}>${subTotal}</span>
      </div>
      <div className={clsx(stylerow, "border-b border-[#ddd]")}>
        <span className={clsx(style)}>{t("Shipping Fee")}</span>
        <span className={clsx(style)}>${shippingFee}</span>
      </div>
      <div className={clsx(stylerow, "pt-14")}>
        <span className={clsx(style)}>{t("Total")}</span>
        <span className="font-medium text-2xl leading-[0.75] text-black">
          ${totalPrice}
        </span>
      </div>
    </div>
  );
};

export default Total;
