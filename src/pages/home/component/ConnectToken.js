import React,{useState, useRef} from 'react'
import './CreateToken.scss'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import {setToken} from './tokenSlice'
import {selectUser, updateBalance} from '../../../app/userSlice'


function ConnectToken() {
    const dispatch = useDispatch()
    const [AmountStatus, setAmountStatus] = useState(false)
    const id = useRef('')
    const user = useSelector(selectUser);
    const createToggler = () => {
        setAmountStatus(!AmountStatus)
    }
    
    const ConnectHandler = ()=> {
        const body = {tokenID: id.current.value, userID: user.id,username: user.username}
        console.log(body)
        axios.post('http://localhost:4000/tokens/connect', body).then(res => {
            console.log(res.data)
            if(! res.data.error){
                dispatch(setToken(res.data))
            }else{
                console.log(res.data.err)
            }
            
        })
    }
    return (
        <div className='connect'>
            <span className="create-btn" onClick={createToggler}>Connect</span>
            <div className={"form " + (AmountStatus? ' show' : ' hide')}>
                    <div>
                        <label htmlFor="amount">Token Id</label>
                        <input type="text" name="id" id="id" ref={id}/>
                    </div>
                    <button className='btn' onClick={ConnectHandler}>Connect</button>
                </div>
        </div>
    )
}

export default ConnectToken
