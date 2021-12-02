import React, { Fragment, useRef } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import Nav from '../../global/nav/nav';
import './index.scss'

const Login = () => {
    const dispatch = useDispatch()  
    const username = useRef(null)
    const password = useRef(null)
    handelSubmit(event){
        event.preventDefault();
        
        const username = username.current.value.trim();
        const password = password.current.value;
        let user = {
            username: username,
            password: password
        }
        axios.post('http://localhost:4000/users/login', user).then(res => {
            
        } )
        console.log('done!')
    }
    return(
        <Fragment>
                <Nav/>
                <div className='main'>
                
                <div className="cont">
                
                <h2>Login</h2>
                <form onSubmit={this.handelSubmit}>
                    <div className="input-cont">
                        <label htmlFor="username">user name</label>
                        <input type="text" name="username" id="username" required='true' ref={username}/>
                    </div>
                    <div className="input-cont">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required='true' ref={password}/>
                    </div>
                    <p className="error">{this.state.error}</p>
                    
                    <button type="submit">Sign up</button>
                    <div className="bottom-nav">
                        <Link to='/signup'>create new account</Link>
                    </div>
                </form>
                </div>
                
            </div>
            </Fragment>
    )
}

export default Login