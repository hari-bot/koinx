import React, { useEffect, useRef, memo, useState } from 'react';

function TradingViewWidget() {
  const container = useRef();
  const [interval, setInterval] = useState("W");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    
    const updateScript = () => {
      script.innerHTML = JSON.stringify({
        height: "574",
        symbol: "CRYPTOCAP:BTC",
        interval: interval,
        timezone: "Etc/UTC",
        theme: "light",
        style: "3",
        locale: "en",
        enable_publishing: false,
        hide_top_toolbar: true,
        hide_legend: true,
        save_image: false,
        calendar: false,
        hide_volume: true,
        support_host: "https://www.tradingview.com"
      });
      container.current.innerHTML = '';
      container.current.appendChild(script);
    };

    // Initial load
    updateScript();

    // Update script when interval changes
    return () => {
      window.removeEventListener('resize', updateScript);
    };
  }, [interval]);

  const handleIntervalClick = (selectedInterval) => {
    setInterval(selectedInterval);
  };

  return (
    <div className="tradingview-widget-container" style={{ height: "100%", width: "100%" }}>
      <div className='interval-btns'>
        <button className={interval === "60" ? 'active-btn' : ''} onClick={() => handleIntervalClick("60")}>1H</button>
        <button className={interval === "D" ? 'active-btn' : ''} onClick={() => handleIntervalClick("D")}>24H</button>
        <button className={interval === "W" ? 'active-btn' : ''} onClick={() => handleIntervalClick("W")}>7D</button>
        <button className={interval === "1" ? 'active-btn' : ''} onClick={() => handleIntervalClick("1")}>1M</button>
        <button className={interval === "3" ? 'active-btn' : ''} onClick={() => handleIntervalClick("3")}>3M</button>
        <button className={interval === "5" ? 'active-btn' : ''} onClick={() => handleIntervalClick("5")}>5M</button>
      </div>
      <div className="tradingview-widget-container__widget" ref={container} style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);
