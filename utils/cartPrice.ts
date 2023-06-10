const vat = 0.2;
const shipping = 50;

export const cartSubtotal = (localCart: CartItem[]) => {
  let subtotal = 0;
  localCart.forEach((item: CartItem) => {
    subtotal += item.quantity * item.price;
  });
  return subtotal;
};

export const itemPriceTotal = (price: number, quantity: number) => {
  const total = price * quantity;
  return total;
};

export const calcVat = (subtotal: number) => {
  return subtotal * vat;
};

export const grandTotal = (subtotal: number) => {
  return subtotal + calcVat(subtotal) + shipping;
};
