// componentes/CurrencyConverter.jsx
import React, { useState, useEffect } from "react";

function CurrencyConverter() {
  const [amount, setAmount] = useState(1); // Default amount: 1
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch exchange rates when the component mounts
    const fetchRates = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.frankfurter.app/latest?from=${fromCurrency}` // Using Frankfurter API
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); // Proper error handling
        }

        const data = await response.json();
        setExchangeRates(data.rates); // Assuming the API returns rates in this format
      } catch (err) {
        console.error("Error fetching exchange rates:", err);
        setError(
          "Error fetching exchange rates. Check your internet connection or try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [fromCurrency]); // Fetch again whenever the 'fromCurrency' changes

  const convertCurrency = () => {
    if (
      !exchangeRates ||
      Object.keys(exchangeRates).length === 0 ||
      !exchangeRates[toCurrency]
    ) {
      setError(
        "Error. No exchange rate data available for the selected currencies. Please check your selections"
      );
      return; // handle the error condition
    }

    setConvertedAmount((amount * exchangeRates[toCurrency]).toFixed(2));
  };

  const handleSwap = () => {
    // Swap the currencies and update local state
    const tempCurrency = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);
  };

  if (loading) {
    return <div>Loading exchange rates...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="card">
      <h2>Conversor de Monedas</h2>
      <label htmlFor="amount">Cantidad:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value) || 0)} // Handles invalid input
      />
      <label htmlFor="fromCurrency">De:</label>
      <select
        id="fromCurrency"
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        {/* Add more currency options here as needed */}
        <option value="COP">COP</option>
      </select>
      <label htmlFor="toCurrency">A:</label>
      <select
        id="toCurrency"
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        {/* Add more currency options here as needed */}
        <option value="COP">COP</option>
      </select>
      <button onClick={convertCurrency}>Convertir</button>
      <button onClick={handleSwap}>Cambiar</button> {/* Add the swap button */}
      {convertedAmount !== null && (
        <div className="result">
          {amount} {fromCurrency} = {convertedAmount} {toCurrency}
        </div>
      )}
    </div>
  );
}

export default CurrencyConverter;
