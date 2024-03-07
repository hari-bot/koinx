import { useState,useEffect } from "react";
import axios from "axios";

function YouMayAlsoLike(){
    const [trendingCoins, setTrendingCoins] = useState([]);


    useEffect(()=>{
        async function fetchTrendingCoins(){
            try {
                const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=true")
                localStorage.setItem("trendingCoinsCache", JSON.stringify(response.data));
                setTrendingCoins(response.data);
                console.log(trendingCoins);
            } catch (error) {
                console.log('Error fetching trending coins:', error)
            }
        }
        fetchTrendingCoins();
    },[])

    return (
        <div className="you-may-also-like">
          <div className="container-xl">
            <h1 className="heading">You May Also Like</h1>
            <div className="card-section">
                <div className="cards-wrapper coin">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
    
            </div>
          </div>
        </div>
      );
}

export default YouMayAlsoLike