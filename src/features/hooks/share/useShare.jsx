import React from 'react';
import { appUrl } from '../../../shared/environment/environment';

const useShare = () => {
    const handleClickShare = async () => {
        const shareData = {
            url: appUrl
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
                url: appUrl
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