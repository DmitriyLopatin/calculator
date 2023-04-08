import { useEffect, useRef, useState } from "react";
import * as crypto from 'crypto'
import { altCoins, axiosOrder, getCoins, algorithm, mainCoins } from "../app/data";
import AltCoins from "../app/AltCoins";
import MainCoins from "../app/MainCoins";
// import WebSocket from 'ws'

// const Timer=()=> {
//   const [timeRemaining, setTimeRemaining] = useState(9); // 5 minutes in seconds
//   useEffect(() => {
//     timeRemaining > -1 ? setTimeout(() => {
//       setTimeRemaining(prevTime => prevTime - 1)
//     }, 1000) : setTimeRemaining(9);
//   }, [timeRemaining]);
//   console.log(timeRemaining)
//   const minutes = Math.floor(timeRemaining / 60);
//   const seconds = timeRemaining % 60;
//   return (

//   )
// }

;
// const streams = altCoins.map((symbol) => `${symbol}@trade`);

export default function Home() {
  // let [coins, setCoins] = useState<CoinsData[]>([{ symbol: '', price: [''] }]);
  // let [coins, setCoins] = useState<any>(() => altCoins.map(item => { return { symbol: item, price: '' } }));
  let sourc = useRef<HTMLAudioElement>(null)
  const play = () => {
    sourc.current?.play()
  }

  const buy = (coin: string) => {
    console.log(coin)
    axiosOrder.get(`?coin=${coin}`).then(res => console.log(res)).catch(err => console.log(err))
  }

  // useEffect(() => {

  //   const ws = new WebSocket(`wss://stream.binance.com:9443/ws`);

  //   ws.onopen = function () {
  //     console.log('WebSocket connected');
  //       ws.send(JSON.stringify({ method: 'SUBSCRIBE', params: streams, id: 1 }));
  //   }

  //   ws.onmessage = function (event) {
  //     // console.log(event.data)
  //     // console.log({ symbol: JSON.parse(event.data).s, price: JSON.parse(event.data).p });
  //     setCoins((prev: { symbol: any; }[])=>{
  //       return(
  //       prev.map((item: any) => {
  //         if(item.symbol.toUpperCase() == JSON.parse(event.data).s){
  //           return { symbol: item.symbol, price: JSON.parse(event.data).p }
  //         }else{
  //           return { symbol: item.symbol, price: item.price }
  //         }
  //       }))
  //     })
  //   }

  //   ws.onclose = function () {
  //     console.log('WebSocket disconnected');
  //   };

  //   ws.onerror = function (event) {
  //     console.error(event);
  //   };

  //   return () => {
  //     ws.close();
  //   };
  // }, [])
  // console.log(coins)
  return (
    <section>
      {/* <h1>Отображено монет {coins[1] && coins[1].length}</h1> */}
      <h1>Отображено монет {altCoins.concat(mainCoins).length}</h1>
      {/* <h2>Текуший баланс   {currentBalance[0].asset} : <span>{currentBalance[0].free}</span></h2>
      <h2>Текуший баланс  {currentBalance[1].asset} : <span>{currentBalance[1].free}</span></h2> */}
      <audio controls ref={sourc}><source src="/bell_ring.mp3" type="audio/mp3" /></audio>
      <button onClick={() => play()}>click</button>

      {/* <button onClick={() => buy()}>click</button> */}
      <MainCoins />
      <AltCoins />
    </section>
  )
}

// export const getServerSideProps: GetServerSideProps<Props> = async ()=> {
  // var keys = { // my Data
  //   APIkey: 'QUVQvQePWpjMCnawy2fd5g8IH1wgDoaKHon1aUWZU6MxZk4rsgY4bjMF33VAnbU7',
  //   SECRETkey: 'JbjMoJXvzxZ4gjyWI9Zwt6QRed1MP9THqQ5i6Sugx5lMr5SpC1qcUynUNfBO0Ph0'
  // }

  // var dataQueryString = "timestamp=" + Date.now();
  // var myHeaders = new Headers();
  // myHeaders.append("X-MBX-APIKEY", keys.APIkey);
  // var signature = crypto.createHmac('sha256', keys.SECRETkey).update(dataQueryString).digest('hex')
  // var requestOptions = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   redirect: 'follow'
  // };
  // //@ts-ignore
  // const balance = await fetch(`https://api.binance.com/api/v3/account?${dataQueryString}&signature=${signature}`, requestOptions)
  // const data = await balance.json()

  // return {
  //   props: {
  //     balanceData: data
  //   }
  // }

// }