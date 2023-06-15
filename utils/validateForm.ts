import * as yup from 'yup';

const phoneRegex = /^(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
const addressRegex = /^\d+\s+[\w\s#]+$/;
const cityRegex = /^[A-Za-z\s]+$/;
const numberRegex = /^[0-9]*$/;

export const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(phoneRegex, 'Invalid number format'),
  address: yup
    .string()
    .required('Address is required')
    .matches(addressRegex, 'Invalid address format'),
  zipcode: yup
    .string()
    .matches(numberRegex, 'Must be a number')
    .required('Zip code is required')
    .min(5, 'Must be 5 digits')
    .max(5, 'Must be 5 digits'),
  city: yup
    .string()
    .required('City is required')
    .matches(cityRegex, 'Invalid city'),
  country: yup
    .string()
    .required('Country is required')
    .matches(cityRegex, 'Invalid country'),
  emoneyNumber: yup.string().when('paymentMethod', {
    is: (value: string) => value === 'emoney',
    then: (schema) =>
      schema.min(9, 'Must be 9 digits').max(9, 'Must be 9 digits'),
    otherwise: (schema) => schema.optional(),
  }),
  emoneyPin: yup.string().when('paymentMethod', {
    is: (value: string) => value === 'emoney',
    then: (schema) =>
      schema.min(4, 'Must be 4 digits').max(4, 'Must be 4 digits'),
    otherwise: (schema) => schema.optional(),
  }),
  paymentMethod: yup.string().required(),
});
