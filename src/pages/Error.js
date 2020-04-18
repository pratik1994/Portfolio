import React from 'react'
import Hero from '../component/Hero';
import BannerNoImage from '../component/BannerNoImage';
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <Hero>
            <BannerNoImage
            title="404" subtitle='Page not found'>
                <Link to='/' className='btn-primary'>Return to Profile</Link>
            </BannerNoImage>
        </Hero>
    )
}
