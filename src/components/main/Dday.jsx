import React from 'react';
import DdayTimer from '../dday/DdayTimer';
import useGsap from '../../features/hooks/gsap/useGsap';
import { bride, bridegroom } from '../../shared/environment/environment';

const Dday = () => {
    const {app, title} = useGsap();
    return (
        <section ref={app}>
            <div className='inner'>
                <h1 className='title' style={{ fontFamily: "Sumunjang_BodyM"}} ref={title}>{bridegroom.replace(/ /g,"").slice(1, 3)} ♥ {bride.replace(/ /g,"").slice(1, 3)} 결혼식까지</h1>
                <DdayTimer />
            </div>
        </section>
    );
};

export default Dday;