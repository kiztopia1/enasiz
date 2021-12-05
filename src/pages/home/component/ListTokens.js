import React from 'react'
import { useSelector } from 'react-redux'
import { selectTokens } from './tokenSlice'
import './ListTokens.scss'
function ListTokens() {
    const tokens = useSelector(selectTokens);
    return (
        <div className='token-list'>
            {tokens.map(token => (
                <div className='token' key={token.id}> 

                    <div className="head">
                        <h4>{token.name}</h4>
                        <h4>{token.id} copy</h4>
                    </div>
                    <p>amount {token.amount} birr</p>

                    <div className="table">
                    <div className="r1 row">
                            <span className="col-1 col">user name</span>
                            <span className="col-1 col">User id</span>
                            <span className="col-1 col"> amount</span>
                        </div>
                        <div className="r2 row">
                            <span className="col-1 col">kiztopia1 <span className='online'></span> </span>
                            <span className="col-1 col">h34h-34h-34sf-94-</span>
                            <span className="col-1 col">1000</span>
                        </div>
                        <div className="r2 row">
                            <span className="col-1 col">alpha334</span>
                            <span className="col-1 col">ks3h-33h-34sf-24-</span>
                            <span className="col-1 col">1000</span>
                        </div>
                    </div>
                </div>
                
            ))}
        </div>
    )
}

export default ListTokens