import React, { useState } from 'react';
import { brideDad, brideDadTel, bridegroomDad, bridegroomDadTel, bridegroomMom, bridegroomMomTel, brideMom, brideMomTel } from '../../../shared/environment/environment';

const LiaisonDropDown = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div>
            <button 
                className='parents-liaison-button'
                onClick={() => setDropdown(prev => !prev)}
            >
                혼주에게 연락하기
                <img 
                    src="/icons/dropdown_arrow.svg"
                    alt="드롭다운 화살표" 
                    className='parents-liaison-button__arrow'
                    style={{
                        transform: dropdown ? "rotateX(180deg)" : "rotateX(0deg)"
                    }}
                />
            </button>

            <div 
                className='parents-liaison'
                style={{
                    maxHeight: dropdown ? "200px" : 0
                }}
            >
                <div className='parents-liaison__item'>
                    <p className='text-body-0'>신랑 측 혼주</p>
                    <div className='parents-liaison__parent'>
                        <p className='parents-liaison__name'>
                            <span>아버지</span> {bridegroomDad}
                        </p>
                        <div className='liaison__icons'>
                            <a href={`tel:${bridegroomDadTel}`}>
                                <img src="/icons/tel_ico.svg" alt="전화" className='liaison__icon' />
                            </a>
                            <a href={`sms:${bridegroomDadTel}`}>
                                <img src="/icons/sms_ico.svg" alt="문자" className='liaison__icon' />
                            </a>
                        </div>
                    </div> {/* .parents-liaison__parent : end */}
                    <div className='parents-liaison__parent'>
                        <p className='parents-liaison__name'>
                            <span>어머니</span> {bridegroomMom}
                        </p>
                        <div className='liaison__icons'>
                            <a href={`tel:${bridegroomMomTel}`}>
                                <img src="/icons/tel_ico.svg" alt="전화" className='liaison__icon' />
                            </a>
                            <a href={`sms:${bridegroomMomTel}`}>
                                <img src="/icons/sms_ico.svg" alt="문자" className='liaison__icon' />
                            </a>
                        </div>
                    </div> {/* .parents-liaison__parent : end */}
                </div> {/* .parents-liaison__item : end */}

                <div className='parents-liaison__item'>
                    <p className='text-body-0'>신부 측 혼주</p>
                    <div className='parents-liaison__parent'>
                        <p className='parents-liaison__name'>
                            <span>아버지</span> {brideDad}
                        </p>
                        <div className='liaison__icons'>
                            <a href={`tel:${brideDadTel}`}>
                                <img src="/icons/tel_ico.svg" alt="전화" className='liaison__icon' />
                            </a>
                            <a href={`sms:${brideDadTel}`}>
                                <img src="/icons/sms_ico.svg" alt="문자" className='liaison__icon' />
                            </a>
                        </div>
                    </div> {/* .parents-liaison__parent : end */}
                    <div className='parents-liaison__parent'>
                        <p className='parents-liaison__name'>
                            <span>어머니</span> {brideMom}
                        </p>
                        <div className='liaison__icons'>
                            <a href={`tel:${brideMomTel}`}>
                                <img src="/icons/tel_ico.svg" alt="전화" className='liaison__icon' />
                            </a>
                            <a href={`sms:${brideMomTel}`}>
                                <img src="/icons/sms_ico.svg" alt="문자" className='liaison__icon' />
                            </a>
                        </div>
                    </div> {/* .parents-liaison__parent : end */}
                </div> {/* .parents-liaison__item : end */}
            </div> {/* .parents-liaison : end */}
        </div>
    );
};

export default LiaisonDropDown;