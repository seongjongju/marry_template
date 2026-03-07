import React from 'react';
import ImpartRemittance from '../impart/ImpartRemittance';
import ImpartShare from '../impart/ImpartShare';
import useGsap from '../../features/hooks/gsap/useGsap';

const Impart = () => {
    const {app, title, textBody_1} = useGsap();

    return (
        <section ref={app}>
            <div className='inner2'>
                <h1 className='title title-gap-1' style={{ fontFamily: "Sumunjang_BodyM"}} ref={title}>신랑 & 신부에게 마음 전하기</h1>
                <p className='text-body-1 color-b-0 text-center title-gap-0' ref={textBody_1}>축복의 의미로 축의금을 전달해보세요.</p>
                
                <ImpartRemittance />
                <ImpartShare />
            </div>
        </section>
    );
};

export default Impart;