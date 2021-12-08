import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTokens, setTokens, demo } from './tokenSlice'
import { selectUser } from '../../../app/userSlice'
import axios from 'axios'
import './ListTokens.scss'
function ListTokens() {
    const tokens = useSelector(selectTokens);
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    useEffect(() => {
        axios.get(`http://localhost:4000/tokens/${user.id}`).then(res => {
            dispatch(setTokens(res.data))
        })
    },[dispatch, user])
    return (
        <div className='token-list'>
            <h3 className='white'>tokeens</h3>
            {tokens.map(token => (
                <div className='token' key={token.id}> 

                    <div className="head">
                        <h4>{token.name}</h4>
                        <h4>{token.id} copy</h4>
                    </div>
                    <p >amount {token.amount} birr</p>

                    <div className="table">
                    <div className="r1 row">
                            <span className="col-1 col">user name</span>
                            <span className="col-1 col">User id</span>
                            <span className="col-1 col"> amount</span>
                        </div>
                        {token.usernames.map(username => (
                            <div className="r2 row">
                                <span className="col-1 col">{username}</span>
                                <span className="col-1 col">{token.users[token.usernames.indexOf(username)]}</span>
                                <span className="col-1 col">{token.amount}</span>
                            </div>
                        ))}
                        
                    </div>
                </div>
                
            ))}
        </div>
    )
}

export default ListTokens
