import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    // Set explicit dimensions on the container
    const containerHeight = Math.max(window.innerHeight - 80, 1000);
    container.current.style.width = '100%';
    container.current.style.height = `${containerHeight}px`;

    // Clean any previous scripts to avoid duplicates during HMR
    container.current.innerHTML = '<div class="tradingview-widget-container__widget" style="width: 100%; height: 100%;"></div>';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `{
      "lineWidth": 2,
      "lineType": 0,
      "chartType": "line",
      "fontColor": "rgb(106, 109, 120)",
      "gridLineColor": "rgba(242, 242, 242, 0.06)",
      "volumeUpColor": "rgba(34, 171, 148, 0.5)",
      "volumeDownColor": "rgba(247, 82, 95, 0.5)",
      "backgroundColor": "#0F0F0F",
      "widgetFontColor": "#DBDBDB",
      "upColor": "#22ab94",
      "downColor": "#f7525f",
      "borderUpColor": "#22ab94",
      "borderDownColor": "#f7525f",
      "wickUpColor": "#22ab94",
      "wickDownColor": "#f7525f",
      "colorTheme": "dark",
      "isTransparent": false,
      "locale": "en",
      "chartOnly": false,
      "scalePosition": "right",
      "scaleMode": "Normal",
      "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      "valuesTracking": "1",
      "changeMode": "price-and-percent",
      "symbols": [
        ["NASDAQ:PLTR|1M"],
        ["NYSE:PATH|1M"],
        ["NASDAQ:SYM|1M"],
        ["NASDAQ:DDOG|1M"],
        ["NASDAQ:VERI|1M"],
        ["NASDAQ:CRWV|1M"],
        ["NASDAQ:COMM|1M"],
        ["NYSE:EME|1M"],
        ["NASDAQ:LSCC|1M"],
        ["NASDAQ:NVDA|1M"],
        ["NASDAQ:SHOP|1M"],
        ["NYSE:TWLO|1M"],
        ["NASDAQ:META|1M"]
      ],
      "dateRanges": ["1d|1", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"],
      "fontSize": "10",
      "headerFontSize": "medium",
      "autosize": true,
      "width": "100%",
      "height": "100%",
      "lineColor": "rgba(56, 142, 60, 1)",
      "noTimeScale": false,
      "hideDateRanges": false,
      "hideMarketStatus": false,
      "hideSymbolLogo": false
    }`;

    container.current.appendChild(script);

    // Handle window resize for responsiveness
    const handleResize = () => {
      if (container.current) {
        const newHeight = Math.max(window.innerHeight - 80, 1000);
        container.current.style.height = `${newHeight}px`;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (container.current) {
        container.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container rounded-2xl overflow-hidden border border-dashed border-secondary" ref={container} />
  );
}

export default memo(TradingViewWidget);


