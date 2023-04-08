import React from 'react'
import { altCoins } from './data';

const AltCoins = () => {
    let [coins, setCoins] = React.useState<any>(() => altCoins.map(item => { return { symbol: item, price: '' } }));
    const streams = altCoins.map((symbol) => `${symbol}@trade`);
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
        <div className='main'>
            {coins.map((item: { symbol: string; price: any; }, index: number) =>
                <>
                    <div key={index} >
                        <h3>{item.symbol.replace("usdt", "").toUpperCase()}</h3>
                        <p >
                            {Number(item.price).toFixed(7)}
                        </p>
                    </div>
                </>
            )}
        </div>
    )
}

export default AltCoins