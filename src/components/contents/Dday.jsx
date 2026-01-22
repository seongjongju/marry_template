import React from 'react';
import DdayTimer from '../../features/dday/components/DdayTimer';
import useGsap from '../../features/gsap/hook/useGsap';

const Dday = () => {
    const {app, title} = useGsap();
    return (
        <section ref={app}>
            <div className='inner'>
                <h1 className='title' style={{ fontFamily: "Sumunjang_BodyM"}} ref={title}>경윤 ♥ 수경 결혼식 까지</h1>
                <DdayTimer />
            </div>
        </section>
    );
};

export default Dday;