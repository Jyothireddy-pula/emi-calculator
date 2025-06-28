import React, { useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState(10000000);
  const [interest, setInterest] = useState(8);
  const [years, setYears] = useState(10);
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const rate = interest / (12 * 100);
    const n = years * 12;
    const emiCalc = (amount * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
    setEmi(emiCalc.toFixed(2));
  };

  return (
    <div className="container">
      <h1>EMI Calculator</h1>

      <div className="slider-section">
        <label>Loan Amount: ₹ {amount}</label>
        <input
          type="range"
          min="1000000"
          max="300000000"
          step="1000000"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <label>Interest Rate: {interest}%</label>
        <input
          type="range"
          min="1"
          max="15"
          step="0.1"
          value={interest}
          onChange={(e) => setInterest(Number(e.target.value))}
        />

        <label>Tenure: {years} years</label>
        <input
          type="range"
          min="1"
          max="30"
          step="1"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
        />
      </div>

      <button onClick={calculateEMI}>Calculate EMI</button>

      {emi && (
        <div className="result">
          <h2>Your Monthly EMI is:</h2>
          <h1>₹ {emi}</h1>
          <button className="apply-button">APPLY FOR HOME LOAN</button>
        </div>
      )}
    </div>
  );
}

export default App;
