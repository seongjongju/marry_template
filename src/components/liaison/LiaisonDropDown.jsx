import React from 'react';
import telIcon from 'src/assets/icons/tel_ico.svg';
import smsIcon from 'src/assets/icons/sms_ico.svg';
import { brideDad, brideDadTel, bridegroomDad, bridegroomDadTel, bridegroomMom, bridegroomMomTel, brideMom, brideMomTel } from '../../shared/environment/environment';

const LiaisonDropDown = () => {

    return (
        <div>
            <div 
                className='parents-liaison'
            >
                <div className='parents-liaison__item'>
                    <p className='text-body-0'>신랑 측 혼주</p>
                    <div className='parents-liaison__parent'>
                        <p className='parents-liaison__name'>
                            <span>아버지</span> {bridegroomDad}
                        </p>
                        <div className='liaison__icons'>
                            <a href={`tel:${bridegroomDadTel}`}>
                                <img src={telIcon} alt="전화" className='liaison__icon' />
                            </a>
                            <a href={`sms:${bridegroomDadTel}`}>
                                <img src={smsIcon} alt="문자" className='liaison__icon' />
                            </a>
                        </div>
                    </div> {/* .parents-liaison__parent : end */}
                    <div className='parents-liaison__parent'>
                        <p className='parents-liaison__name'>
                            <span>어머니</span> {bridegroomMom}
                        </p>
                        <div className='liaison__icons'>
                            <a href={`tel:${bridegroomMomTel}`}>
                                <img src={telIcon} alt="전화" className='liaison__icon' />
                            </a>
                            <a href={`sms:${bridegroomMomTel}`}>
                                <img src={smsIcon} alt="문자" className='liaison__icon' />
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
                                <img src={telIcon} alt="전화" className='liaison__icon' />
                            </a>
                            <a href={`sms:${brideDadTel}`}>
                                <img src={smsIcon} alt="문자" className='liaison__icon' />
                            </a>
                        </div>
                    </div> {/* .parents-liaison__parent : end */}
                    <div className='parents-liaison__parent'>
                        <p className='parents-liaison__name'>
                            <span>어머니</span> {brideMom}
                        </p>
                        <div className='liaison__icons'>
                            <a href={`tel:${brideMomTel}`}>
                                <img src={telIcon} alt="전화" className='liaison__icon' />
                            </a>
                            <a href={`sms:${brideMomTel}`}>
                                <img src={smsIcon} alt="문자" className='liaison__icon' />
                            </a>
                        </div>
                    </div> {/* .parents-liaison__parent : end */}
                </div> {/* .parents-liaison__item : end */}
            </div> {/* .parents-liaison : end */}
        </div>
    );
};

export default LiaisonDropDown;