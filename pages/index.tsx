import axios from "axios";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useRef, useState } from "react";
import * as crypto from "crypto";

const axiosInstance = axios.create({
  baseURL: 'https://api3.binance.com/',
  headers: {
    'Content-Type': 'application/json',
  },
})
const altCoins = ['1inchusdt', 'aaveusdt', 'acausdt', 'achusdt', 'acmusdt', 'adausdt', 'adxusdt', 'aergousdt', 'agldusdt', 'akrousdt', 'alcxusdt', 'algousdt', 'aliceusdt', 'alpacausdt', 'alphausdt', 'alpineusdt', 'ampusdt', 'ancusdt', 'ankrusdt', 'antusdt', 'apeusdt', 'api3usdt', 'arusdt', 'arpausdt', 'asrusdt', 'astrusdt', 'atausdt', 'atmusdt', 'atomusdt', 'auctionusdt', 'audusdt', 'audiousdt', 'autousdt', 'avausdt', 'avaxusdt', 'axsusdt', 'badgerusdt', 'bakeusdt', 'balusdt', 'bandusdt', 'barusdt', 'batusdt', 'bchusdt', 'belusdt', 'betausdt', 'bicousdt', 'bifiusdt', 'blzusdt', 'bnbusdt', 'bntusdt', 'bnxusdt', 'bondusdt', 'bswusdt', 'btcusdt', 'btcstusdt', 'btgusdt', 'bttcusdt', 'burgerusdt', 'c98usdt', 'cakeusdt', 'celousdt', 'celrusdt', 'cfxusdt', 'chessusdt', 'chrusdt', 'chzusdt', 'cityusdt', 'ckbusdt', 'clvusdt', 'cocosusdt', 'compusdt', 'cosusdt', 'cotiusdt', 'creamusdt', 'crvusdt', 'ctkusdt', 'ctsiusdt', 'ctxcusdt', 'cvcusdt', 'cvpusdt', 'cvxusdt', 'darusdt', 'dashusdt', 'datausdt', 'degousdt', 'dentusdt', 'dexeusdt', 'dfusdt', 'dgbusdt', 'diausdt', 'dntusdt', 'dockusdt', 'dodousdt', 'dogeusdt', 'dotusdt', 'drepusdt', 'duskusdt', 'dydxusdt', 'egldusdt', 'elfusdt', 'enjusdt', 'ensusdt', 'eosusdt', 'epxusdt', 'ernusdt', 'etcusdt', 'ethusdt', 'eurusdt', 'farmusdt', 'fetusdt', 'fidausdt', 'filusdt', 'fiousdt', 'firousdt', 'fisusdt', 'flowusdt', 'fluxusdt', 'forusdt', 'forthusdt', 'frontusdt', 'ftmusdt', 'fttusdt', 'fxsusdt', 'galausdt', 'galusdt', 'gbpusdt', 'ghstusdt', 'glmrusdt', 'gmtusdt', 'grtusdt', 'gtcusdt', 'gtousdt', 'hardusdt', 'hbarusdt', 'highusdt', 'hiveusdt', 'hntusdt', 'hotusdt', 'icpusdt', 'icxusdt', 'idexusdt', 'ilvusdt', 'imxusdt', 'injusdt', 'iostusdt', 'iotausdt', 'iotxusdt', 'iqusdt', 'jasmyusdt', 'joeusdt', 'jstusdt', 'juvusdt', 'kavausdt', 'kdausdt', 'keyusdt', 'klayusdt', 'kncusdt', 'kp3rusdt', 'ksmusdt', 'laziousdt', 'ldousdt', 'leverusdt', 'linausdt', 'linkusdt', 'litusdt', 'lokausdt', 'lptusdt', 'lrcusdt', 'lskusdt', 'ltcusdt', 'ltousdt', 'lunausdt', 'luncusdt', 'manausdt', 'maskusdt', 'maticusdt', 'mblusdt', 'mboxusdt', 'mcusdt', 'mdtusdt', 'mdxusdt', 'minausdt', 'mirusdt', 'mkrusdt', 'mlnusdt', 'mobusdt', 'movrusdt', 'mtlusdt', 'multiusdt', 'nearusdt', 'neousdt', 'nexousdt', 'nknusdt', 'nmrusdt', 'nulsusdt', 'oceanusdt', 'ogusdt', 'ognusdt', 'omusdt', 'omgusdt', 'oneusdt', 'ontusdt', 'ookiusdt', 'opusdt', 'ornusdt', 'oxtusdt', 'paxgusdt', 'peopleusdt', 'perpusdt', 'phausdt', 'phbusdt', 'plausdt', 'polsusdt', 'polyusdt', 'pondusdt', 'portousdt', 'powrusdt', 'promusdt', 'psgusdt', 'pundixusdt', 'pyrusdt', 'qiusdt', 'qntusdt', 'qtumusdt', 'quickusdt', 'radusdt', 'rareusdt', 'rayusdt', 'reefusdt', 'reiusdt', 'renusdt', 'requsdt', 'rndrusdt', 'roseusdt', 'rsrusdt', 'runeusdt', 'rvnusdt', 'sandusdt', 'santosusdt', 'scusdt', 'scrtusdt', 'sfpusdt', 'shibusdt', 'sklusdt', 'slpusdt', 'snxusdt', 'solusdt', 'spellusdt', 'srmusdt', 'steemusdt', 'stmxusdt', 'storjusdt', 'stptusdt', 'straxusdt', 'stxusdt', 'sunusdt', 'superusdt', 'sushiusdt', 'sxpusdt', 'sysusdt', 'tusdt', 'tfuelusdt', 'thetausdt', 'tkousdt', 'tlmusdt', 'tomousdt', 'tornusdt', 'trbusdt', 'tribeusdt', 'troyusdt', 'trxusdt', 'tusdusdt', 'tvkusdt', 'twtusdt', 'uftusdt', 'umausdt', 'unfiusdt', 'uniusdt', 'ustcusdt', 'utkusdt', 'vetusdt', 'vidtusdt', 'voxelusdt', 'wavesusdt', 'waxpusdt', 'wingusdt', 'woousdt', 'wrxusdt', 'xecusdt', 'xlmusdt', 'xmrusdt', 'xnousdt', 'xrpusdt', 'xtzusdt', 'xvgusdt', 'xvsusdt', 'yfiusdt', 'yfiiusdt', 'yggusdt', 'zecusdt', 'zenusdt', 'zilusdt', 'zrxusdt']
// console.log(altCoin.length)
const getCoins = () => {
  return axiosInstance.get('api/v3/ticker/price')
}

export default function Home() {
  let sourc = useRef<HTMLAudioElement>(null)
  const play = () => {
    sourc.current?.play()
  }
  // console.log(sourc)
  let [coins, setCoins] = useState<any[]>([]);
  const [priceUp, setPriceUp] = useState<boolean>(false)
  const [start, setStart] = useState<boolean>(false)

  const buy = (coin: string, price: string) => {
    axios.post('https://api.binance.com/api/v3/order', {
      symbol: `${coin}BUSD`,
      side: 'BUY',
      type: 'MARKET',
      quantity: 100,
      price: price,
      date: new Date()
    }, {
      headers: {
        'X-MBX-APIKEY': "hgc"
      }
    }).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.log(error);
    })
  }

  const getBalance = () => {
    // axios.post('https://api.binance.com/api/v3/binancepay/openapi/balance', {"wallet": "SPOT_WALLET","currency": "BUSD"}, { 
    //   headers: { 
    //   'X-MBX-APIKEY': "6sVc6w01C6Z2SwSnrJrEXJmZmKExlLjCnwRnQ8KHSw02I5WLGqstjP2f4V64oPmm" 
    // } })
    //   .then(response=>console.log(response.data))
    //   .catch(error=> console.log(error))const crypto = require('crypto');

    // var ourRequest = new XMLHttpRequest();
    // ourRequest.open('GET', url, true);
    // ourRequest.setRequestHeader('X-MBX-APIKEY', keys['APIkey']);

    // var arrayCleaned = [];
    // ourRequest.onload = function () {
    //   // Convert data string to an object
    //   var data = JSON.parse(ourRequest.responseText); // string -->to Object

    //   arrayCleaned = data.balances.map(ele => {
    //     return {
    //       "asset": ele.asset,
    //       "free": ele.free
    //     }
    //   })
    //   console.log(arrayCleaned);
    // };

    // ourRequest.send();


    var burl = "https://api.binance.com";
    var endPoint = "/api/v3/account";
    var dataQueryString = "timestamp=" + Date.now();
    var keys = {
      "APIkey": '6sVc6w01C6Z2SwSnrJrEXJmZmKExlLjCnwRnQ8KHSw02I5WLGqstjP2f4V64oPmm',
      "SECRETkey": 'm1K7YusHefwnPveyIMPuZGCOPYPUUKitnfeIiZa3tU41oR6evMWIbgQWXftW2qpW'
    }
    var signature = crypto.createHmac('sha256', keys['SECRETkey']).update(dataQueryString).digest('hex');
    var url = burl + endPoint + '?' + dataQueryString + '&signature=' + signature;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', url, true);
    ourRequest.setRequestHeader('X-MBX-APIKEY', keys['APIkey']);
    var arrayCleaned = [];
    ourRequest.onload = function () {
      // Convert data string to an object
      var data = JSON.parse(ourRequest.responseText); // string -->to Object

      arrayCleaned = data.balances.map((ele: { asset: any; free: any; }) => {
        return {
          "asset": ele.asset,
          "free": ele.free
        }
      })
      console.log(arrayCleaned);
    };

    ourRequest.send()
  }

  useEffect(() => {

    setInterval(() => {
      getCoins().then(response => {
        let arr = response.data.filter((item: { symbol: string }) => altCoins.includes(item.symbol.toLocaleLowerCase()))
          .sort((a: { symbol: string; }, b: { symbol: string; }) => a.symbol.localeCompare(b.symbol))
        setCoins((prevState) => {
          prevState.length > 1 && prevState.shift();
          return [...prevState, arr]
        })
      })
    }, 120000)
  }, [])

  return (
    <section>
      <h1>Отображено монет {coins[1] && coins[1].length}</h1>
      <audio controls ref={sourc}><source src="/bell_ring.mp3" type="audio/mp3" /></audio>
      <button onClick={() => play()}>click</button>
      <button onClick={() => getBalance()}>getBalance</button>
      <main>
        {coins[1] && coins[1].map((item: { symbol: string; price: any; }, index: number) =>
          <div key={index}>
            <>
              {/* {(item.price - coins[0][index].price) / item.price * 100 > 3 && buy(item.symbol.replace("USDT", ""), item.price)} */}
              {(item.price - coins[0][index].price) / item.price * 100 > 3 && getBalance()}
              <div key={index} className={(item.price - coins[0][index].price) / item.price * 100 > 3 ? "priceUP" : ""}>
                <h3>{item.symbol.replace("USDT", "")}</h3>
                <p >
                  {Number(item.price) >= 1 ? Number(item.price) <= 10 ? Number(item.price).toFixed(1) : Number(item.price).toFixed(0) : Number(item.price).toFixed(6)}
                </p>
              </div>
              {(item.price - coins[0][index].price) / item.price * 100 > 3 && play()}
            </>
          </div>
        )}
      </main>
    </section>
  )
}
