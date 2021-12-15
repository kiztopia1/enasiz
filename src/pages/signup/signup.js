import React,{useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import './index.scss'
import Nav from '../../global/nav/nav'


function Signup() {
    const [error, setError] = useState({})
    const refUsername = useRef(null)
    const refPassword = useRef(null)
    const refPassword1 = useRef(null)
    const handelSubmit =(event) => {
        event.preventDefault();

        const username = refUsername.current.value.trim();
        const password1 = refPassword.current.value;
        const password2 = refPassword1.current.value
        if (password1 === password2){

            let user = {
                username: username,
                password: password1
            }
            axios.post('http://localhost:4000/users/signup', user).then(res => {
                console.log(res)
            } )
            console.log('done!')
        }else{
            this.setState({error: 'password doesnot match'})
            console.log(username, 'add something correct')
        }
    }
    return (
        <div>
            <Nav/>
                <div className='main'>
                
                <div className="cont">
                
                <h2>Sign up</h2>
                <form onSubmit={handelSubmit}>
                    <div className="input-cont">
                        <label htmlFor="username">user name</label>
                        <input type="text" name="username" id="username" required='true' ref={refUsername}/>
                    </div>
                    <div className="input-cont">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required='true' ref={refPassword}/>
                    </div>
                    <div className="input-cont">
                        <label htmlFor="password2">confirm password</label>
                        <input type='password' name='password2' id="password2" required='true' ref={refPassword1} />
                    </div>
                    <p className="error"></p>
                    
                    <button type="submit">Sign up</button>
                </form>

                <div className="bottom-nav">
                        <Link to='/login'>already have an account?</Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Signup
