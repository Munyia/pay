import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import TransactionDetails from './TransactionDetails';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { paymentMethod, amountPaid, accountInfo, cryptoWallet, userContact } = location.state || {}; // fallback if no state

  // Redirect to payment options if no transaction details
  if (!paymentMethod || !amountPaid) {
    navigate('/paymentoptions');
    return null;
  }

  return (
    <TransactionDetails
      paymentMethod={paymentMethod}
      amountPaid={amountPaid}
      accountInfo={accountInfo}
      cryptoWallet={cryptoWallet}
      userContact={userContact}
    />
  );
};

export default Success;
