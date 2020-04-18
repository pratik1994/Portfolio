import React from 'react'
import Hero from '../component/Hero';
import BannerNoImage from '../component/BannerNoImage';
import {Link} from 'react-router-dom';
import ProjectContainer from '../component/ProjectContainer';
const Projects = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <BannerNoImage
            title='All Projects'>
                <Link to='/'className='btn-primary'>Return to Profile</Link>
            </BannerNoImage>
        </Hero>
        <ProjectContainer />
        </>

    )
}

export default Projects
