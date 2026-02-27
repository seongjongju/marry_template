import React from 'react';
import useClipBoard from '../../features/hooks/clipBoard/useClipBoard';
import useGsap from '../../features/hooks/gsap/useGsap';
import { brideAccount, bridegroomAccount } from '../../shared/environment/environment';

const ImpartRemittance = () => {
    const {remittance} = useGsap();
    const {handleCopyClipBoard} = useClipBoard();

    return (
        <div className='remittance' ref={remittance}>
            <a 
                href="#self" 
                className='remittance__button'
                onClick={() => handleCopyClipBoard(bridegroomAccount)}
            >
                신랑 측 계좌번호
            </a>
            <a 
                href="#self" 
                className='remittance__button'
                onClick={() => handleCopyClipBoard(brideAccount)}
            >
                신부 측 계좌번호
            </a>
        </div>
    );
};

export default ImpartRemittance;