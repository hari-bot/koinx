import { useState, useEffect } from "react";
import axios from "axios";

function YouMayAlsoLike() {
    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(()=>{
      function fetchData() {
        const apiUrl = `https://api.coingecko.com/api/v3/search/trending`;
        const params = {
          per_page:3,
          page:1,
        };
      
        axios
          .get(apiUrl, { params })
          .then(response => {
            const coinData = response.data.coins.slice(0, 3);
            setTrendingCoins(coinData)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }
      fetchData()
    },[])


  return (
    <div className="you-may-also-like">
      <div className="container-sm">
        <h1 className="heading">Trending Coins (24H)</h1>
        <div className="trending-coins">
            {trendingCoins.map((coin) => (
              <div key={coin.item.id} className="coin">
                <div className="coin-detail">
                  <img src={coin.item.small} alt={coin.item.name} />
                  <p>{coin.item.name}({coin.item.symbol})</p>
                </div>
                 {/* make it as seprate component */}
                 <div  className={`${coin.item.data.price_change_percentage_24h.usd > 0 ? 'positive-change' : coin.item.data.price_change_percentage_24h.usd < 0 ? 'negative-change' : ''} trend-arrow`}>
                    {coin.item.data.price_change_percentage_24h.usd !== undefined && (
                        <span>
                        {coin.item.data.price_change_percentage_24h.usd > 0 ? ' ▲ ' : coin.item.data.price_change_percentage_24h.usd < 0 ? ' ▼ ' : ''}
                        {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                        </span>
                    )}
                   </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default YouMayAlsoLike;
