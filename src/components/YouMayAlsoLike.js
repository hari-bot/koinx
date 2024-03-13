import { useState,useEffect } from "react";
import axios from "axios";

function YouMayAlsoLike(){
    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(()=>{
        function fetchData() {
          const apiUrl = `https://api.coingecko.com/api/v3/search/trending`;
          const params = {
            vs_currency:"usd",
            order:"market_cap_desc",
            per_page:3,
            page:1,
            sparkline: "true",
          };
        
          axios
            .get(apiUrl, { params })
            .then(response => {
              const coinData = response.data.coins.slice(0, 10);
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
          <div className="container-xl">
            <h1 className="heading">You May Also Like</h1>
            <div className="card-section">
                <div className="cards-wrapper coin">
                    {trendingCoins.map((coin) => (
                            <div key={coin.item.id} className="scroll-card">
                                <div className="coin-detail-wrap">
                                      <div className="icon-name">
                                          <img  className="icon" src={coin.item.small} alt={coin.item.name} />
                                          <p>{coin.item.symbol}</p>
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
                                  <img className="sparkline" src={coin.item.data.sparkline} alt="sparkline" />
                            </div>
                            ))}
                </div>
    
            </div>
          </div>
        </div>
      );
}

export default YouMayAlsoLike