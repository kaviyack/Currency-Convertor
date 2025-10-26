import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [rates, setRates] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/rates')
      .then(res => res.json())
      .then(data => setRates(data))
      .catch(err => console.error('Error fetching rates:', err));
  }, []);

  const handleConvert = () => {
    const fromRate = rates.find(rate => rate.currency_code === fromCurrency)?.rate || 1;
    const toRate = rates.find(rate => rate.currency_code === toCurrency)?.rate || 1;
    const converted = (amount * toRate) / fromRate;
    setResult(converted.toFixed(2));
  };

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div className="converter-container">
        <div className="input-group">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0"
          />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {rates.map(rate => (
              <option key={rate.currency_code} value={rate.currency_code}>
                {rate.currency_code} - {rate.currency_name}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {rates.map(rate => (
              <option key={rate.currency_code} value={rate.currency_code}>
                {rate.currency_code} - {rate.currency_name}
              </option>
            ))}
          </select>
        </div>

        <button onClick={handleConvert}>Convert</button>

        {result && (
          <div className="result">
            <h2>
              {amount} {fromCurrency} = {result} {toCurrency}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
