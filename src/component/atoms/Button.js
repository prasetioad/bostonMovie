import React from 'react'

function Index({color, backcolor, width, height, title, func}) {
    return (
        <div>
            <button onClick={func} style={{color:color, backgroundColor:backcolor, width:width, height:height, borderRadius:'6px', border:'none'}}>{title}</button>
        </div>
    )
}

export default Index
