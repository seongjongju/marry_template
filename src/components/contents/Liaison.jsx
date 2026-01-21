import React from 'react';
import LiaisonDropDown from '../../features/liaison/components/LiaisonDropDown';
import useGsap from '../../features/gsap/hook/useGsap';

const Liaison = () => {
    const {app, liaison} = useGsap();

    return (
        <section ref={app}>
            <div className='inner' ref={liaison}>
                <div className='liaison' >
                    <div className='liaison__item'>
                        <p className='liaison__name'>
                            신랑 <br />
                            김 경 윤
                        </p>
                        <div className='liaison__icons'>
                            <a href="tel:010-8690-3363">
                                <img src="/icons/tel_ico.svg" alt="전화" />
                            </a>
                            <a href="sms:010-8690-3363">
                                <img src="/icons/sms_ico.svg" alt="문자" />
                            </a>
                        </div>
                    </div> {/* .liaison__item : end */}
                    <div className='liaison__item'>
                        <p className='liaison__name'>
                            신부 <br />
                            허 수 경
                        </p>
                        <div className='liaison__icons'>
                            <a href="tel:010-8690-3363">
                                <img src="/icons/tel_ico.svg" alt="전화" className='liaison__icon' />
                            </a>
                            <a href="sms:010-8690-3363">
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