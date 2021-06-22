import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../../moleculs/Navbar/index'

function Index() {
    const history =useHistory()
    useEffect(() => {
        setTimeout(function(){  history.push('/'); }, 3000);
       
    }, [])
    return (
        <div>
            <Navbar />
            <div className="registerFinish">
                <h1>"Thank you for submit form"</h1>
            </div>
        </div>
    )
}

export default Index
