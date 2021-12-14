import React from 'react'
import './home.scss'
import Aside from '../../global/nav/aside'
import Nav from '../../global/nav/nav'
import CreateToken from './component/CreateToken'
import ListToken from './component/ListTokens'
function Home() {
    return (
        <div className='home'>
            <Nav/>
            <div className='main-div'>
                    <Aside></Aside>
                <div>
                    <CreateToken/>
                    <ListToken/>
                </div>
            </div>
            
        </div>
    )
}

export default Home
