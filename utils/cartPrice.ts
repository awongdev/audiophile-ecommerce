interface ItemT {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const vat = 0.2;
const shipping = 50;

export const cartSubtotal = () => {
  const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
  let subtotal = 0;
  localCart.map((item: ItemT) => {
    subtotal += item.quantity * item.price;
  });
  return subtotal;
};

export const itemPriceTotal = (price: number, quantity: number) => {
  const total = price * quantity;
  return total;
};

export const calcVat = () => {
  const subtotal = cartSubtotal();
  return subtotal * vat;
};

export const grandTotal = () => {
  return cartSubtotal() + calcVat() + shipping;
};
