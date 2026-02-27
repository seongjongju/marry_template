import React from 'react';
import useGsap from '../../features/hooks/gsap/useGsap';

const Saying = () => {   
    const {app, saying} = useGsap(); 
    return (
        <section ref={app}>
            <div className='inner' ref={saying}>
                <h1 className='title'>INVITATION</h1>
                <p className='text-body-1 color-b-0 text-center'>
                    매일 똑같은 일상이지만 <br />
                    너와 같이 함께라면 모든 게 달라질 거야<br /><br />

                    -신해철 ‘일상으로의 초대' 중-<br /><br />

                    서로의 일상에 소중한 존재가 된 저희 두 사람,<br />
                    이제는 삶을 함께하려 합니다.<br />
                    그 첫 걸음을 축하해 주시면<br />
                    감사하겠습니다.
                </p>
            </div>
        </section>
    );
};

export default Saying;