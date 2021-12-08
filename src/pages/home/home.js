import React from 'react'
import Nav from '../../global/nav/nav'
import CreateToken from './component/CreateToken'
import ListToken from './component/ListTokens'
function Home() {
    return (
        <div>
            <Nav/>
            <CreateToken/>
            <ListToken/>
        </div>
    )
}

export default Home
