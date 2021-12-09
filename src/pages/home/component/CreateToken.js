import React,{useState, useRef} from 'react'
import './CreateToken.scss'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import {setToken} from './tokenSlice'
import {selectUser, updateBalance} from '../../../app/userSlice'
import ConnectToken from './ConnectToken'

function CreateToken() {
    const dispatch = useDispatch()
    const [AmountStatus, setAmountStatus] = useState(false)
    const name = useRef('')
    const amount = useRef('')
    const user = useSelector(selectUser);
    const createToggler = () => {
        setAmountStatus(!AmountStatus)
    }
    const tokenHandler = () => {
        const newToken = {
            name: name.current.value,
            amount: amount.current.value,
            userID: user.id,
            username: user.username
        }
        axios.post('http://localhost:4000/tokens/add', newToken).then(res => {
            dispatch(setToken(res.data))
            dispatch(updateBalance({amount: res.data.amount}))
        })
    }

    return (
        <div className='create-token'>
            
            <div className="create">
                <span className="create-btn" onClick={createToggler}>Creat Token</span>
                <div className={"form " + (AmountStatus? ' show' : ' hide')}>
                    <div>
                        <label htmlFor="amount">token Name</label>
                        <input type="text" name="amount" id="amount" ref={name}/> <span> birr</span>
                    </div>
                    <div>
                        <label htmlFor="amount">amount</label>
                        <input type="text" name="amount" id="amount" ref={amount}/> <span> birr</span>
                    </div>
                    <button className='btn' onClick={tokenHandler}>create token</button>
                </div>
            </div>
            <ConnectToken/>
        </div>
    )
}

export default CreateToken
