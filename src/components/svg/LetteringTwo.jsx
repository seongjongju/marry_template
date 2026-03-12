import React from 'react';
import letteringThree from '/images/lettering2.svg';



const LetteringTwo = () => {
  const pathVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
    },
  },
};

  return (
    <div className='letterings'>
      <div className='inner'>
        <img src={letteringThree} alt="레터링" className='letterings2' />
      </div>
    </div>
  );
};

export default LetteringTwo;