import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
class Nav extends React.Component {

    render() {
        return (
            <nav>
                <img src="imgs/logo.png" alt="" className="logo" />
                
                <div className="side-cont">
                    <span className='white'>kiztopia</span>
                    <Link to='/login'>Login</Link>
                </div>
                <div className="slide">
                    <ul>
                        <Link to='/'>My Account</Link>
                        <Link to='/'>Dashboard</Link>
                        <Link to='/'>generate token</Link>
                        <Link to='/'>connect</Link>
                        <Link to='/setting'>setting</Link>
                        <Link to='/logout'>LogOut</Link>
                    </ul>
                </div>
            </nav>
            
        )
    }
}

export default Nav