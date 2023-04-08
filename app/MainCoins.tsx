import React from 'react'
import CoinsRender from './CoinsRender';
import { mainCoins } from './data';

const MainCoins = () => {
  let [coins, setCoins] = React.useState<any>(() => mainCoins.map(item => { return { symbol: item, price: '' } }));
  const streams = mainCoins.map((symbol) => `${symbol}@trade`);
  React.useEffect(() => {
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws`);
    ws.onopen = function () {
      console.log('WebSocket connected');
      ws.send(JSON.stringify({ method: 'SUBSCRIBE', params: streams, id: 1 }));
    }
    ws.onmessage = function (event) {
      setCoins((prev: { symbol: any; }[]) => {
        return (
          prev.map((item: any) => {
            if (item.symbol.toUpperCase() == JSON.parse(event.data).s) {
              return { symbol: item.symbol, price: JSON.parse(event.data).p }
            } else {
              return { symbol: item.symbol, price: item.price }
            }
          }))
      })
    }

    ws.onclose = function () {
      console.log('WebSocket disconnected');
    };

    ws.onerror = function (event) {
      console.error(event);
    };

    return () => {
      ws.close();
    };
  }, [])
  return (
    <CoinsRender coins={coins} />
  )
}

export default MainCoins