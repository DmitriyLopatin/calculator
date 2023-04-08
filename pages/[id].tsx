import axios from 'axios'
import React from 'react'
import * as crypto from 'crypto'

const Buy = (props: any) => {
    // console.log(props.orderData)
    console.log(props.id)

    return (
        <h1>Покупка</h1>
    )
}
export async function getServerSideProps({ query }: any) {
    const { id } = query
    // var keysBuy = {
    //     "APIkey": 'QUVQvQePWpjMCnawy2fd5g8IH1wgDoaKHon1aUWZU6MxZk4rsgY4bjMF33VAnbU7',
    //     "SECRETkey": 'JbjMoJXvzxZ4gjyWI9Zwt6QRed1MP9THqQ5i6Sugx5lMr5SpC1qcUynUNfBO0Ph0'
    // }
    // var myHeaders = new Headers();
    // myHeaders.append("X-MBX-APIKEY", keysBuy['APIkey']);
    // // var dataQueryString = `symbol=FIROUSDT&side=BUY&type=MARKET&quantity=5&timestamp=${Date.now()}`;
    // var dataQueryString = `symbol=FIROUSDT&side=BUY&type=MARKET&timestamp=${Date.now()}`;

    // var signature = crypto.createHmac('sha256', keysBuy['SECRETkey']).update(dataQueryString).digest('hex')
    // var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     redirect: 'follow',

    // };
    // //@ts-ignore
    // const orderBuy = await fetch(`https://api.binance.com/api/v3/order?${dataQueryString}&signature=${signature}`, requestOptions)
    // const orderData = await orderBuy.json()

    return {
        props: {
            // orderData: orderData,
            id: id,
            // signature: signature
        }
    }
}
export default Buy

