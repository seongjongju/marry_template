import React, { useEffect } from 'react';
import useGsap from '../../features/hooks/gsap/useGsap';
import useClipBoard from '../../features/hooks/clipBoard/useClipBoard';

const Remittance = ({ celebrant, names, accounts }) => {
    const {remittance} = useGsap();
    const {handleCopyClipBoard} = useClipBoard();

    useEffect(() => {
        const remittances = document.querySelectorAll('.remittance');
        
        remittances.forEach((remittance, index) => {
            if(index === remittances.length - 1) {
                remittance.style.paddingTop = "40px";
                remittance.style.marginBottom = "60px";
            } else {
                remittance.style.paddingBottom = "40px";
                remittance.style.borderBottom = "1px solid #E9E9E9";
            }
        });
    }, [])

    return (
        <div className='remittance' ref={remittance}>
            <div className='remittance__item'>
                <p className='remittance__name'>
                    <span>{celebrant}</span> {names.myName.replace(/ /g,"")}
                </p>
                <div className='remittance__clip'>
                    <p className='text-body-0 color-b-0'>{accounts.myAccount.replace(' ', '\u3000'.repeat(1))}</p>
                    <a href='#self' 
                        className='remittance__button'
                        onClick={() => handleCopyClipBoard(accounts.myAccount)}
                    >
                        복사하기
                    </a>
                </div>
            </div> 
            <div className='remittance__item'>
                <p className='remittance__name'>
                    <span>{celebrant} 아버지</span> {names.dadName}
                </p>
                <div className='remittance__clip'>
                    <p className='text-body-0 color-b-0'>{accounts.dadAcount.replace(' ', '\u3000'.repeat(1))}</p>
                    <a href='#self' 
                        className='remittance__button'
                        onClick={() => handleCopyClipBoard(accounts.dadAcount)}
                    >
                        복사하기
                    </a>
                </div>
            </div> 
            <div className='remittance__item'>
                <p className='remittance__name'>
                    <span>{celebrant} 어머니</span> {names.momName}
                </p>
                <div className='remittance__clip'>
                    <p className='text-body-0 color-b-0'>{accounts.momAcount.replace(' ', '\u3000'.repeat(1))}</p>
                    <a
                        href='#self' 
                        className='remittance__button'
                        onClick={() => handleCopyClipBoard(accounts.momAcount)}
                    >
                        복사하기
                    </a>
                </div>
            </div> 
        </div>
    );
};

export default Remittance;