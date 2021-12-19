import React,{  useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import {useSelector} from 'react-redux';
import {selectUser} from '../../app/userSlice';

function Nav () {
    const user = useSelector(selectUser)
    const [status, setStatus] = useState();
    const [style, setStyle ] = useState();
    const menuHandler = () => {
        if(style === 'on'){
            setStyle('')
        }else {
            setStyle('on');
        }
    }
    console.log(user, 'nav user')
    return (
        <nav>

                <Link to='/' ><img src="imgs/logo.svg" alt="" className="logo" /></Link>
                <span>{user? user.balance + ' birrrr': 'aha'}</span>
                {user? user.username: 'login'}
                <span className='white menu' onClick={menuHandler}>menu</span>
                <div className={`slide  ${style}`}>
                    <img src="imgs/cross.svg" alt="X" className='cross' onClick={menuHandler}/>
                    <ul>
                        <Link to='/login'>login</Link>
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

export default Nav
