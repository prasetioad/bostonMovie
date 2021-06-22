import axios from 'axios'
import React, { useEffect } from 'react'
import './style.css'

export default function Index() {
    useEffect(() => {
        // axios.get(`${}`)
    }, [])
    return (
        <div className="detilMainContainerTop">
            <div className="detilContainerTop">
                <div className="detilTopLeft">
                    <div className="detilTopLeftImgWrapper">
                        <img src="./asset/Rectangle139.png" alt="" />
                    </div>
                    <div className="detilTopLeftImgDesc">
                        <div className="imgDetilProv">
                            <img src="./asset/107393948_3142143759210511_6109776435383560298_n.png" alt="image" />
                        </div>
                        <div className="imgDetikDescription">
                            <p>Now Streaming</p>
                            <span>Watch Now</span>
                        </div>
                    </div>
                </div>
                <div className="detiTopRight">
                    <div className="detilTopRightWrapper">
                        <p>The Walking Dead <span className='title'>(2010)</span></p>
                        <p><span>TV-MA</span>Action & Adventure, Drama, Sci-Fi & Fantasy • 42m</p>
                    </div>
                    <div className="userScoreDetil">
                        <div className="userScoreDetilObjek">
                            <p>score</p>
                        </div>
                        <div className="userScoreDetilObjek">
                            <p>icon</p>
                        </div>
                        <div className="userScoreDetilObjek">
                            <p>icon</p>
                        </div>
                        <div className="userScoreDetilObjek">
                            <p>icons</p>
                        </div>
                        <div className="userScoreDetilObjek">
                            <p>icon</p>
                        </div>
                        <div className="userScoreDetilObjek">
                            <p>icon  & Play Trailer</p>
                        </div>
                    </div>
                    <div className="detilMoto">
                        <p>Fight the dead. Fear the living.</p>
                    </div>
                    <div className="detilOverView">
                        <span>Overview</span>
                        <p>Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.</p>
                    </div>
                    <div className="detilCreator">
                        <span>Frank Darabont</span>
                        <p>Creator</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
