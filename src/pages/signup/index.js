import React from 'react'

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {error: ''}
        this.handelSubmit = this.handelSubmit.bind(this)
    }

    handelSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target)
        const username = data.get('username');
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
            <div>
                <h1>enasiz</h1>
    
                <div className="cont">
                {this.state.error}
                <h2>Sign up</h2>
                <form onSubmit={this.handelSubmit}>
                    <div>
                        <label htmlFor="username">user name</label>
                        <input type="text" name="username" id="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div>
                        <label htmlFor="password2">confirm password</label>
                        <input type='password' name='password2' id="password2"/>
                    </div>
                    
                    <button type="submit">Sign up</button>
                </form>
                </div>
                
            </div>
        )
        }
}

export default Signup
