export const t = (key) => key;

export const updateCartTotal = (dispatch, getState, { changeTotalValue }) => {
  const { cart } = getState();
  const cartItems = cart.cartItems || [];
  const subTotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const shippingFee = subTotal === 0 ? 0 : 40;
  const total = subTotal + shippingFee;

  dispatch(
    changeTotalValue({
      subTotal,
      shippingFee,
      total,
    })
  );
};
