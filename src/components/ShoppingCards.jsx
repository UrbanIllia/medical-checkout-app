import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/cartSlice";
import { RiDeleteBin5Line } from "react-icons/ri";

const ShoppingCards = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <ul className="flex flex-col p-6 border border-[#0f0d23]/20 rounded-[15px] w-full">
      {cartItems.length === 0 && (
        <p className="text-center font-bold text-xl">The cart is empty</p>
      )}
      {cartItems.map((item) => (
        <li
          key={item.id}
          className="flex flex-row py-[16px] w-full gap-4 border-b border-[#ddd] last:border-b-0 first:pt-0 last:pb-0"
        >
          <div className="w-[56px] h-[56px] min-w-[56px] flex-shrink-0 bg-[#c4c4c4] rounded-[10px]"></div>
          <div className="flex flex-row justify-between items-center w-full relative">
            <div className="flex flex-col">
              <p className="font-normal text-base leading-[1.125] text-black mb-2">
                {item.name}
              </p>
              <p className="font-normal text-sm leading-[1.128] text-[#aaa]">
                {item.description}
              </p>
            </div>
            <p className="font-medium text-base leading-[1.125] text-black self-end">
              ${item.price}
            </p>
            <button
              onClick={() => dispatch(removeItem(item.id))}
              className="absolute top-0 right-0 rounded hover:bg-red-200 transition p-1"
            >
              <RiDeleteBin5Line size={20} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ShoppingCards;
