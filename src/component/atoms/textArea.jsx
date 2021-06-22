import React from 'react'

function Index({title, func, name, val}) {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">{title}</label>
                    <textarea value={val} name={name} className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={func}></textarea>
                </div>
                </form>
        </div>
    )
}

export default Index
