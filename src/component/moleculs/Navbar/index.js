import React, { useState } from 'react'
import  './style.css'
import {FaPlus, FaBell, FaPowerOff, FaSearch, FaTimes} from 'react-icons/fa'
import { Link, useHistory } from 'react-router-dom'

function Index() {
    const history = useHistory()
    const showMovie = ()=>{
        const target = document.getElementById('navBLIMovie')
        target.style.display = 'inline'
    }
    
    const [find, setfind] = useState(false)
    const [search, setsearch] = useState([])
    const handleFind =()=>{
        if(find == false){
            setfind(true)
        }else{
            setfind(false)
        }
    }
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#FF7314'}}>
         <div className="navbarBodyWrap">
            <a class="navbar-brand " href="#"><Link to="/" style={{color:'black', }}>BMovie</Link></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Movies
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">On Air</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    TV Shows
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Poppular</a>
                    <a class="dropdown-item" href="#">Airing Today</a>
                    <a class="dropdown-item" href="#">On Air</a>
                    <a class="dropdown-item" href="#">Top Rated</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    People
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Popular People</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    More
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Discussions</a>
                    <a class="dropdown-item" href="#">Leaderboard</a>
                    <a class="dropdown-item" href="#">Support</a>
                    <a class="dropdown-item" href="#">API</a>
                    </div>
                </li>
                </ul>
                <form class="form-inline my-12 my-lg-0" style={{width:'30%'}}>
                <div className="navbarBodyRight">
                    <div className="navbarBodyRightItem">
                        <FaPlus />
                    </div>
                    <div className="navbarBodyRightItem">
                        <p>EN</p>
                    </div>
                    <div className="navbarBodyRightItem">
                        <FaBell />
                    </div>
                    <div className="navbarBodyRightItem"  onClick={()=>{history.push('/signup')}}>
                        <FaPowerOff />
                    </div>
                    <div className="navbarBodyRightItem" onClick={()=>{handleFind()}}>
                        <FaSearch />
                    </div>
                </div>
                </form>
            </div>
            </div>
            </nav>
            {find == true && 
            <div className="searchCOloumn" style={{paddingLeft:'11%', paddingRight:'11%', backgroundColor:'white'}}>
                <div className="form-outline" style={{display:'flex', alignItems:'center'}}>
                    <FaSearch style={{fontSize:'16px'}}/>
                    <input placeholder='Search here ...' type="search" style={{outline:'none', border:'none', width:'100%', borderRadius:'6px', padding:'5px'}}/>
                    <FaTimes  style={{fontSize:'12px'}}/>
                </div>
                {search.length > 0 && search.map(item =>{return(
                    <div className="form-outline" style={{border:'0.5px solid grey'}}>
                        <p>{item}</p>
                    </div>
                )})}
            </div>
            }
            </div>
    )
}

export default Index
