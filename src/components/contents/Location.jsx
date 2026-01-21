import React from 'react';
import useGsap from '../../features/gsap/hook/useGsap';

const Location = () => {
    const {app, title, textBody_1, textBody_0} = useGsap();

    return (
        <section ref={app}>
            <div className='inner'>
                <h1 className='title' ref={title}>LOCATION</h1>
                <p className='text-body-1 text-center text-gap-0' ref={textBody_1}>더뉴컨벤션 2층 더뉴홀</p>
                <p className='text-body-0 text-center' ref={textBody_0}>
                    서울특별시 강서구 공항대로36길 57 <br />
                    02.1661.3303
                </p>
            </div>
        </section>
    );
};

export default Location;