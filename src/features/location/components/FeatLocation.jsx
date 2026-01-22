import React from 'react';
import useGsap from '../../gsap/hook/useGsap';
import useClipBoard from '../../clipBoard/hook/useClipBoard';

const FeatLocation = () => {
    const {app, locationBtns, map, locationDetails } = useGsap();
    const {handleCopyClipBoard} = useClipBoard();

    //티맵
    const handleOpenTmap = (e) => {
        // 목적지 설정 (예: 코엑스)
        const name = encodeURIComponent('코엑스');
        const x = '127.0581026'; // 경도 (Longitude)
        const y = '37.5118436';  // 위도 (Latitude)
        
        // 티맵 앱 연동 스키마
        const tmapUrl = `tmap://search?name=${name}&posx=${x}&posy=${y}`;

        // 앱 스토어 이동 URL (앱이 없을 경우)
        const appStoreUrl = "https://apps.apple.com"; // iOS
        const playStoreUrl = "market://details?id=com.skt.tmap.ku"; // Android
        
        // 모바일 기기인지 확인
        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            window.location.href = tmapUrl;

            setTimeout(() => {
                if (document.webkitHidden || document.hidden) return;
                
                if(/Android/i.test(navigator.userAgent)) window.location.href = playStoreUrl;
                else if(/iPhone|iPad|iPod/i.test(navigator.userAgent)) window.location.href = appStoreUrl;
            }, 1000);
        } else {
            e.preventDefault(); // PC일 경우 이동 방지
            alert('모바일 기기에서만 티맵 앱을 실행할 수 있습니다.');
        }
    };

    // 카카오내비
    const handleOpenKakaoNavi = (e) => {
        const name = '더뉴컨벤션';
        const x = '126.836338'; // 경도
        const y = '37.558778';  // 위도
        
        const kakaoNaviUrl = `https://map.kakao.com/link/to/${name},${y},${x}`;
        
        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            e.currentTarget.href = kakaoNaviUrl;
        } else {
            e.preventDefault();
            alert('모바일 기기에서만 티맵 앱을 실행할 수 있습니다.');
        }
    };

    return (
        <div className='location' ref={app}>
            <div className='location__btns' ref={locationBtns}>
                <a 
                    href='#self' 
                    className='location__button'
                    onClick={() => handleCopyClipBoard('서울특별시 강서구 공항대로36길 57')}
                >
                    <img src="/icons/location_marker_ico.svg" alt="지도마커" />
                    지도
                </a>
                <a 
                    href='tel:02-1661-3303' 
                    className='location__button'
                >
                    <img src="/icons/location_tel_ico.svg" alt="전화걸기" />
                    전화
                </a>
            </div> {/* .location__btns : end */}
            <div className='map' ref={map}>
                <iframe 
                    style={{ border: "none" }}
                    title="google-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9393824348476!2d126.83438857632291!3d37.556491924703344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9c68bfb5c69f%3A0x220458f873585ae1!2z642U64m07Luo67Kk7IWY7Juo65Sp!5e0!3m2!1sko!2skr!4v1769000968228!5m2!1sko!2skr" 
                    width="100%" 
                    height="100%"  
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
                <div className='location__road'>
                    <button 
                        href="#self" 
                        onClick={handleOpenTmap}
                        className="location__road--button"
                    >
                        티맵
                    </button>
                    <a 
                        href="#self" 
                        onClick={handleOpenKakaoNavi}
                        className="location__road--button"
                    >
                        카카오내비
                    </a>
                </div> {/* .location__road : end */}
            </div> {/* .map : end */}
            
            <div className='location__details' ref={locationDetails}>
                <div className='location__detail'>
                    <p className='location__title'>지하철</p>
                    <ul className='location__list'>
                        <li className='location__list--item'>
                            <p className='location__text'>5호선</p>
                            <p className='location__text'>(방화/김포공항 행) 발산역 하차 7번 출구</p>
                        </li> {/* .location__list--item : end */}
                    </ul> {/* .location__list : end */}
                </div> {/* .location__detail : end */}

                <div className='location__detail'>
                    <p className='location__title'>버스 : 발산역 하차 (발산역사거리)</p>
                    <ul className='location__list'>
                        <li className='location__list--item'>
                            <p className='location__text'>지 &nbsp;선</p>
                            <p className='location__text'>6629, 6630, 6632, 6642, 6645, 6648, 6657, 6712</p>
                        </li> {/* .location__list--item : end */}
                        <li className='location__list--item'>
                            <p className='location__text'>간 &nbsp;선</p>
                            <p className='location__text'>601, 605, 652, 654, 661</p>
                        </li> {/* .location__list--item : end */}
                        <li className='location__list--item'>
                            <p className='location__text'>마 &nbsp;을</p>
                            <p className='location__text'>강서05, 강서06</p>
                        </li> {/* .location__list--item : end */}
                        <li className='location__list--item'>
                            <p className='location__text'>공 &nbsp;항</p>
                            <p className='location__text'>(김포)6000, (인천)6003, 6008</p>
                        </li> {/* .location__list--item : end */}
                        <li className='location__list--item'>
                            <p className='location__text'>일 &nbsp;반</p>
                            <p className='location__text'>60, 60-3 ,69 ,88, 1002</p>
                        </li> {/* .location__list--item : end */}
                        <li className='location__list--item'>
                            <p className='location__text'>직 &nbsp;행</p>
                            <p className='location__text'>(강화)2000, 3000, 3000A, (대명)8000</p>
                        </li> {/* .location__list--item : end */}
                    </ul> {/* .location__list : end */}
                </div> {/* .location__detail : end */}

                <div className='location__detail'>
                    <p className='location__title'>주차장 안내</p>
                    <ul className='location__list list-gap-0'>
                        <li className='location__list--item'>
                            <p className='location__text long'>2시간 무료주차</p>
                            <p className='location__text long'>웨딩홀 내 주차 지하 4층~ 지상 1층</p>
                        </li> {/* .location__list--item : end */}
                    </ul> {/* .location__list : end */}
                    <p className='text-body-ps color-b-0'>주차장 만차 시 근처 이대서울병원 주차장 이용</p>
                    <p className='text-body-ps color-b-0'>이대서울병원 주차장 이용 시 웨딩홀 1층에서 주차 등록</p>
                </div> {/* .location__detail : end */}
            </div> {/* .location__details : end */}
        </div>
    );
};

export default FeatLocation;