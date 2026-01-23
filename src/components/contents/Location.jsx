import React from 'react';
import useGsap from '../../features/gsap/hook/useGsap';
import FeatLocation from '../../features/location/components/FeatLocation';
import { place, placeFloor, placeHall, placeName, placeTel } from '../../shared/environment/environment';

const Location = () => {
    const {app, title, textBody_1, textBody_0} = useGsap();

    return (
        <section ref={app}>
            <div className='inner'>
                <h1 className='title' ref={title}>LOCATION</h1>
                <p className='text-body-1 text-center text-gap-0' ref={textBody_1}>
                    {placeName} {placeFloor} {placeHall}
                </p>
                <p className='text-body-0 text-center' ref={textBody_0}>
                    {place} <br />
                    {placeTel}
                </p>
            </div>
            <FeatLocation />
        </section>
    );
};

export default Location;