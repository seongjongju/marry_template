import React from 'react';
import Lettering from '../svg/Lettering';

const Visual = () => {
    return (
        <div id='visual'>
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