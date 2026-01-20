import React from 'react';

const Calendar = () => {
    return (
        <section>
            <div className='inner'>
                <h1 className='title' style={{fontFamily: "Sumunjang_BodyM"}}>6월</h1>
                <div className='calendar'>
                    <div className='calendar__day not-current-month'>31</div>
                    <div className='calendar__day'>1</div>
                    <div className='calendar__day'>2</div>
                    <div className='calendar__day'>3</div>
                    <div className='calendar__day'>4</div>
                    <div className='calendar__day'>5</div>
                    <div className='calendar__day'>6</div>
                    {/***************** 1주 ******************/}

                    <div className='calendar__day'>7</div>
                    <div className='calendar__day'>8</div>
                    <div className='calendar__day'>9</div>
                    <div className='calendar__day'>10</div>
                    <div className='calendar__day'>11</div>
                    <div className='calendar__day'>12</div>
                    <div className='calendar__day'>13</div>
                    {/***************** 2주 ******************/}

                    <div className='calendar__day'>
                        <img src="/icons/d-day_ico.png" alt="D-Day" className='d-day' />
                        14
                    </div>
                    <div className='calendar__day'>15</div>
                    <div className='calendar__day'>16</div>
                    <div className='calendar__day'>17</div>
                    <div className='calendar__day'>18</div>
                    <div className='calendar__day'>19</div>
                    <div className='calendar__day'>20</div>
                    {/***************** 3주 ******************/}

                    <div className='calendar__day'>21</div>
                    <div className='calendar__day'>22</div>
                    <div className='calendar__day'>23</div>
                    <div className='calendar__day'>24</div>
                    <div className='calendar__day'>25</div>
                    <div className='calendar__day'>26</div>
                    <div className='calendar__day'>27</div>
                    {/***************** 4주 ******************/}

                    <div className='calendar__day'>28</div>
                    <div className='calendar__day'>29</div>
                    <div className='calendar__day'>30</div>
                    <div className='calendar__day'>31</div>
                    <div className='calendar__day not-current-month'>1</div>
                    <div className='calendar__day not-current-month'>2</div>
                    <div className='calendar__day not-current-month'>3</div>
                    {/***************** 5주 ******************/}
                </div> {/* .calendar : end */}
            </div>
        </section>
    );
};

export default Calendar;