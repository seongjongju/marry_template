import React from 'react';

const SlideNumber = ({ value, digits }) => {
    const strValue = String(value).padStart(digits, '0');

    return (
        <div className="timer__time">
            {strValue.split('').map((digit, index) => (
                <div key={index}>
                    <div data-value={digit}>
                        <div>{digit}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SlideNumber;