export const inputs = {
  billing: [
    {
      labelFor: 'name',
      labelName: 'Name',
      type: 'text',
      placeholder: 'Alexei Ward',
      id: 1,
    },
    {
      labelFor: 'email',
      labelName: 'Email Address',
      type: 'email',
      placeholder: 'alexei@mail.com',
      id: 2,
    },
    {
      labelFor: 'phone',
      labelName: 'Phone Number',
      type: 'tel',
      placeholder: '+1 202-556-0136',
      id: 3,
    },
  ],
  shipping: [
    {
      labelFor: 'address',
      labelName: 'Your Address',
      type: 'text',
      placeholder: '1137 Williams Avenue',
      id: 1,
    },
    {
      labelFor: 'zipcode',
      labelName: 'ZIP Code',
      type: 'number',
      placeholder: '10001',
      id: 2,
    },
    {
      labelFor: 'city',
      labelName: 'City',
      type: 'text',
      placeholder: 'New York',
      id: 3,
    },
    {
      labelFor: 'country',
      labelName: 'Country',
      type: 'text',
      placeholder: 'United States',
      id: 4,
    },
  ],
  paymentMethod: [
    {
      labelFor: 'emoney',
      labelName: 'e-Money',
      type: 'radio',
      id: 1,
      inputId: 'emoney',
      name: 'payment',
      value: 'emoney',
    },
    {
      labelFor: 'cash',
      labelName: 'Cash on Delivery',
      type: 'radio',
      id: 2,
      inputId: 'cash',
      name: 'payment',
      value: 'cash',
    },
  ],
  paymentDetails: [
    {
      label: 'e-Money Number',
      type: 'text',
      placeholder: '238521993',
      id: 1,
    },
    { label: 'e-Money PIN', type: 'number', placeholder: '6891', id: 2 },
  ],
};
