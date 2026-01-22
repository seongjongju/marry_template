import React from 'react';

const useShare = () => {
    const handleClickShare = async () => {
        /* 깃허브 업로드를 위한 주석 추가 */
        const shareData = {
            title: "모바일 청첩장 A타입",
            text: "모바일 청첩장 공유 테스트",
            url: "https://marrya.vercel.app/"
        };

        try{
            // 데이터 공유 가능 여부 감지
            if(!navigator.canShare) {
                alert('공유할 주소가 없습니다.');
            } else if(navigator.canShare(shareData)) {
                console.log('공유 가능');
            } else {
                alert('공유 불가능');
            }
            
            // 실제 공유 로직
            await navigator.share({
                title: "모바일 청첩장 A타입",
                text: "모바일 청첩장 공유 테스트",
                url: "https://marrya.vercel.app/"
            });
        } catch(error) {
            console.error(error);
        };
    };
    
    return {
        handleClickShare
    };
};

export default useShare;