import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'
class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {error: ''}
        this.handelSubmit = this.handelSubmit.bind(this)
    }

    handelSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target)
        const username = data.get('username').trim();
        const password1 = data.get('password');
        const password2 = data.get('password2');
        if (password1 === password2){
            console.log('done!')
        }else{
            this.setState({error: 'password doesnot match'})
            console.log(username, 'add something correct')
        }
    }
    render () {
        return ( 
            <div className='main'>
                
                <div className="cont">
                
                <h2>Sign up</h2>
                <form onSubmit={this.handelSubmit}>
                    <div className="input-cont">
                        <label htmlFor="username">user name</label>
                        <input type="text" name="username" id="username" required='true' />
                    </div>
                    <div className="input-cont">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required='true'/>
                    </div>
                    <div className="input-cont">
                        <label htmlFor="password2">confirm password</label>
                        <input type='password' name='password2' id="password2" required='true'/>
                    </div>
                    <p className="error">{this.state.error}</p>
                    
                    <button type="submit">Sign up</button>
                </form>

                <div className="bottom-nav">
                        <Link to='/login'>already have an account?</Link>
                    </div>
                </div>
                
            </div>
        )
        }
}

export default Signup
