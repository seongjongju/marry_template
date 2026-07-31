import React from 'react';
import { appUrl, lat, long, place, placeMap, placeName, placeTel } from '../../shared/environment/environment';
import useGsap from '../../features/hooks/gsap/useGsap';
import useClipBoard from '../../features/hooks/clipBoard/useClipBoard';
import locationMarker from 'src/assets/icons/location_marker_ico.svg';
import locationTel from 'src/assets/icons/location_tel_ico.svg';
import tMapIcon from 'src/assets/icons/tmap_ico.svg';
import kakaoMapIcon from 'src/assets/icons/kakao_navi_ico.svg';
import naverMapIcon from 'src/assets/icons/naver_map_ico.svg';

const FeatLocation = () => {
    const {app, locationBtns, map, locationDetails } = useGsap();
    const {handleCopyClipBoard} = useClipBoard();

    //티맵
    const handleOpenTmap = (e) => {        
        // 티맵 앱 연동 스키마
        const tmapUrl = `tmap://search?name=${placeName}&posx=${long}&posy=${lat}`;

        // 앱 스토어 이동 URL (앱이 없을 경우)
        const appStoreUrl = "https://apps.apple.com/kr/app/id431589174"; // iOS
        const playStoreUrl = "market://details?id=com.skt.tmap.ku"; // Android
        
        // 모바일 기기인지 확인
        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            window.location.href = tmapUrl;

            setTimeout(() => {
                if (document.webkitHidden || document.hidden) return;
                
                if(/Android/i.test(navigator.userAgent)) window.location.href = playStoreUrl;
                else if(/iPhone|iPad|iPod/i.test(navigator.userAgent)) window.location.href = appStoreUrl;
            }, 500);
        } else {
            e.preventDefault(); // PC일 경우 이동 방지
            alert('모바일 기기에서만 티맵 앱을 실행할 수 있습니다.');
        }
    };

    // 카카오내비
    const handleOpenKakaoNavi = (e) => {        
        const kakaoNaviUrl = `https://map.kakao.com/link/to/${placeName},${long},${lat}`;
        
        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            e.currentTarget.href = kakaoNaviUrl;
        } else {
            e.preventDefault();
            alert('모바일 기기에서만 카카오내비 앱을 실행할 수 있습니다.');
        }
    };

    // 네이버지도
    const handleOpenNaverMap = () => {        
        const openNaverMap = () => {
            // 네이버 지도 앱 실행 시도 (길찾기)
            const scheme = `nmap://route/car?dlat=${lat}&dlng=${long}&dname=${encodeURIComponent(placeName)}&appname=${appUrl}`;
            
            // 앱이 없을 경우를 대비한 대체 웹 URL (모바일웹)
            const webUrl = `https://m.place.naver.com/place/35751363/home${encodeURIComponent(placeName)}`;

            // 모바일 환경 체크 후 처리
            if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                window.location.href = scheme;
            
            // 앱이 설치되어 있지 않을 경우(짧은 시간 후) 웹으로 이동
            setTimeout(() => {
                window.location.href = webUrl;
            }, 500);
            } else {
                // 데스크탑 환경일 경우 웹으로 바로 이동
                window.open(webUrl, '_blank');
            }
        };

        openNaverMap();
    };

    return (
        <div className='location' ref={app}>
            <div className='location__btns' ref={locationBtns}>
                <a 
                    href='#self' 
                    className='location__button'
                    onClick={() => handleCopyClipBoard(place)}
                >
                    <img src={locationMarker} alt="지도마커" />
                    지도
                </a>
                <a 
                    href={`tel:${placeTel}`} 
                    className='location__button'
                >
                    <img src={locationTel} alt="전화걸기" />
                    전화
                </a>
            </div> {/* .location__btns : end */}
            <div className='map' ref={map}>
                <iframe 
                    style={{ border: "none" }}
                    title="google-map"
                    src={placeMap} 
                    width="100%" 
                    height="100%"  
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
                <div className='location__road'>
                    <a 
                        href="#self" 
                        onClick={handleOpenTmap}
                        className="location__road--button"
                    >
                        <img src={tMapIcon} alt="티맵" />
                        티맵
                    </a>
                    <a 
                        href="#self" 
                        onClick={handleOpenKakaoNavi}
                        className="location__road--button"
                    >
                        <img src={kakaoMapIcon} alt="카카오내비" />
                        카카오내비
                    </a>
                    <a 
                        href="#self" 
                        onClick={handleOpenNaverMap}
                        className="location__road--button"
                    >
                        <img src={naverMapIcon} alt="네이버지도" />
                        네이버지도
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