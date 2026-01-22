import React from 'react';
import useClipBoard from '../../clipBoard/hook/useClipBoard';

const ImpartRemittance = () => {
    const {handleCopyClipBoard} = useClipBoard();

    return (
        <div className='remittance'>
            <a 
                href="#self" 
                className='remittance__button'
                onClick={() => handleCopyClipBoard('0000111122223333')}
            >
                신랑 측 계좌번호
            </a>
            <a 
                href="#self" 
                className='remittance__button'
                onClick={() => handleCopyClipBoard('0000444455556666')}
            >
                신부 측 계좌번호
            </a>
            <a 
                href="#self" 
                className='remittance__button'
            >
                화환 보내기
            </a>
        </div>
    );
};

export default ImpartRemittance;