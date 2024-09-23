import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Timer({ onTimeout }) {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      onTimeout(); // Trigger timeout action
    }

    return () => clearInterval(timerId); // Clean up on unmount
  }, [timeLeft, onTimeout]);

  // Format time into mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div className="text-center text-white text-lg font-bold mt-4 bg-dB p-2 rounded-2xl shadow-lg">
      Time Left: <span className="text-red-600">{formatTime(timeLeft)}</span>
    </div>
  );
}

const BankTransfer = () => {
  const [isTimeout, setIsTimeout] = useState(false);
  const navigate = useNavigate();

  const handleTimeout = () => {
    setIsTimeout(true); // Set timeout state to true
  };

  const resetTimer = () => {
    setIsTimeout(false); // Reset the timeout
    navigate('/paymentoptions'); // Navigate back to payment options or reset flow
  };

  const handlePaymentSuccess = () => {
    // Payment details to pass to the success page
    const transactionDetails = {
      paymentMethod: 'bank',
      amountPaid: 90,
      accountInfo: '12345678',
      userContact: 'jane.smith@example.com',
    };

    // Navigate to the SuccessPage and pass transaction details via state
    navigate('/success', { state: transactionDetails });
  };

  return (
    <div className="flex flex-col justify-center items-center h-full p-6 md:p-12 lg:p-16 bg-gray-50">
      <div className="mb-6 text-center max-w-lg">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Bank Transfer</h1>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Please transfer £90 to the following account:
        </p>
        <p className="font-mono text-lg md:text-xl mb-2">Account Number: 12345678</p>
        <p className="font-mono text-lg md:text-xl mb-2">Sort Code: 12-34-56</p>
        <p className="font-mono text-lg md:text-xl mb-2">IBAN: GB1234567890123456789012</p>
        <p className="font-mono text-lg md:text-xl mb-2">BIC: GB1234567890123456</p>
        <p className="text-gray-600 text-xs md:text-sm mb-2">
          Please use the reference "Invoice #123456" when making the payment.
        </p>
        <p className="text-gray-600 text-xs md:text-sm">
          Once the payment is confirmed, we will update the status of your invoice. Thank you for your prompt payment.
        </p>
      </div>

      {!isTimeout ? (
        <>
          <button
            onClick={handlePaymentSuccess}
            className="rounded-full py-2 px-4 bg-dB text-white text-center hover:bg-pry transition duration-200 mb-4 w-full md:w-auto"
          >
            Confirm Payment
          </button>
          <Link
            to={'/paymentoptions'}
            className="rounded-full py-2 px-4 bg-dB text-white text-center hover:bg-pry transition duration-200 mb-8 w-full md:w-auto"
          >
            Cancel
          </Link>
          {/* Timer Section */}
          <Timer onTimeout={handleTimeout} />
        </>
      ) : (
        <div className="text-center mt-8">
          <p className="text-red-600 font-bold">Your session has expired!</p>
          <button
            onClick={resetTimer}
            className="rounded-full py-2 px-4 bg-pry text-white text-center hover:bg-blue-500 transition duration-200 mt-4"
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
};

export default BankTransfer;
