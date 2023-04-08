
const Binance = require('binance-api-node').default;
const http = require('http')
const url = require('url')
const WebSocket = require('ws');
const PORT = 5000
const symbols = [
    '1inchusdt', 'aaveusdt', 'acausdt', 'achusdt', 'acmusdt', 'adausdt', 'adxusdt', 'aergousdt', 'agldusdt', 'akrousdt', 'alcxusdt', 'algousdt',
    'aliceusdt', 'alpacausdt', 'alphausdt', 'alpineusdt', 'ampusdt', 'ancusdt', 'ankrusdt', 'antusdt', 'apeusdt', 'api3usdt', 'arusdt', 'arpausdt',
    'asrusdt', 'astrusdt', 'atausdt', 'atmusdt', 'atomusdt', 'auctionusdt', 'audusdt', 'audiousdt', 'autousdt', 'avausdt', 'avaxusdt', 'axsusdt',
    'badgerusdt', 'bakeusdt', 'balusdt', 'bandusdt', 'barusdt', 'batusdt', 'bchusdt', 'belusdt', 'betausdt', 'bicousdt', 'bifiusdt', 'blzusdt', 'bnbusdt',
    'bntusdt', 'bnxusdt', 'bondusdt', 'bswusdt', 'btcusdt', 'btcstusdt', 'btgusdt', 'burgerusdt', 'c98usdt', 'cakeusdt', 'celousdt', 'celrusdt',
    'cfxusdt', 'chessusdt', 'chrusdt', 'chzusdt', 'cityusdt', 'ckbusdt', 'clvusdt', 'cocosusdt', 'compusdt', 'cosusdt', 'cotiusdt', 'creamusdt',
    'crvusdt', 'ctkusdt', 'ctsiusdt', 'ctxcusdt', 'cvcusdt', 'cvpusdt', 'cvxusdt', 'darusdt', 'dashusdt', 'datausdt', 'degousdt', 'dentusdt', 'dexeusdt',
    'dfusdt', 'dgbusdt', 'diausdt', 'dntusdt', 'dockusdt', 'dodousdt', 'dogeusdt', 'dotusdt', 'drepusdt', 'duskusdt', 'dydxusdt', 'egldusdt', 'elfusdt',
    'enjusdt', 'ensusdt', 'eosusdt', 'epxusdt', 'ernusdt', 'etcusdt', 'ethusdt', 'eurusdt', 'farmusdt', 'fetusdt', 'fidausdt', 'filusdt', 'fiousdt',
    'firousdt', 'fisusdt', 'flowusdt', 'fluxusdt', 'forusdt', 'forthusdt', 'frontusdt', 'ftmusdt', 'fttusdt', 'fxsusdt', 'galausdt', 'galusdt', 'gbpusdt',
    'ghstusdt', 'glmrusdt', 'gmtusdt', 'grtusdt', 'gtcusdt', 'gtousdt', 'hardusdt', 'hbarusdt', 'highusdt', 'hiveusdt', 'hntusdt', 'hotusdt', 'icpusdt',
    'icxusdt', 'idexusdt', 'ilvusdt', 'imxusdt', 'injusdt', 'iostusdt', 'iotausdt', 'iotxusdt', 'iqusdt', 'jasmyusdt', 'joeusdt', 'jstusdt', 'juvusdt',
    'kavausdt', 'kdausdt', 'keyusdt', 'klayusdt', 'kncusdt', 'kp3rusdt', 'ksmusdt', 'laziousdt', 'ldousdt', 'leverusdt', 'linausdt', 'linkusdt', 'litusdt',
    'lokausdt', 'lptusdt', 'lrcusdt', 'lskusdt', 'ltcusdt', 'ltousdt', 'lunausdt', 'luncusdt', 'manausdt', 'maskusdt', 'maticusdt', 'mblusdt', 'mboxusdt',
    'mcusdt', 'mdtusdt', 'mdxusdt', 'minausdt', 'mirusdt', 'mkrusdt', 'mlnusdt', 'mobusdt', 'movrusdt', 'mtlusdt', 'multiusdt', 'nearusdt', 'neousdt',
    'nexousdt', 'nknusdt', 'nmrusdt', 'nulsusdt', 'oceanusdt', 'ogusdt', 'ognusdt', 'omusdt', 'omgusdt', 'oneusdt', 'ontusdt', 'ookiusdt', 'opusdt',
    'ornusdt', 'oxtusdt', 'paxgusdt', 'peopleusdt', 'perpusdt', 'phausdt', 'phbusdt', 'plausdt', 'polsusdt', 'polyusdt', 'pondusdt', 'portousdt',
    'powrusdt', 'promusdt', 'psgusdt', 'pundixusdt', 'pyrusdt', 'qiusdt', 'qntusdt', 'qtumusdt', 'quickusdt', 'radusdt', 'rareusdt', 'rayusdt', 'reefusdt', 'reiusdt',
    'renusdt', 'requsdt', 'rndrusdt', 'roseusdt', 'rsrusdt', 'runeusdt', 'rvnusdt', 'sandusdt', 'santosusdt', 'scusdt', 'scrtusdt', 'sfpusdt', 'shibusdt',
    'sklusdt', 'slpusdt', 'snxusdt', 'solusdt', 'spellusdt', 'srmusdt', 'steemusdt', 'stmxusdt', 'storjusdt', 'stptusdt', 'straxusdt', 'stxusdt', 'sunusdt',
    'superusdt', 'sushiusdt', 'sxpusdt', 'sysusdt', 'tusdt', 'tfuelusdt', 'thetausdt', 'tkousdt', 'tlmusdt', 'tomousdt', 'tornusdt', 'trbusdt', 'tribeusdt',
    'troyusdt', 'trxusdt', 'tusdusdt', 'tvkusdt', 'twtusdt', 'uftusdt', 'umausdt', 'unfiusdt', 'uniusdt', 'ustcusdt', 'utkusdt', 'vetusdt', 'vidtusdt',
    'voxelusdt', 'wavesusdt', 'waxpusdt', 'wingusdt', 'woousdt', 'wrxusdt', 'xecusdt', 'xlmusdt', 'xmrusdt', 'xnousdt', 'xrpusdt', 'xtzusdt', 'xvgusdt',
    'xvsusdt', 'yfiusdt', 'yfiiusdt', 'yggusdt', 'zecusdt', 'zenusdt', 'zilusdt', 'zrxusdt']


const apiKey = 'QUVQvQePWpjMCnawy2fd5g8IH1wgDoaKHon1aUWZU6MxZk4rsgY4bjMF33VAnbU7'
const apiSecret = 'JbjMoJXvzxZ4gjyWI9Zwt6QRed1MP9THqQ5i6Sugx5lMr5SpC1qcUynUNfBO0Ph0'


const binance =  Binance({ apiKey: apiKey, apiSecret: apiSecret })


const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${symbols.join('@ticker/')}@kline_1m`);

socket.on('open', () => {
    console.log('WebSocket connected');

    const req = {
        method: 'SUBSCRIBE',
        params: symbols.map((symbol) => `${symbol}@ticker`),
        id: 1,
    };

    socket.send(JSON.stringify(req));
});

socket.on('message', (message) => {
    const data = JSON.parse(message);
    console.log(data.s);
});

socket.on('close', () => {
    console.log('WebSocket disconnected');
});

// http.createServer((req, res) => {
//     const timestamp = Date.now();
//     const dateObj = new Date(timestamp);
//     const minutes = dateObj.getMinutes();
//     const seconds = dateObj.getSeconds();
//     const hours = dateObj.getHours();
//     console.log('')
//     console.log(`------${hours}:${minutes}:${seconds}----------`)
//     let urlParts = url.parse(req.url, true)
//     let coin = urlParts.query.coin
//     let usdt; // текущий баланс USDT
//     let balance;//колличество монет для продажи
//     let stepSize;//цена деления монеты по бинансу
//     let balanceStepSize;// колличество монет с вычетом цены деления
//     console.log(coin)
//     // binance.accountInfo()
//     //     .then(info => {
//     //         console.log("Запрос на получение USDT")
//     //         usdt = Math.floor(Number(info.balances.find(b => b.asset === 'USDT').free))
//     //         console.log(usdt)
//     //         binance.order({ symbol: `${coin}USDT`, side: 'BUY', type: 'MARKET', quoteOrderQty: usdt })
//     //             .then(response => {
//     //                 console.log("Покупка")
//     //                 binance.accountInfo()
//     //                     .then(info => {
//     //                         console.log("Запрос баланса монет")
//     //                         balance = Number(info.balances.find(b => b.asset === coin).free)
//     //                         binance.exchangeInfo()
//     //                         .then(info=>{
//     //                             console.log("Запрос на получение stepSize монеты" )
//     //                             stepSize = info.symbols.find(item => item.symbol === `${coin}USDT`).filters.find(c => c.filterType == 'LOT_SIZE').stepSize
//     //                             balanceStepSize = balance - balance % stepSize
//     //                         })                          
//     //                         console.log(balance)
//     //                         setTimeout(() => {
//     //                             binance.order({ symbol: `${coin}USDT`, side: 'SELL', type: 'MARKET', quantity: balanceStepSize })
//     //                                 .then(res => {console.log("Продажа")})
//     //                                 .catch(err => { console.log("Ошибка при продаже"), console.log(err) })
//     //                         }, 60000)
//     //                         res.end(`${balance}`)
//     //                     })
//     //                     .catch(err => console.log("Ошибка при запросе баланса монет"))
//     //             })
//     //             .catch(error => console.log("Ошибка при покупке"))
//     //     })
//     //     .catch(err => console.log('Ошибка при получении USDT'))

//      binance.accountInfo()
//         .then(info => {
//             console.log("Запрос на получение USDT")
//             usdt = Math.floor(Number(info.balances.find(b => b.asset === 'USDT').free))
//             console.log(usdt)
//         })
//         .catch(err => console.log('Ошибка при получении USDT'))
//     binance.exchangeInfo()
//         .then(info => {
//             console.log("Запрос на получение stepSize монеты")
//             stepSize = info.symbols.find(item => item.symbol === `${coin}USDT`).filters.find(c => c.filterType == 'LOT_SIZE').stepSize
//             console.log(stepSize)
//             res.end(`${stepSize}`)
//         })
//         .catch(err => console.log('Ошибка при получении stepSize монеты'))
// }).listen(PORT)










