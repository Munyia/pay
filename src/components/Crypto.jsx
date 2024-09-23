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

const Crypto = () => {
  const [isTimeout, setIsTimeout] = useState(false);
  const navigate = useNavigate();

  const handleTimeout = () => {
    setIsTimeout(true); // Set timeout state to true
  };

  const resetTimer = () => {
    setIsTimeout(false); // Reset the timeout
    navigate('/paymentoptions'); // Navigate back to payment options or reset flow
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-6 px-6 bg-gray-50">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2">Crypto Payment</h1>
        <p className="text-gray-700 mb-4">Please transfer £90 to the following address:</p>
        <p className="font-mono text-lg mb-4">Address: 0x1234567890123456789012345678901234567890</p>
        <p className="text-gray-600 mb-2">Please use the reference "Invoice #123456" when making the payment.</p>
        <p className="text-gray-600 mb-4">Once the payment is confirmed, we will update the status of your invoice.</p>
        <p className="text-gray-600">Thank you for your prompt payment.</p>
      </div>

      {!isTimeout ? (
        <>
          <Link
            to={'/success'}
            className="rounded-full py-2 px-4 bg-dB mb-4 text-white text-center hover:bg-pry transition duration-200 w-full md:w-auto"
          >
            Confirm Payment
          </Link>
          <Link
            to={'/paymentoptions'}
            className="rounded-full py-2 px-4 bg-dB text-white text-center hover:bg-pry transition duration-200 w-full md:w-auto"
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

export default Crypto;
