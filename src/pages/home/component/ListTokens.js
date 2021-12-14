import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadTokens, selectTokens, setTokens } from './tokenSlice'
import { selectUser } from '../../../app/userSlice'
import axios from 'axios'
import './ListTokens.scss'
function ListTokens() {
    const [isUser, setIsUser] = useState(false)
    const tokens = useSelector(selectTokens);
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const loadingTokens = () => {
        axios.get(`http://localhost:4000/tokens/${user.id}/${user.username}`).then(res => {
            if(res.data.length !==0 ){
                dispatch(setTokens(res.data))
            }
        })
        dispatch(loadTokens())
    }
    useEffect(() => {
        if(isUser) {
            loadingTokens()
        }
    },[])
    const activationHandler = () => {
        
    }

    const data = (
        <div className='token-list'>
            <h3 className='white'>tokeens</h3>
            {tokens.map(token => (
                <div className='token' key={token.id}> 

                    <div className="head">
                        <h4>{token.name}</h4>
                        <h4>{token._id} copy</h4>
                    </div>
                    <div className="head">
                        <p >amount {token.amount} birr</p>
                        <p>{token.status}</p>
                    </div>
                    

                    <div className="table">
                    <div className="r1 row">
                            <span className="col-1 col">user name</span>
                            <span className="col-1 col">User id</span>
                            <span className="col-1 col"> amount</span>
                        </div>
                        {token.users.map(data => (
                            <div className="r2 row">
                                <span className="col-1 col">{data.username}</span>
                                <span className="col-1 col">{data.id}</span>
                                <span className="col-1 col">{token.amount}</span>
                            </div>
                        ))}
                        
                    </div>
                    <button onClick={activationHandler}>activate</button>
                </div>
                
            ))}
        </div>
    )
    return isUser ? data : 'aha'
}

export default ListTokens
