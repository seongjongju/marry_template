import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lettering from '../svg/Lettering';

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
                        <p className='visual__name'>허수경</p>
                        <span className='visual__and'>그리고</span>
                        <p className='visual__name'>김경윤</p>
                    </div>
                    <p className='text-body-1'>
                        2026.06.14 일요일 PM 12:10 <br />
                        더뉴컨벤션 2층 더뉴홀
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Visual;