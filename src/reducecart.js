const reducecart = (cart, action) => {
  if (action.type === "ADD") {
    const currentItem = cart.items.find((item) => item.id === action.payload.id);
    if (currentItem) {
      return { ...cart };
    }
    return { ...cart, items: [...cart.items, action.payload] };
  }

  if (action.type === "REMOVE") {
    return { ...cart, items: cart.items.filter((item) => item.id !== action.payload) };
  }

  if (action.type === "CLEAR_CART") {
    return { ...cart, items: [] };
  }

  if (action.type === "INCREASE") {
    return {
      ...cart,
      items: cart.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      }),
    };
  }

  if (action.type === "DECREASE") {
    return {
      ...cart,
      items: cart.items
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount > 0),
    };
  }

  if (action.type === "GET_TOTALS") {
    let { total, quantity } = cart.items.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.quantity += amount;

        return cartTotal;
      },
      { total: 0, quantity: 0 }
    );

    return { ...cart, total, quantity };
  }
};

export default reducecart;
