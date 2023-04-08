import axios from "axios";

// export const altCoins = [
//     '1inchusdt', 'aaveusdt', 'acausdt', 'achusdt', 'acmusdt', 'adausdt', 'adxusdt', 'aergousdt', 'agldusdt', 'akrousdt', 'alcxusdt', 'algousdt',
//     'aliceusdt', 'alpacausdt', 'alphausdt', 'alpineusdt', 'ampusdt', 'ancusdt', 'ankrusdt', 'antusdt', 'apeusdt', 'api3usdt', 'arusdt', 'arpausdt',
//     'asrusdt', 'astrusdt', 'atausdt', 'atmusdt', 'atomusdt', 'auctionusdt', 'audusdt', 'audiousdt', 'autousdt', 'avausdt', 'avaxusdt', 'axsusdt',
//     'badgerusdt', 'bakeusdt', 'balusdt', 'bandusdt', 'barusdt', 'batusdt', 'bchusdt', 'belusdt', 'betausdt', 'bicousdt', 'bifiusdt', 'blzusdt', 'bnbusdt',
//     'bntusdt', 'bnxusdt', 'bondusdt', 'bswusdt', 'btcusdt', 'btcstusdt', 'btgusdt', 'burgerusdt', 'c98usdt', 'cakeusdt', 'celousdt', 'celrusdt',
//     'cfxusdt', 'chessusdt', 'chrusdt', 'chzusdt', 'cityusdt', 'ckbusdt', 'clvusdt', 'cocosusdt', 'compusdt', 'cosusdt', 'cotiusdt', 'creamusdt',
//     'crvusdt', 'ctkusdt', 'ctsiusdt', 'ctxcusdt', 'cvcusdt', 'cvpusdt', 'cvxusdt', 'darusdt', 'dashusdt', 'datausdt', 'degousdt', 'dentusdt', 'dexeusdt',
//     'dfusdt', 'dgbusdt', 'diausdt', 'dntusdt', 'dockusdt', 'dodousdt', 'dotusdt', 'drepusdt', 'duskusdt', 'dydxusdt', 'egldusdt', 'elfusdt',
//     'enjusdt', 'ensusdt', 'eosusdt', 'epxusdt', 'ernusdt', 'etcusdt', 'ethusdt', 'eurusdt', 'farmusdt', 'fetusdt', 'fidausdt', 'filusdt', 'fiousdt',
//     'firousdt', 'fisusdt', 'flowusdt', 'fluxusdt', 'forusdt', 'forthusdt', 'frontusdt', 'ftmusdt', 'fttusdt', 'fxsusdt', 'galausdt', 'galusdt', 'gbpusdt',
//     'ghstusdt', 'glmrusdt', 'gmtusdt', 'grtusdt', 'gtcusdt', 'gtousdt', 'hardusdt', 'hbarusdt', 'highusdt', 'hiveusdt', 'hntusdt', 'hotusdt', 'icpusdt',
//     'icxusdt', 'idexusdt', 'ilvusdt', 'imxusdt', 'injusdt', 'iostusdt', 'iotausdt', 'iotxusdt', 'iqusdt', 'jasmyusdt', 'joeusdt', 'jstusdt', 'juvusdt',
//     'kavausdt', 'kdausdt', 'keyusdt', 'klayusdt', 'kncusdt', 'kp3rusdt', 'ksmusdt', 'laziousdt', 'ldousdt', 'leverusdt', 'linausdt', 'linkusdt', 'litusdt',
//     'lokausdt', 'lptusdt', 'lrcusdt', 'lskusdt', 'ltcusdt', 'ltousdt', 'lunausdt', 'luncusdt', 'manausdt', 'maskusdt', 'maticusdt', 'mblusdt', 'mboxusdt',
//     'mcusdt', 'mdtusdt', 'mdxusdt', 'minausdt', 'mirusdt', 'mkrusdt', 'mlnusdt', 'mobusdt', 'movrusdt', 'mtlusdt', 'multiusdt', 'nearusdt', 'neousdt',
//     'nexousdt', 'nknusdt', 'nmrusdt', 'nulsusdt', 'oceanusdt', 'ogusdt', 'ognusdt', 'omusdt', 'omgusdt', 'oneusdt', 'ontusdt', 'ookiusdt', 'opusdt',
//     'ornusdt', 'oxtusdt', 'paxgusdt', 'peopleusdt', 'perpusdt', 'phausdt', 'phbusdt', 'plausdt', 'polsusdt', 'polyusdt', 'pondusdt', 'portousdt',
//     'powrusdt', 'promusdt', 'psgusdt', 'pundixusdt', 'pyrusdt', 'qiusdt', 'qntusdt', 'qtumusdt', 'quickusdt', 'radusdt', 'rareusdt', 'rayusdt', 'reefusdt', 'reiusdt',
//     'renusdt', 'requsdt', 'rndrusdt', 'roseusdt', 'rsrusdt', 'runeusdt', 'rvnusdt', 'sandusdt', 'santosusdt', 'scusdt', 'scrtusdt', 'sfpusdt', 'shibusdt',
//     'sklusdt', 'slpusdt', 'snxusdt', 'solusdt', 'spellusdt', 'srmusdt', 'steemusdt', 'stmxusdt', 'storjusdt', 'stptusdt', 'straxusdt', 'stxusdt', 'sunusdt',
//     'superusdt', 'sushiusdt', 'sxpusdt', 'sysusdt', 'tusdt', 'tfuelusdt', 'thetausdt', 'tkousdt', 'tlmusdt', 'tomousdt', 'tornusdt', 'trbusdt', 'tribeusdt',
//     'troyusdt', 'trxusdt', 'tusdusdt', 'tvkusdt', 'twtusdt', 'uftusdt', 'umausdt', 'unfiusdt', 'uniusdt', 'ustcusdt', 'utkusdt', 'vetusdt', 'vidtusdt',
//     'voxelusdt', 'wavesusdt', 'waxpusdt', 'wingusdt', 'woousdt', 'wrxusdt', 'xecusdt', 'xlmusdt', 'xmrusdt', 'xnousdt', 'xrpusdt', 'xtzusdt', 'xvgusdt',
//     'xvsusdt', 'yfiusdt', 'yfiiusdt', 'yggusdt', 'zecusdt', 'zenusdt', 'zilusdt', 'zrxusdt']

export const mainCoins = ['adausdt', 'btcusdt', 'dogeusdt', 'ethusdt', 'bnbusdt', 'xrpusdt', 'roseusdt', 'trxusdt']

export const altCoins = [
    '1inchusdt', 'aaveusdt', 'acausdt', 'achusdt', 'acmusdt', 'adausdt', 'adxusdt', 'aergousdt', 'agldusdt', 'akrousdt', 'alcxusdt', 'algousdt',
    'aliceusdt', 'alpacausdt', 'alphausdt', 'alpineusdt', 'ampusdt', 'ancusdt', 'ankrusdt', 'antusdt', 'apeusdt', 'api3usdt', 'arusdt', 'arpausdt',
    'asrusdt', 'astrusdt', 'atausdt', 'atmusdt', 'atomusdt', 'auctionusdt', 'audusdt', 'audiousdt', 'autousdt', 'avausdt', 'avaxusdt', 'axsusdt',
    'badgerusdt', 'bakeusdt', 'balusdt', 'bandusdt', 'barusdt', 'batusdt', 'bchusdt', 'belusdt', 'betausdt', 'bicousdt', 'bifiusdt', 'blzusdt',
    'bntusdt', 'bnxusdt', 'bondusdt', 'bswusdt', 'btcstusdt', 'btgusdt', 'burgerusdt', 'c98usdt', 'cakeusdt', 'celousdt', 'celrusdt',
    'cfxusdt', 'chessusdt', 'chrusdt', 'chzusdt', 'cityusdt', 'ckbusdt', 'clvusdt', 'cocosusdt', 'compusdt', 'cosusdt', 'cotiusdt', 'creamusdt',
    'crvusdt', 'ctkusdt', 'ctsiusdt', 'ctxcusdt', 'cvcusdt', 'cvpusdt', 'cvxusdt', 'darusdt', 'dashusdt', 'datausdt', 'degousdt', 'dentusdt', 'dexeusdt',
    'dfusdt', 'dgbusdt', 'diausdt', 'dntusdt', 'dockusdt', 'dodousdt', 'dotusdt', 'drepusdt', 'duskusdt', 'dydxusdt', 'egldusdt', 'elfusdt',
    'enjusdt', 'ensusdt', 'eosusdt', 'epxusdt', 'ernusdt', 'etcusdt', 'eurusdt', 'farmusdt', 'fetusdt', 'fidausdt', 'filusdt', 'fiousdt',
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
    'superusdt', 'sushiusdt', 'sxpusdt', 'sysusdt', 'tfuelusdt', 'thetausdt', 'tkousdt', 'tlmusdt', 'tomousdt', 'tornusdt', 'trbusdt', 'tribeusdt',
    'troyusdt', 'trxusdt', 'tusdusdt', 'tvkusdt', 'twtusdt', 'uftusdt', 'umausdt', 'unfiusdt', 'uniusdt', 'ustcusdt', 'utkusdt', 'vetusdt', 'vidtusdt',
    'voxelusdt', 'wavesusdt', 'waxpusdt', 'wingusdt', 'woousdt', 'wrxusdt', 'xecusdt', 'xlmusdt', 'xmrusdt', 'xnousdt', 'xtzusdt', 'xvgusdt',
    'xvsusdt', 'yfiusdt', 'yfiiusdt', 'yggusdt', 'zecusdt', 'zenusdt', 'zilusdt', 'zrxusdt']

export const axiosOrder = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
    },
})
const axiosInstance = axios.create({
    baseURL: 'https://api3.binance.com/',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const getCoins = () => {
    return axiosInstance.get('api/v3/ticker/price')
}
export const algorithm = (previosPrice: number, currentPrice: number) => {
    return (currentPrice - previosPrice) / currentPrice * 100 > 2
}
