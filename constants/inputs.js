export const inputs = {
  billing: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Alexei Ward',
      id: 1,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'alexei@mail.com',
      id: 2,
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: '+1 202-556-0136',
      id: 3,
    },
  ],
  shipping: [
    {
      name: 'address',
      label: 'Your Address',
      type: 'text',
      placeholder: '1137 Williams Avenue',
      id: 1,
    },
    {
      name: 'zipcode',
      label: 'ZIP Code',
      type: 'number',
      placeholder: '10001',
      id: 2,
    },
    {
      name: 'city',
      label: 'City',
      type: 'text',
      placeholder: 'New York',
      id: 3,
    },
    {
      name: 'country',
      label: 'Country',
      type: 'text',
      placeholder: 'United States',
      id: 4,
    },
  ],
  paymentMethod: [
    {
      name: 'emoney',
      label: 'e-Money',
      type: 'radio',
      id: 1,
      group: 'payment',
      value: 'emoney',
    },
    {
      name: 'cash',
      label: 'Cash on Delivery',
      type: 'radio',
      id: 2,
      group: 'payment',
      value: 'cash',
    },
  ],
  paymentDetails: [
    {
      name: 'emoneyNumber',
      label: 'e-Money Number',
      type: 'number',
      placeholder: '238521993',
      id: 1,
    },
    {
      name: 'emoneyPin',
      label: 'e-Money PIN',
      type: 'number',
      placeholder: '6891',
      id: 2,
    },
  ],
};
