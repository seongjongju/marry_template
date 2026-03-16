import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lettering from '../svg/Lettering';
import { bride, bridegroom, day, month, placeFloor, placeHall, placeName, time, week, year } from '../../shared/environment/environment';
import LetteringTwo from '../svg/LetteringTwo';

gsap.registerPlugin(ScrollTrigger);

const Visual = () => {
    const [vhHeight, setVhHeight] = useState("100vh");

    useEffect(() => {
        const setFixedVh = () => {
            const vh = `${window.innerHeight + 10}px`;
            setVhHeight(vh);
            ScrollTrigger.refresh();
        };

        setFixedVh();
    }, []);

    return (
        <div id='visual' style={{ height: vhHeight, position: 'relative', }}>
            <LetteringTwo />
            <div className='inner'>
                <div className='visual__detail'>
                    <div className='visual__client'>
                        <p className='visual__name'>{bridegroom}</p>
                        <span className='visual__and'>그리고</span>
                        <p className='visual__name'>{bride}</p>
                    </div>
                    <p className='text-body-1'>
                        {year}년 {month}월 {day}일 {week} {time} <br />
                        {placeName} {placeFloor} {placeHall}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Visual;