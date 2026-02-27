import React from 'react';
import LiaisonDropDown from '../liaison/LiaisonDropDown';
import useGsap from '../../features/hooks/gsap/useGsap';
import { bride, bridegroom, bridegroomTel, brideTel } from '../../shared/environment/environment';

const Liaison = () => {
    const {app, liaison} = useGsap();

    return (
        <section ref={app}>
            <div className='inner' ref={liaison}>
                <div className='liaison' >
                    <div className='liaison__item'>
                        <p className='liaison__name'>
                            신랑 <br />
                            {bridegroom}
                        </p>
                        <div className='liaison__icons'>
                            <a href={`tel:${bridegroomTel}`}>
                                <img src="/icons/tel_ico.svg" alt="전화" />
                            </a>
                            <a href={`sms:${bridegroomTel}`}>
                                <img src="/icons/sms_ico.svg" alt="문자" />
                            </a>
                        </div>
                    </div> {/* .liaison__item : end */}
                    <div className='liaison__item'>
                        <p className='liaison__name'>
                            신부 <br />
                            {bride}
                        </p>
                        <div className='liaison__icons'>
                            <a href={`tel:${brideTel}`}>
                                <img src="/icons/tel_ico.svg" alt="전화" className='liaison__icon' />
                            </a>
                            <a href={`sms:${brideTel}`}>
                                <img src="/icons/sms_ico.svg" alt="문자" className='liaison__icon' />
                            </a>
                        </div>
                    </div> {/* .liaison__item : end */}
                </div> {/* .liaison : end */}

                <LiaisonDropDown />
            </div>
        </section>
    );
};

export default Liaison;