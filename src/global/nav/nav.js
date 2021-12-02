import React,{  } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import {selectUser} from '../../app/userSlice'
class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            status:false,
            class:'',
            user: selectUser
        };

        this.menuHandler = this.menuHandler.bind(this);
    }
    menuHandler(){
        if(this.state.class === 'on'){
            this.setState({class: ''})
        }else {
            this.setState({class: 'on'})
        }
    }
        render() {
        return (
            <nav>

                <Link to='/' ><img src="imgs/logo.svg" alt="" className="logo" /></Link>
                {this.user}
                <span className='white menu' onClick={this.menuHandler}>menu</span>
                <div className={`slide  ${this.state.class}`}>
                    <img src="imgs/cross.svg" alt="X" className='cross' onClick={this.menuHandler}/>
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