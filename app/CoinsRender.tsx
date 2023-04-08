import React from 'react'
interface CoinsData {
    coins: [
        { symbol: string, price: string }
    ]
}
const CoinsRender = ({ coins }: CoinsData) => {
    return (
        <div className='main'>
            {coins.map((item: { symbol: string; price: string; }, index: number) =>
                <>
                    <div key={index} >
                        <h3>{item.symbol.replace("usdt", "").toUpperCase()}</h3>
                        <p >
                            {Number(item.price).toFixed(5)}
                        </p>
                    </div>
                </>
            )}
        </div>
    )
}

export default CoinsRender