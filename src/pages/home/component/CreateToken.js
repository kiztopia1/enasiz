import React,{useState} from 'react'
import './CreateToken.css'
function CreateToken() {
    const [Amount, setAmount] = useState(0)
    const [AmountStatus, setAmountStatus] = useState(false)

    let createToggler = () => {
        setAmountStatus(!AmountStatus)
    }

    return (
        <div className='create-token'>
            <div className="create">
                <span className="create-btn" onClick={createToggler}>Creat Token</span>
                <div className={"form " + (AmountStatus? ' show' : ' hide')}>
                    <label htmlFor="amount">add amount</label>
                    <input type="text" name="amount" id="amount" /> <span> birr</span>
                </div>
            </div>
            <div className="connect">
            <span className="connect-btn">Connect</span>
            </div>
        </div>
    )
}

export default CreateToken
