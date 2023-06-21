'use client';
import CashOnDeliveryIcon from '../../public/assets/checkout/icon-cash-on-delivery.svg';
import { inputs } from '../../constants/inputs';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { changePaymentMethod } from '@/redux/features/paymentMethodSlice';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../utils/validateForm';
import { openOrderModal } from '@/redux/features/orderModalSlice';
import { clearCart } from '@/redux/features/localCartSlice';

const Checkout = () => {
  const cart = useAppSelector((state) => state.cart.localCart);
  const paymentMethod = useAppSelector(
    (state) => state.paymentMethod.paymentMethod,
  );
  const dispatch = useAppDispatch();

  const handlePaymentMethod = (value: string) => {
    dispatch(changePaymentMethod(value));
    setValue('paymentMethod', value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
    dispatch(openOrderModal());
    reset();
    dispatch(clearCart());
  };

  return (
    <section className="flex justify-center">
      <div className="mx-6 mb-8 w-full max-w-[45.625rem] rounded-lg bg-clr-white-50 p-6 md:mx-10 md:mb-8 md:p-12 xl:m-0 xl:min-w-[45.625rem]">
        <h1 className="mb-8 text-[1.75rem] font-bold uppercase tracking-wider md:mb-10 md:text-[2rem]">
          Checkout
        </h1>
        <form
          id="checkout"
          className="grid gap-8 sm:gap-14"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          {/* Billing Details */}
          <fieldset>
            <legend className="legend-styles">Billing Details</legend>
            <div className="grid gap-6 sm:gap-x-4 md:grid-cols-2">
              {inputs.billing.map((input: Input) => (
                <div className="relative grid gap-2" key={input.id}>
                  <label htmlFor={input.name} className="label-styles">
                    {input.label}
                  </label>
                  {errors[input.inputKey] && (
                    <p className="absolute right-0 top-0 text-xs text-red-500">
                      {errors[input.inputKey]?.message}
                    </p>
                  )}
                  <input
                    type={input.type}
                    id={input.name}
                    className={`input-styles ${
                      errors[input.inputKey] ? '!border-red-500' : ''
                    }`}
                    placeholder={input.placeholder}
                    {...register(input.inputKey)}
                  />
                </div>
              ))}
            </div>
          </fieldset>
          {/* Shipping Details */}
          <fieldset>
            <legend className="legend-styles">Shipping Info</legend>
            <div className="grid gap-6 sm:gap-x-4 md:grid-cols-2">
              {inputs.shipping.map((input: Input) => (
                <div
                  className="relative grid gap-2 md:first:col-span-2"
                  key={input.id}
                >
                  <label htmlFor={input.name} className="label-styles">
                    {input.label}
                  </label>
                  {errors[input.inputKey] && (
                    <p className="absolute right-0 top-0 text-xs text-red-500">
                      {errors[input.inputKey]?.message}
                    </p>
                  )}
                  <input
                    onWheel={(e: React.WheelEvent<HTMLDivElement>) => {
                      e.currentTarget.blur();
                    }}
                    type={input.type}
                    id={input.name}
                    className={`input-styles ${
                      errors[input.inputKey] ? '!border-red-500' : ''
                    }`}
                    placeholder={input.placeholder}
                    {...register(input.inputKey)}
                  />
                </div>
              ))}
            </div>
          </fieldset>
          {/* Payment Details */}
          <fieldset>
            <legend className="legend-styles">Payment Details</legend>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="label-styles block md:row-span-2 md:mb-4">
                Payment Method
              </label>
              {inputs.paymentMethod.map((input: Input) => (
                <div
                  key={input.id}
                  className={`flex cursor-pointer rounded-lg border border-[#c5c5c5] p-[1.125rem] ${
                    paymentMethod === input.value ? 'border-clr-orange-900' : ''
                  }`}
                  onClick={() => {
                    if (input.value) {
                      handlePaymentMethod(input.value);
                    }
                  }}
                >
                  <input
                    {...register('paymentMethod')}
                    type={input.type}
                    id={input.name}
                    name={input.group}
                    value={input.value}
                    checked={paymentMethod === input.value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handlePaymentMethod(e.target.value);
                    }}
                    className="mr-2 cursor-pointer border-[#c5c5c5] text-clr-orange-900 focus:ring-transparent"
                  />
                  <label
                    htmlFor={input.name}
                    className="cursor-pointer text-xs font-bold"
                  >
                    {input.label}
                  </label>
                </div>
              ))}
              {/* e-Money Details*/}
              {paymentMethod === 'emoney' &&
                inputs.paymentDetails.map((input: Input) => (
                  <div className="relative grid gap-2 md:mt-4" key={input.id}>
                    <label htmlFor={input.label} className="label-styles">
                      {input.label}
                    </label>
                    {errors[input.inputKey] && (
                      <p className="absolute right-0 top-0 text-xs text-red-500">
                        {errors[input.inputKey]?.message}
                      </p>
                    )}
                    <input
                      inputMode={input.inputMode}
                      onWheel={(e: React.WheelEvent<HTMLDivElement>) => {
                        e.currentTarget.blur();
                      }}
                      type={input.type}
                      id={input.label}
                      className={`input-styles ${
                        errors[input.inputKey] ? '!border-red-500' : ''
                      }`}
                      placeholder={input.placeholder}
                      {...register(input.inputKey)}
                    />
                  </div>
                ))}
              {/* Cash on Delivery Details */}
              {paymentMethod === 'cash' && (
                <div className="grid gap-8 sm:grid-cols-[3rem_auto] md:col-span-2 md:mt-4">
                  <div className="flex justify-center">
                    <CashOnDeliveryIcon />
                  </div>
                  <p className="text-center text-xs font-medium leading-6 opacity-50 sm:text-left">
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
