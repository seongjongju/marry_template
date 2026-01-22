import React from 'react';
import useClipBoard from '../../clipBoard/hook/useClipBoard';
import useShare from '../../share/hook/useShare';
import useGsap from '../../gsap/hook/useGsap';

const ImpartShare = () => {
    const {app, shares} = useGsap();
    const {handleCopyClipBoard} = useClipBoard();
    const {handleClickShare} = useShare();

    return (
        <div className='share' ref={app}>
            <div className='share__btns' ref={shares}>
                <button
                    className='share__button'
                    href="#self"
                    onClick={handleClickShare}
                >
                    <img src="/icons/kakao_ico.svg" alt="카카오톡 아이콘" />
                    카카오톡으로 공유하기
                </button>
                <a 
                    className='share__button'
                    href="#self"
                    onClick={() => {handleCopyClipBoard('https://marrya.netlify.app/')}} 
                >
                    <img src="/icons/share_ico.svg" alt="공유 아이콘" />
                    청첩장 주소 복사하기
                </a>
            </div>
        </div>
    );
};

export default ImpartShare;