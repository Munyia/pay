import React from 'react';
import { Link } from 'react-router-dom';

const TransactionDetails = ({ paymentMethod, amountPaid, accountInfo, cryptoWallet, userContact }) => {
  return (
    <div className="flex flex-col justify-center items-center p-6 rounded-lg bg-white shadow-lg w-full max-w-md overflow-auto px-6 sm:px-8">
      <h1 className="text-2xl font-bold mb-4">Payment Successful</h1>
      <p className="text-lg mb-2">Amount Paid: <span className="font-semibold">£{amountPaid}</span></p>

      {paymentMethod === 'bank' && (
        <div>
          <p className="font-mono text-lg mb-2">Bank Account: {accountInfo}</p>
          <p className="font-mono text-lg mb-2">Sort Code: 12-34-56</p>
        </div>
      )}

      {paymentMethod === 'crypto' && (
        <div>
          <p className="font-mono text-lg mb-2">Crypto Wallet: {cryptoWallet}</p>
          <p className="font-mono text-lg mb-2">Transaction Hash: 0x1234...abcd</p>
        </div>
      )}

      {paymentMethod === 'paypal' && (
        <div>
          <p className="font-mono text-lg mb-2">PayPal Transaction ID: PAY123456789</p>
        </div>
      )}

      <p className="text-gray-600 mt-4">User Contact: {userContact}</p>
      <p className="text-gray-600">Thank you for your payment!</p>

      {/* Company information section */}
      <div className="mt-8 text-center">
        <p className="text-lg font-semibold">XYZ Services</p>
        <p className="text-gray-500">123 Business Avenue, Suite 456</p>
        <p className="text-gray-500">New York, NY 10001, USA</p>
        <p className="text-gray-500">Phone: +1 (555) 123-4567</p>
        <p className="text-gray-500">Email: support@xyzservices.com</p>
      </div>

      <Link
        to={'/'}
        className="rounded-full py-2 px-4 bg-dB mt-8 text-white text-center hover:bg-pry transition duration-200"
      >
       Home
      </Link>
    </div>
  );
};

export default TransactionDetails;
