import React from 'react'
import {Link} from 'react-router-dom'
import './aside.scss'
function Aside() {
    return (
        <div className='aside'>
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
    )
}

export default Aside
