import React, { useEffect, useRef, useState, memo } from "react";

function TradingViewWidget() {
  const container = useRef();
  const [autoSize, setAutoSize] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Set autoSize to true when the screen width is below a certain threshold
      setAutoSize(window.innerWidth < 920);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    // Dynamically set the configuration based on autoSize value
    const config = autoSize
      ? {
          width: "auto",
          height: "217",
          symbol: "CRYPTOCAP:BTC",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "3",
          locale: "en",
          enable_publishing: false,
          save_image: false,
          hide_legend: true,
          calendar: false,
          hide_volume: true,
          support_host: "https://www.tradingview.com"
        }
      : {
          width: "837",
          height: "574",
          symbol: "CRYPTOCAP:BTC",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "3",
          locale: "en",
          enable_publishing: false,
          save_image: false,
          calendar: false,
          hide_volume: true,
          support_host: "https://www.tradingview.com"
        };

    script.innerHTML = JSON.stringify(config);

    // Clear existing content before appending the script
    container.current.innerHTML = "";
    container.current.appendChild(script);
  }, [autoSize]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        ></a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
