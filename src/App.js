import { useEffect, useState } from "react";

function App() {
  const [loding, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => setCoins(json));
    setLoding(false);
  }, []);

  return (
    <div className="App">
      <h1>The Coins! {loding ? "" : `(${coins.length})`}</h1>

      {loding ? (
        <strong>Loding...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
