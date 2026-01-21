import React from 'react';
import useGsap from '../../features/gsap/hook/useGsap';

const Location = () => {
    const {app, title, textBody_1, textBody_0} = useGsap();

    const handleOpenTmap = () => {
        // 목적지 설정 (예: 코엑스)
        const name = encodeURIComponent('코엑스');
        const x = '127.0581026'; // 경도 (Longitude)
        const y = '37.5118436';  // 위도 (Latitude)
        
        // 티맵 앱 연동 스키마
        const tmapUrl = `tmap://search?name=${name}&posx=${x}&posy=${y}`;
        
        // 모바일 기기인지 확인 후 실행
        if (/Android/i.test(navigator.userAgent)) {
            // 안드로이드: 직접 실행
            window.location.href = tmapUrl;
        } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            // iOS: 설치되어 있지 않을 경우 앱스토어로 이동하는 로직이 필요할 수 있음
            window.location.href = tmapUrl;
        } else {
            alert('모바일 기기에서만 티맵 앱을 실행할 수 있습니다.');
        }
    };

    return (
        <section ref={app}>
            <div className='inner'>
                <h1 className='title' ref={title}>LOCATION</h1>
                <p className='text-body-1 text-center text-gap-0' ref={textBody_1}>더뉴컨벤션 2층 더뉴홀</p>
                <p className='text-body-0 text-center' ref={textBody_0}>
                    서울특별시 강서구 공항대로36길 57 <br />
                    02.1661.3303
                </p>
            </div>

            <div className='location'>
                <div className='location__btns'>

                </div>
                <div className='map'>
                    <iframe 
                        style={{ border: "none" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9393824348476!2d126.83438857632291!3d37.556491924703344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9c68bfb5c69f%3A0x220458f873585ae1!2z642U64m07Luo67Kk7IWY7Juo65Sp!5e0!3m2!1sko!2skr!4v1769000968228!5m2!1sko!2skr" width="100%" height="100%"  referrerpolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </div>
                <button
                    onClick={handleOpenTmap}
                >티맵 테스트</button>
            </div> {/* .location : end */}
        </section>
    );
};

export default Location;