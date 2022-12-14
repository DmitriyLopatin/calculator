import axios from "axios";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from "react";

const axiosInstance = axios.create({
  baseURL: 'https://api3.binance.com/',
  headers: {
    'Content-Type': 'application/json',
  },
})
const altCoin = ['1inchusdt', 'aaveusdt', 'acausdt', 'achusdt', 'acmusdt', 'adausdt', 'adxusdt', 'aergousdt', 'agldusdt', 'akrousdt', 'alcxusdt', 'algousdt', 'aliceusdt', 'alpacausdt', 'alphausdt', 'alpineusdt', 'ampusdt', 'ancusdt', 'ankrusdt', 'antusdt', 'apeusdt', 'api3usdt', 'arusdt', 'arpausdt', 'asrusdt', 'astrusdt', 'atausdt', 'atmusdt', 'atomusdt', 'auctionusdt', 'audusdt', 'audiousdt', 'autousdt', 'avausdt', 'avaxusdt', 'axsusdt', 'badgerusdt', 'bakeusdt', 'balusdt', 'bandusdt', 'barusdt', 'batusdt', 'bchusdt', 'belusdt', 'betausdt', 'bicousdt', 'bifiusdt', 'blzusdt', 'bnbusdt', 'bntusdt', 'bnxusdt', 'bondusdt', 'bswusdt', 'btcusdt', 'btcstusdt', 'btgusdt', 'bttcusdt', 'burgerusdt', 'c98usdt', 'cakeusdt', 'celousdt', 'celrusdt', 'cfxusdt', 'chessusdt', 'chrusdt', 'chzusdt', 'cityusdt', 'ckbusdt', 'clvusdt', 'cocosusdt', 'compusdt', 'cosusdt', 'cotiusdt', 'creamusdt', 'crvusdt', 'ctkusdt', 'ctsiusdt', 'ctxcusdt', 'cvcusdt', 'cvpusdt', 'cvxusdt', 'darusdt', 'dashusdt', 'datausdt', 'degousdt', 'dentusdt', 'dexeusdt', 'dfusdt', 'dgbusdt', 'diausdt', 'dntusdt', 'dockusdt', 'dodousdt', 'dogeusdt', 'dotusdt', 'drepusdt', 'duskusdt', 'dydxusdt', 'egldusdt', 'elfusdt', 'enjusdt', 'ensusdt', 'eosusdt', 'epxusdt', 'ernusdt', 'etcusdt', 'ethusdt', 'eurusdt', 'farmusdt', 'fetusdt', 'fidausdt', 'filusdt', 'fiousdt', 'firousdt', 'fisusdt', 'flowusdt', 'fluxusdt', 'forusdt', 'forthusdt', 'frontusdt', 'ftmusdt', 'fttusdt', 'fxsusdt', 'galausdt', 'galusdt', 'gbpusdt', 'ghstusdt', 'glmrusdt', 'gmtusdt', 'grtusdt', 'gtcusdt', 'gtousdt', 'hardusdt', 'hbarusdt', 'highusdt', 'hiveusdt', 'hntusdt', 'hotusdt', 'icpusdt', 'icxusdt', 'idexusdt', 'ilvusdt', 'imxusdt', 'injusdt', 'iostusdt', 'iotausdt', 'iotxusdt', 'iqusdt', 'jasmyusdt', 'joeusdt', 'jstusdt', 'juvusdt', 'kavausdt', 'kdausdt', 'keyusdt', 'klayusdt', 'kncusdt', 'kp3rusdt', 'ksmusdt', 'laziousdt', 'ldousdt', 'leverusdt', 'linausdt', 'linkusdt', 'litusdt', 'lokausdt', 'lptusdt', 'lrcusdt', 'lskusdt', 'ltcusdt', 'ltousdt', 'lunausdt', 'luncusdt', 'manausdt', 'maskusdt', 'maticusdt', 'mblusdt', 'mboxusdt', 'mcusdt', 'mdtusdt', 'mdxusdt', 'minausdt', 'mirusdt', 'mkrusdt', 'mlnusdt', 'mobusdt', 'movrusdt', 'mtlusdt', 'multiusdt', 'nearusdt', 'neousdt', 'nexousdt', 'nknusdt', 'nmrusdt', 'nulsusdt', 'oceanusdt', 'ogusdt', 'ognusdt', 'omusdt', 'omgusdt', 'oneusdt', 'ontusdt', 'ookiusdt', 'opusdt', 'ornusdt', 'oxtusdt', 'paxgusdt', 'peopleusdt', 'perpusdt', 'phausdt', 'phbusdt', 'plausdt', 'polsusdt', 'polyusdt', 'pondusdt', 'portousdt', 'powrusdt', 'promusdt', 'psgusdt', 'pundixusdt', 'pyrusdt', 'qiusdt', 'qntusdt', 'qtumusdt', 'quickusdt', 'radusdt', 'rareusdt', 'rayusdt', 'reefusdt', 'reiusdt', 'renusdt', 'requsdt', 'rndrusdt', 'roseusdt', 'rsrusdt', 'runeusdt', 'rvnusdt', 'sandusdt', 'santosusdt', 'scusdt', 'scrtusdt', 'sfpusdt', 'shibusdt', 'sklusdt', 'slpusdt', 'snxusdt', 'solusdt', 'spellusdt', 'srmusdt', 'steemusdt', 'stmxusdt', 'storjusdt', 'stptusdt', 'straxusdt', 'stxusdt', 'sunusdt', 'superusdt', 'sushiusdt', 'sxpusdt', 'sysusdt', 'tusdt', 'tfuelusdt', 'thetausdt', 'tkousdt', 'tlmusdt', 'tomousdt', 'tornusdt', 'trbusdt', 'tribeusdt', 'troyusdt', 'trxusdt', 'tusdusdt', 'tvkusdt', 'twtusdt', 'uftusdt', 'umausdt', 'unfiusdt', 'uniusdt', 'ustcusdt', 'utkusdt', 'vetusdt', 'vidtusdt', 'voxelusdt', 'wavesusdt', 'waxpusdt', 'wingusdt', 'woousdt', 'wrxusdt', 'xecusdt', 'xlmusdt', 'xmrusdt', 'xnousdt', 'xrpusdt', 'xtzusdt', 'xvgusdt', 'xvsusdt', 'yfiusdt', 'yfiiusdt', 'yggusdt', 'zecusdt', 'zenusdt', 'zilusdt', 'zrxusdt']
console.log(altCoin.length)
const getCoins = () => {
  return axiosInstance.get('api/v3/ticker/price')
}

export default function Home() {
  console.log(2)
  const [coins, setCoins] = useState<any[]>([]);

  useEffect(() => {
    console.log(34)
    setInterval(() => {
      getCoins().then(response => {
        let arr = response.data.filter((item: { symbol: string }) => altCoin.includes(item.symbol.toLocaleLowerCase()))
        console.log(arr)
        setCoins(arr.sort((a: { symbol: string; }, b: { symbol: string; }) => a.symbol.localeCompare(b.symbol)))
      })
    },60000) 
  }, [])

  return (
    <section>
      <h1>Отображено монет {coins.length}</h1>
      <main>
        {coins && coins.map((item, index) =>
          <div key={index}>
            <h3>{item.symbol.replace("USDT", "")}</h3>
            <p>{Number(item.price) >= 1 ? Number(item.price) <= 10 ? Number(item.price).toFixed(1) : Number(item.price).toFixed(0) : Number(item.price).toFixed(6)}</p>
          </div>
        )}
      </main>
    </section>
  )
}
