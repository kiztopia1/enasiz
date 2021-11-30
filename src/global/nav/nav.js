import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

class Nav extends React.Component {

    render() {
        return (
            <nav>

                <Link to='/' ><img src="imgs/logoDark.svg" alt="" className="logo" /></Link>
                
                <span className='white menu'>menu</span>
                <div className="slide">
                    <img src="imgs/cross.svg" alt="X" className='cross' />
                    <ul>
                        <Link to='/login'>Login</Link>
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