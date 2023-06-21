interface Product {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: [
    {
      quantity: number;
      item: string;
    },
  ];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: [
    {
      slug: string;
      name: string;
      image: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
    },
  ];
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  slug: string;
  img: string;
}

interface Input {
  inputKey: keyof Validate;
  name: string;
  label: string;
  type: string;
  id: number;
  inputMode?: 'numeric' | 'text' | 'email';
  placeholder?: string;
  group?: string;
  value?: string;
}

interface Validate {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipcode: string;
  city: string;
  country: string;
  paymentMethod: string;
  emoneyNumber: string;
  emoneyPin: string;
}
