import React, { useEffect, useState } from 'react';
import useGsap from '../../features/hooks/gsap/useGsap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { day, month, year } from '../../shared/environment/environment';

const Calendars = () => {
    const {app, title, calendar} = useGsap();
    const [date, setDate] = useState(new Date(year, month.slice(1, 2) - 1, day));

    useEffect(() => {
        const ddayFocus = () => {
            const dDay = document.querySelector('.react-calendar__tile--active');
            const icon = document.createElement('img');

            icon.src = "/icons/d-day_ico.png";
            icon.alt = "d-day";

            dDay.appendChild(icon);
        };

        ddayFocus();
    }, [])
    
    return (
        <section ref={app}>
            <div className='inner'>
                <h1 className='title' style={{fontFamily: "Sumunjang_BodyM"}} ref={title}>{month.slice(1, 2)}월</h1>
                <div className='calendars' ref={calendar}>
                    <Calendar 
                        locale="en"
                        calendarType="hebrew"
                        onChange={setDate}
                        value={date}
                    />
                </div> {/* .calendars : end */}
            </div>
        </section>
    );
};

export default Calendars;