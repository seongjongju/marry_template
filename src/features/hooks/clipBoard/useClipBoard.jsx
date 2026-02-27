import React from 'react';

const useClipBoard = () => {
    //클립보드 복사
    const handleCopyClipBoard = async (board) => {
        try {
            await navigator.clipboard.writeText(board);
            
            alert('복사 성공!');
        } catch (error) {
            console.error(error)
            alert('복사 실패!');
        }
    };
    
    return {
        handleCopyClipBoard
    };
};

export default useClipBoard;