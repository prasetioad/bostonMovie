import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

function Index() {
    const history = useHistory()
    const [data, setdData] = useState(null)

    const handleDetil=(id)=>{
        history.push(`/detil/${id}`)
    }
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f5dd0fe4bc1ae638a690951d16f5f6c9&language=en-US&page=1`)
        .then((res)=>{
            setdData(res.data.results);
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
            <div className="homePopularContainer">
                <div className="homePopullarLeftItem">
                    <div className="homePopularHead">
                        <span>Free To Watch</span>
                    </div>
                    <div className="homePopularBody" id='homePopularBodyStream' onClick={()=>{popularHandler('homePopularBodyStream')}}>
                        <p>Movies</p>
                    </div>
                    <div className="homePopularBody" id='homePopularBodyTV' onClick={()=>{popularHandler('homePopularBodyTV')}}>
                        <p>TV</p>
                    </div>
                </div>
                <div className="homePopullarRightItem">
                    {data !== null && data.map((item)=>{return(
                    <div className="homePoppularRightCard" onClick={()=>{handleDetil(item.id)}}>
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
