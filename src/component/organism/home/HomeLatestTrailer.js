import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Index() {
    const [data, setdData] = useState(null)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=f5dd0fe4bc1ae638a690951d16f5f6c9&language=en-US`)
        .then((res)=>{
            console.log(res);
            setdData([res.data]);
        })
        .catch((err)=>{
            console.log(err.response);
        })
        const target = document.getElementById('homePopularBodyStream')
        target.style.background= ' black'
    }, [])

    const popularHandler = (tab) =>{
        var i;
        var x = document.getElementsByClassName("homePopularBody");
        for (i = 0; i < x.length; i++) {
          x[i].style.background = "#FF7314";  
        }
        if(tab == 'homePopularBodyStream'){
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f5dd0fe4bc1ae638a690951d16f5f6c9&language=en-US&page=1`)
        .then((res)=>{
            setdData(res.data.results);
        })
        .catch((err)=>{
            console.log(err.response);
        })
        document.getElementById(tab).style.background = "black";  
        }else if(tab == 'homePopularBodyTV'){
            axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=f5dd0fe4bc1ae638a690951d16f5f6c9&language=en-US&page=1`)
            .then((res)=>{
                console.log(res.data);
                setdData(res.data.results);
            })
            .catch((err)=>{
                console.log(err.response);
            })
            document.getElementById(tab).style.background = "black";  
            }
    }

    return (
        <div>
            <div className="homePopularContainerTrail" id='homePopularContainerTrail'>
                <div className="homePopullarLeftItemTrailer">
                    <div className="homePopularHead">
                        <span>Latest Trailers</span>
                    </div>
                    <div className="homePopularBody" id='homePopularBodyStream' onClick={()=>{popularHandler('homePopularBodyStream')}}>
                        <p>Streaming</p>
                    </div>
                    <div className="homePopularBody" id='homePopularBodyTV' onClick={()=>{popularHandler('homePopularBodyTV')}}>
                        <p>On TV</p>
                    </div>
                    <div className="homePopularBody">
                        <p>For Rent</p>
                    </div>
                    <div className="homePopularBody">
                        <p>In Theaters</p>
                    </div>
                </div>
                <div className="homePopullarRightItem">
                    {data !== null && data.map((item)=>{return(
                    <div className="homePoppularRightCard" onEnter>
                        <div className="hprTop" key={item.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="image" />
                        </div>
                        <div className="hprBot">
                            <span>{item.original_title}</span>
                            <p>{item.release_date}</p>
                        </div>
                    </div>
                    )})}
                </div>
            </div>
        </div>
    )
}

export default Index
