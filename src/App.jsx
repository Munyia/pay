import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import './App.css'
import Hero from './components/Hero'
import PaymentOptions from './components/PaymentOptions'
import BankTransfer from './components/BankTransfer'
import Success from './components/Success'
import Pending from './components/Pending'
import Crypto from './components/Crypto'
import CardPayment from './components/CardPayment'
import Carousel from './components/Carousel'
import TransactionDetails from './components/TransactionDetails'
function App() {
  const [popup, setPopup] = useState("")

  const payment = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkRbzSYkzNEJHH2Qitlk0DU6c8x7HnENMxw&s",
      name: "Crypto",

    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-vector/people-near-bank-building_74855-4455.jpg",
      name: "Bank Transfer",
    },
    {
      id: 3,
      image:
        "data:image/jpeg;base64,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",
      name: "PayPal/ Card Payment",
    },
  ];

  return (
    <div className='bg-black font-[verdana] flex flex-col md:flex-row '>
    <div className="bg-pry px-5 h-full  mx-3 items-center justify-center m-auto text-center w-full md:w-1/4">
      <div className="w-full m-auto bg-pry text-center justify-center items-center py-5 rounded-3xl dark:bg-gray-900">
        <Carousel autoslide={true} autoslideinterval={5000} showDots={false}>
          {payment.map((payment) => (
            <div key={payment.id} className="flex flex-col items-center justify-center">
              <img
                src={payment.image}
                alt={`Customer ${payment.name}`}
                className="rounded-lg mb-4 shadow-md"
              />
              <p className="font-semibold text-white text-lg pb-10 text-but">
                {payment.name}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>

    <div className='bg-white font-[verdana] w-full md:w-3/4 h-full'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/paymentoptions' element={<PaymentOptions />} />
          <Route path='/banktransfer' element={<BankTransfer />} />
          <Route path='/success' element={<Success />} />
          <Route path='/pending' element={<Pending />} />
          <Route path='/crypto' element={<Crypto />} />
          <Route path='/cardpayment' element={<CardPayment />} />
          <Route path='/transactiondetails' element={<TransactionDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
);
}

export default App
