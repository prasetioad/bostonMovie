import React from 'react'
import './style.css'

function Index({type, backColor, color, width, padding, clas, value, title, name, func, pattern, val}) {
    return (
        <div className={`inputclas ${clas}`}>
            <p>{title}</p>
            <input value={val} pattern={pattern} onChange={func} name={name} placeholder={value} type={type} style={{backgroundColor:{backColor}, color:{color}, width:{width}, padding: {padding}}} required/>
        </div>
    )
}

export default Index
