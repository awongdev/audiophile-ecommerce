'use client';
import React, { useState } from 'react';
import CashOnDeliveryIcon from '../../public/assets/checkout/icon-cash-on-delivery.svg';
import { inputs } from '../../constants/inputs';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <section className="flex justify-center">
      <div className="mx-6 mb-8 mt-6 w-full max-w-[730px] rounded-lg bg-clr-white-50 p-6 md:p-12">
        <h1 className="mb-8 text-[1.75rem] font-bold uppercase tracking-wider md:mb-10 md:text-[2rem]">
          Checkout
        </h1>
        <form className="grid gap-8 sm:gap-14">
          {/* Billing Details */}
          <fieldset>
            <legend className="legend-styles">Billing Details</legend>
            <div className="grid gap-6 sm:gap-x-4 md:grid-cols-2">
              {inputs.billing.map((input) => (
                <div className="grid gap-2" key={input.id}>
                  <label htmlFor={input.labelFor} className="label-styles">
                    {input.labelName}
                  </label>
                  <input
                    type={input.type}
                    id={input.labelFor}
                    className="input-styles"
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
            </div>
          </fieldset>
          {/* Shipping Details */}
          <fieldset>
            <legend className="legend-styles">Shipping Info</legend>
            <div className="grid gap-6 sm:gap-x-4 md:grid-cols-2">
              {inputs.shipping.map((input) => (
                <div className="grid gap-2 md:first:col-span-2" key={input.id}>
                  <label htmlFor={input.labelFor} className="label-styles">
                    {input.labelName}
                  </label>
                  <input
                    type={input.type}
                    id={input.labelFor}
                    className="input-styles"
                    placeholder={input.placeholder}
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
              {inputs.paymentMethod.map((input) => (
                <div
                  key={input.id}
                  className={`flex cursor-pointer rounded-lg border border-[#c5c5c5] p-[1.125rem] ${
                    paymentMethod === input.value ? 'border-clr-orange-900' : ''
                  }`}
                  onClick={() => setPaymentMethod(input.value)}
                >
                  <input
                    type={input.type}
                    id={input.inputId}
                    name={input.name}
                    value={input.value}
                    checked={paymentMethod === input.value}
                    onChange={handlePaymentMethod}
                    className="mr-2 cursor-pointer border-[#c5c5c5] text-clr-orange-900 focus:ring-transparent"
                  />
                  <label
                    htmlFor={input.labelFor}
                    className="cursor-pointer text-xs font-bold"
                  >
                    {input.labelName}
                  </label>
                </div>
              ))}
              {/* e-Money Details*/}
              {paymentMethod === 'emoney' &&
                inputs.paymentDetails.map((input) => (
                  <div className="grid gap-2 md:mt-4" key={input.id}>
                    <label htmlFor={input.label} className="label-styles">
                      {input.label}
                    </label>
                    <input
                      type={input.type}
                      id={input.label}
                      className="input-styles"
                      placeholder={input.placeholder}
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
