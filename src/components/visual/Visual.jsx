import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lettering from '../svg/Lettering';
import { bride, bridegroom, day, month, placeFloor, placeHall, placeName, time, week, year } from '../../shared/environment/environment';

gsap.registerPlugin(ScrollTrigger);

const Visual = () => {
    const [vhHeight, setVhHeight] = useState("100vh");

    //비주얼 영역이 핸드폰 기종에 따라 높이를 맞추는 함수
    useEffect(() => {
        const setFixedVh = () => {
            const vh = window.innerHeight;

            setVhHeight(vh);

            ScrollTrigger.refresh();
        };

        setFixedVh();
    }, []);

    return (
        <div id='visual' style={{ height: vhHeight }}>
            <Lettering />
            <div className='inner'>
                <div className='visual__detail'>
                    <div className='visual__client'>
                        <p className='visual__name'>{bridegroom}</p>
                        <span className='visual__and'>그리고</span>
                        <p className='visual__name'>{bride}</p>
                    </div>
                    <p className='text-body-1'>
                        {year}.{month}.{day} {week} {time} <br />
                        {placeName} {placeFloor} {placeHall}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Visual;