import { useState, useEffect } from "react";
import axios from "axios";

function YouMayAlsoLike() {
    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(()=>{
        async function fetchTrendingCoins(){
            try {
                const response = await axios.get("https://api.coingecko.com/api/v3/search/trending?per_page=3&page=1")
                    setTrendingCoins(response.data);
                    console.log(trendingCoins)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTrendingCoins()
    },[])


  return (
    <div className="you-may-also-like">
      <div className="container-sm">
        <h1 className="heading">Trending Coins (24H)</h1>
        <div className="coins">
            <div className="coin">
                    <p></p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default YouMayAlsoLike;
