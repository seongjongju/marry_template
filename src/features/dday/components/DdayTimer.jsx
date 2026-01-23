import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import 'dayjs/locale/ko';
import SlideNumber from './SlideNumber';
import useGsap from '../../gsap/hook/useGsap';
import { day, month, realTime, year } from '../../../shared/environment/environment';

dayjs.extend(isLeapYear);
dayjs.locale('ko')

const DdayTimer = () => {
    const {timer} = useGsap();
    const targetDate = dayjs(`${year}-${month}-${day} ${realTime}`); // 목표 날짜 설정
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = dayjs();
            const diff = targetDate.diff(now);

            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="timer-wrapper" ref={timer}>
            <div className='timer'>
                <div className='timer__item'>
                    <SlideNumber value={timeLeft.days} digits={3} />
                    <p className='timer__text'>Days</p>
                </div>
                <div className='timer__item'>
                    <SlideNumber value={timeLeft.hours} digits={2} />
                    <p className='timer__text'>Hours</p>
                </div>
                <div className='timer__item'>
                    <SlideNumber value={timeLeft.minutes} digits={2} />
                    <p className='timer__text'>Minutes</p>
                </div>
                <div className='timer__item'>
                    <SlideNumber value={timeLeft.seconds} digits={2} />
                    <p className='timer__text'>Seconds</p>
                </div>
            </div>
        </div>
    );
};

export default DdayTimer;