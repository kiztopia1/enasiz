import React from 'react'
import { Link } from 'react-router-dom';
import './index.scss'
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {error: ''}
        this.handelSubmit = this.handelSubmit.bind(this)
    }

    handelSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target)
        console.log(data.get('username'))
    }
    render () {
        return ( 
            <div className='main'>
                
                <div className="cont">
                
                <h2>Login</h2>
                <form onSubmit={this.handelSubmit}>
                    <div className="input-cont">
                        <label htmlFor="username">user name</label>
                        <input type="text" name="username" id="username" required='true' />
                    </div>
                    <div className="input-cont">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required='true'/>
                    </div>
                    <p className="error">{this.state.error}</p>
                    
                    <button type="submit">Sign up</button>
                    <div className="bottom-nav">
                        <Link to='/signup'>create new account</Link>
                    </div>
                </form>
                </div>
                
            </div>
        )
        }
}

export default Login
