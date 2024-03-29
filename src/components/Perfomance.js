import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function Perfomance() {
  const [coin, setCoin] = useState([]);
  const [highLow, setHighLow] = useState({});
  const [currentPrice, setCurrentPrice] = useState("");
  const [percentagePosition, setPercentagePosition] = useState("");

  const fetchData = useCallback(() => {
    let currency = "bitcoin";
    const apiUrl = `https://api.coingecko.com/api/v3/coins/${currency}`;
    const params = {
      localization: false,
      tickers: false,
      market_data: true,
      community_data: false,
      developer_data: false,
      sparkline: false,
    };

    axios
      .get(apiUrl, { params })
      .then((response) => {
        const coin = response.data;
        const volumeToMarketCapRatio =
          coin.market_data.total_volume.usd / coin.market_data.market_cap.usd;

        const coinData = [
          [`${coin.name} Price`, `$ ${coin.market_data.current_price.usd.toLocaleString()}`],
          [`24h Low / 24h High`, `$${coin.market_data.low_24h.usd.toLocaleString()} / $${coin.market_data.high_24h.usd.toLocaleString()}`],
          ['Trading Volume', `$${coin.market_data.total_volume.usd.toLocaleString()}`],
          ['Market Cap Rank', `#${coin.market_data.market_cap_rank}`],
          ['Market Cap', `$${coin.market_data.market_cap.usd.toLocaleString()}`],
          ['Volume / Market Cap', `${volumeToMarketCapRatio.toFixed(2)}`],
          ['All-Time High', `$${coin.market_data.ath.usd.toLocaleString()}`, new Date(response.data.market_data.ath_date.inr).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })],
          ['All-Time Low', `$${coin.market_data.atl.usd.toLocaleString()}`, new Date(response.data.market_data.atl_date.inr).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })],
        ];

        const highLowData = {
          high: coin.market_data.high_24h.usd.toLocaleString(),
          low: coin.market_data.low_24h.usd.toLocaleString(),
        };
        setCurrentPrice(coin.market_data.current_price.usd.toLocaleString());
        setCoin(coinData);
        setHighLow(highLowData);
        const calculatePosition =
          ((currentPrice - highLowData.low) / (highLowData.high - highLowData.low)) * 100;
        setPercentagePosition(calculatePosition);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPrice]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="container perfomance">
      <h1 className="heading">Perfomance</h1>
      <div className="todays-perfomance">
        <div className="todays-low">
          <p>Today's Low</p>
          <p className="price">${highLow.low}</p>
        </div>
        <div className="indicator">
          <div className="pointer" style={{ marginLeft: `${percentagePosition}%` }}>
            ▲
            <div>${currentPrice}</div>
          </div>
        </div>
        <div className="todays-high">
          <p>Today's High</p>
          <p>${highLow.high}</p>
        </div>
      </div>
      <h2 className="light-heading">Fundamentals</h2>
      <div className="info-table">
        {coin.map(([key, value, date]) => (
          <div key={key} className="info-row">
            <span className="info-key">{key}</span>
            <span className="info-value">{value}</span>
            {(key === 'All-Time High' || key === 'All-Time Low') && (
              <span className="additional-info">({date})</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Perfomance;
