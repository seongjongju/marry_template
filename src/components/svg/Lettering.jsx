import React from 'react';
import { motion } from "framer-motion";

const Lettering = () => {
  const pathVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: {
      duration: 3, // 숫자가 높을수록 천천히, 부드럽게 써집니다
      ease: "easeInOut",
    },
  },
};

  return (
    <div className='letterings'>
      <div className='inner'>
        <svg
          width={445}
          height={141}
          viewBox='0 0 445 141'
        >
          <motion.path
            d="M50,70 Q70,20 90,70 T130,70" // 이 부분에 실제 글자 path 데이터가 들어갑니다
            fill="transparent"
            stroke="#000"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>
      </div>
    </div>
  );
};

export default Lettering;