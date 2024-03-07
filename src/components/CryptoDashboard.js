import { useState,useEffect } from "react"
import axios from "axios"
import TradingViewWidget from "./TradingViewWidget"

function CryptoDashboard() {
    const [coin,setCoin] = useState({})


    function fetchData() {
        let currency = 'bitcoin'
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
          .then(response => {
            const coinData = {
              name: response.data.name,
              symbol: response.data.symbol,
              rank: response.data.market_data.market_cap_rank,
              inr: response.data.market_data.current_price.inr.toLocaleString(),
              inr_24h_change: response.data.market_data.price_change_percentage_24h_in_currency.inr,
              usd: response.data.market_data.current_price.usd.toLocaleString(),
              usd_24h_change: response.data.market_data.price_change_percentage_24h_in_currency.usd,
              icon: response.data.image.small,
            };
            setCoin(coinData)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }


      useEffect(() => {
        fetchData();
      }, []);
     

    return (
        <div className="container">

            <div className="crypto-header">
                <img  className="currency-icon" src={coin.icon} alt="currency icon" />
                <h2 className="coin-name">{coin.name}</h2>
                <h3 className="coin-symbol">{coin.symbol}</h3>
                <div className="coin-rank">Rank #{coin.rank}</div>
            </div>

            <div className="coin-price">
                <div className="coin-data-wrap">
                    <div className="coin-price-usd">${coin.usd}</div>

                    {/* make it as seprate component */}
                    <div  className={`${coin.usd_24h_change > 0 ? 'positive-change' : coin.usd_24h_change < 0 ? 'negative-change' : ''} trend-arrow`}>
                    {coin.usd_24h_change !== undefined && (
                        <span>
                        {coin.usd_24h_change > 0 ? ' ▲ ' : coin.usd_24h_change < 0 ? ' ▼ ' : ''}
                        {coin.usd_24h_change.toFixed(2)}%
                        </span>
                    )}
                   </div>
                  <p className="twentyfour">(24H)</p>
                </div>
                <div className="coin-price-inr">₹{coin.inr}</div> 
            </div>
            <hr />
            <TradingViewWidget />

        </div>
        
    )
  }
  
export default CryptoDashboard