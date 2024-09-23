import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Timer({ onTimeout }) {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      onTimeout(); // Trigger timeout action when time runs out
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
    <div className="text-center text-white text-lg font-bold bg-dB pt-2 rounded-2xl shadow-lg">
      Time Left: <span className="text-red-600">{formatTime(timeLeft)}</span>
    </div>
  );
}

const CardPayment = () => {
  const [isTimeout, setIsTimeout] = useState(false);
  const navigate = useNavigate();

  const handleTimeout = () => {
    setIsTimeout(true); // Set timeout state to true
    navigate('/paymentoptions'); // Navigate when the timer runs out
  };

  return (
    <section className="add-card page flex flex-col items-center justify-center min-h-screen bg-dB p-6 md:p-12 lg:p-4">
      {!isTimeout ? (
        <>
          {/* Timer displayed outside the form */}
          <Timer onTimeout={handleTimeout} />

          <form className="bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-col gap-4 max-w-md w-full mt-8">
            <label htmlFor="name" className="flex flex-col gap-1">
              <span className="text-gray-400 text-sm font-semibold">Card holder full name</span>
              <input
                className="h-12 rounded-lg border border-gray-600 bg-transparent text-gray-300 placeholder-gray-500 px-3 transition-all duration-300 focus:outline-none focus:border-pry caret-pry"
                type="text"
                name="input-name"
                placeholder="Enter your full name"
              />
            </label>

            <label htmlFor="serialCardNumber" className="flex flex-col gap-1">
              <span className="text-gray-400 text-sm font-semibold">Card Number</span>
              <input
                id="serialCardNumber"
                className="h-12 rounded-lg border border-gray-600 bg-transparent text-gray-300 placeholder-gray-500 px-3 transition-all duration-300 focus:outline-none focus:border-pry caret-pry"
                type="number"
                name="input-name"
                placeholder="0000 0000 0000 0000"
              />
            </label>

            <div className="flex flex-wrap justify-between gap-4">
              <label htmlFor="ExDate" className="flex flex-col gap-1 flex-1">
                <span className="text-gray-400 text-sm font-semibold">Expiry Date</span>
                <input
                  id="ExDate"
                  className="h-12 rounded-lg border border-gray-600 bg-transparent text-gray-300 placeholder-gray-500 px-3 transition-all duration-300 focus:outline-none focus:border-pry caret-pry"
                  type="text"
                  name="input-name"
                  placeholder="01/23"
                />
              </label>

              <label htmlFor="cvv" className="flex flex-col gap-1 flex-1">
                <span className="text-gray-400 text-sm font-semibold">CVV</span>
                <input
                  id="cvv"
                  className="h-12 rounded-lg border border-gray-600 bg-transparent text-gray-300 placeholder-gray-500 px-3 transition-all duration-300 focus:outline-none focus:border-pry caret-pry"
                  type="number"
                  name="cvv"
                  placeholder="CVV"
                />
              </label>
            </div>

            <Link
              to={'/success'}
              className="rounded-full py-2 px-4 bg-dB text-white text-center hover:bg-pry transition duration-200"
            >
              Confirm Payment
            </Link>

            <Link
              to={'/paymentoptions'}
              className="rounded-full py-2 px-4 bg-dB text-white text-center hover:bg-pry transition duration-200"
            >
              Cancel
            </Link>
          </form>
        </>
      ) : (
        <div className="text-center mt-8">
          <p className="text-red-600 font-bold">Your session has expired!</p>
          <button
            onClick={() => navigate('/paymentoptions')}
            className="rounded-full py-2 px-4 bg-pry text-white text-center hover:bg-blue-500 transition duration-200 mt-4"
          >
            Go Back to Payment Options
          </button>
        </div>
      )}
    </section>
  );
};

export default CardPayment;
