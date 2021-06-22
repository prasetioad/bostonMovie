import React from 'react'
import Navbar from '../../component/moleculs/Navbar'
import TopHome from '../../component/organism/home/homeTop'
import HomePopTop from '../../component/organism/home/homePopuler'
import HomeFreeToWatch from '../../component/organism/home/homeFreeToWatch'
import HomeLatesTrailer from '../../component/organism/home/HomeLatestTrailer'

function Index() {
    return (
        <div>
            <Navbar />
            <TopHome />
            <HomePopTop />
            <HomeFreeToWatch />
            <HomeLatesTrailer />
        </div>
    )
}

export default Index
