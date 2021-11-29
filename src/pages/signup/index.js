import React from 'react'

function Signup() {
    return (
        <div>
            <h1>enasiz</h1>

            <div className="cont">
            <h2>Sign up</h2>
            <form action="" method="post">
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

export default Signup
