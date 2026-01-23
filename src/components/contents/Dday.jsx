import React from 'react';
import DdayTimer from '../../features/dday/components/DdayTimer';
import useGsap from '../../features/gsap/hook/useGsap';
import { bride, bridegroom } from '../../shared/environment/environment';

const firstName = {
    bridegroom: bridegroom.replace(/ /g,"").slice(1, 3),
    bride: bride.replace(/ /g,"").slice(1, 3),
};

console.log(firstName)

const Dday = () => {
    const {app, title} = useGsap();
    return (
        <section ref={app}>
            <div className='inner'>
                <h1 className='title' style={{ fontFamily: "Sumunjang_BodyM"}} ref={title}>{firstName.bridegroom} ♥ {firstName.bride} 결혼식까지</h1>
                <DdayTimer />
            </div>
        </section>
    );
};

export default Dday;