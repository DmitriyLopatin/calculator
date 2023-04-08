const Binance = require('node-binance-api');
const http = require('http')
const url = require('url')
const PORT = 6000

const binance = new Binance().options({
    // APIKEY: 'QUVQvQePWpjMCnawy2fd5g8IH1wgDoaKHon1aUWZU6MxZk4rsgY4bjMF33VAnbU7',
    APIKEY: 'QUVQvQePWpjMCnawy2fd5g8IH1wgDoaKHon1aUWZU6MxZk4rsgY4bjMF33VAnbU7',
    // APISECRET: 'JbjMoJXvzxZ4gjyWI9Zwt6QRed1MP9THqQ5i6Sugx5lMr5SpC1qcUynUNfBO0Ph0',
    APISECRET: 'JbjMoJXvzxZ4gjyWI9Zwt6QRed1MP9THqQ5i6Sugx5lMr5SpC1qcUynUNfBO0Ph0',
    'family': 4,
})
http.createServer((req, res) => {
    let urlParts = url.parse(req.url, true)
    let coin = urlParts.query.coin
    let usdt = urlParts.query.balance
    console.log(coin)
    console.log(usdt)
    // if (balance < 0.001) {
    //     balance = Math.floor(balance * 100000) / 100000
    // } else if (balance < 0.1) {
    //     balance = Math.floor(balance * 10000) / 10000
    // } else if (balance < 1) {
    //     balance = Math.floor(balance * 1000) / 1000
    // } else if (balance < 10) {
    //     balance = Math.floor(balance * 100) / 100
    // }
    // else if (balance < 100) {
    //     balance = Math.floor(balance * 10) / 10
    // }
    // else if (balance > 100) {
    //     balance = Math.floor(balance)
    // }
    binance.balance((error, balances) => {
        if (error) return console.log("ошибка при получении баланса");
        setTimeout(() => {
            binance.order({
                symbol: `${coin}USDT`,
                side: 'SELL',
                type: 'MARKET',
                quoteOrderQty: balances.coin
            })
        }, 15000)
    })
}).listen(PORT)
    // setInterval(() => {
    //   getCoins().then(response => {
    //     const timestamp = Date.now();
    //     const dateObj = new Date(timestamp);
    //     const minutes = dateObj.getMinutes();
    //     const seconds = dateObj.getSeconds();
    //     const hours = dateObj.getHours();
    //     let arr = response.data.filter((item: { symbol: string }) => altCoins.includes(item.symbol.toLocaleLowerCase()))
    //       .sort((a: { symbol: string; }, b: { symbol: string; }) => a.symbol.localeCompare(b.symbol)).map((item: { symbol: any; price: any; }) => { return { symbol: item.symbol, price: [`${item.price}------${hours}:${minutes}:${seconds}`]}})
    //     setCoins((prevState: any[]) => {
    //       if(prevState.length==0){
    //         return arr
    //       }else{
    //         return prevState.map(item => { return { symbol: item.symbol, price: item.price.concat(arr.find((c: any) => c.symbol == item.symbol).price) } })
    //       }

    //     })
    //   })
    // }, 10000)
    // Create a new WebSocket object
    // const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${altCoins.join('@ticker/')}@kline_1m`);