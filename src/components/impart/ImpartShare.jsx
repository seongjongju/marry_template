import React from 'react';
import { isIOS } from 'react-device-detect';
import useClipBoard from '../../features/hooks/clipBoard/useClipBoard';
import useShare from '../../features/hooks/share/useShare';
import useGsap from '../../features/hooks/gsap/useGsap';
import { appUrl } from '../../shared/environment/environment';
import kakaoIcon from 'src/assets/icons/kakao_ico.svg';
import shareIcon from 'src/assets/icons/share_ico.svg';

const ImpartShare = () => {
    const {app, shares} = useGsap();
    const {handleCopyClipBoard} = useClipBoard();
    const {handleClickShare} = useShare();

    return (
        <div className='share' ref={app}>
            <div className='share__btns' ref={shares}>
                {
                    isIOS &&
                    (
                        <button
                            className='share__button'
                            href="#self"
                            onClick={handleClickShare}
                        >
                            <img src={kakaoIcon} alt="카카오톡 아이콘" className='share__icon kakao' />
                            카카오톡으로 공유하기
                        </button>   
                    )
                }
                <a 
                    className='share__button'
                    href="#self"
                    onClick={() => {handleCopyClipBoard(appUrl)}} 
                >
                    <img src={shareIcon} alt="공유 아이콘" className='share__icon share' />
                    청첩장 주소 복사하기
                </a>
            </div>
        </div>
    );
};

export default ImpartShare;