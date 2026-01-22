import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const useGsap = () => {
    const app = useRef(); //전체 영역

    const title = useRef(); //타이틀
    const textBody_0 = useRef(); //본문글 - 0
    const textBody_1 = useRef(); //본문글 - 1

    const saying = useRef(); //인사말
    const liaison = useRef(); //연락하기
    const calendar = useRef(); //달력
    const gallery = useRef(); //갤러리

    //지도
    const locationBtns = useRef(); 
    const map = useRef(); 
    const locationDetails = useRef([]); 

    //전하다
    const remittance = useRef();
    const shares = useRef([]);

    //디데이
    const timer = useRef(); 

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            //타이틀
            if (title.current) {
                gsap.fromTo(title.current, 
                    {y:30, opacity:0},
                    { 
                        y:0, opacity: 1, duration: 0.7, ease: 'power2.out',
                        scrollTrigger:{
                            trigger: title.current, 
                            start:"top 80%",
                            toggleActions:"play none none none",
                        }
                    }
                ); 
            }

            // 본문글 - 0
            if (textBody_0.current) {
                gsap.fromTo(textBody_0.current, 
                    {y:30, opacity:0},
                    { 
                        y:0, opacity: 1, duration: 0.7, ease: 'power2.out',
                        scrollTrigger:{
                            trigger: textBody_0.current, 
                            start:"top 80%",
                            toggleActions:"play none none none",
                        }
                    }
                ); 
            }

            //본문글 - 1 
            if (textBody_1.current) {
                gsap.fromTo(textBody_1.current, 
                    {y:30, opacity:0},
                    { 
                        y:0, opacity: 1, duration: 0.7, ease: 'power2.out',
                        scrollTrigger:{
                            trigger: textBody_1.current,
                            start:"top 80%",
                            toggleActions:"play none none none",
                        }
                    }
                ); 
            }

            // 인사말
            if (saying.current) {
                gsap.fromTo(saying.current, 
                    {y:30, opacity:0},
                    { 
                        y:0, opacity: 1, duration: 0.7, ease: 'power2.out',
                        scrollTrigger:{
                            trigger: saying.current,
                            start:"top 60%",
                            toggleActions:"play none none none",
                        }
                    }
                ); 
            }
            
            // 연락하기
            if (liaison.current) {
                gsap.fromTo(liaison.current, 
                    {y:30, opacity:0},
                    { 
                        y:0, opacity: 1, duration: 0.7, ease: 'power2.out',
                        scrollTrigger:{
                            trigger: liaison.current,
                            start:"top 80%",
                            toggleActions:"play none none none"
                        }
                    }
                ); 
            }

            //달력
            if (calendar.current) {
                gsap.fromTo(calendar.current, 
                    {y:30, opacity:0},
                    { 
                        y:0, opacity: 1, duration: 0.7, ease: 'power2.out',
                        scrollTrigger:{
                            trigger: calendar.current,
                            start:"top 80%",
                            toggleActions:"play none none none"
                        }
                    }
                ); 
            }

            //갤러리
            if (gallery.current) {
                gsap.fromTo(gallery.current, 
                    {y:30, opacity:0},
                    { 
                        y:0, opacity: 1, duration: 0.7, ease: 'power2.out',
                        scrollTrigger:{
                            trigger: gallery.current,
                            start:"top 80%",
                            toggleActions:"play none none none"
                        }
                    }
                ); 
            }

            //지도
            if (locationBtns.current) {
                gsap.fromTo(locationBtns.current, 
                    {y:30, opacity:0},
                    { 
                        y:0, opacity: 1, duration: 0.7, ease: 'power2.out',
                        scrollTrigger:{
                            trigger: locationBtns.current,
                            start:"top 80%",
                            toggleActions:"play none none none"
                        }
                    }
                ); 
            }

            if (map.current) {
                gsap.fromTo(map.current, 
                    {y:30, opacity:0},
                    { 
                        y:0, opacity: 1, duration: 0.7, ease: 'power2.out',
                        scrollTrigger:{
                            trigger: map.current,
                            start:"top 80%",
                            toggleActions:"play none none none"
                        }
                    }
                ); 
            }

            if (locationDetails.current) {
                gsap.utils.toArray('.location__detail').forEach((el, i) => {
                    gsap.fromTo(el,
                        { y: 30, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.7,
                            delay: i * 0.1,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: el,
                                start: 'top 80%',
                                toggleActions: 'play none none none',
                            },
                        }
                    );
                });
            }

            //전하다
            if (remittance.current) {
                gsap.fromTo(remittance.current, 
                    {y:30, opacity:0},
                    { 
                        y:0, opacity: 1, duration: 0.7, ease: 'power2.out',
                        scrollTrigger:{
                            trigger: remittance.current,
                            start:"top 80%",
                            toggleActions:"play none none none"
                        }
                    }
                ); 
            }

            if (shares.current) {
                gsap.utils.toArray('.share__button').forEach((el, i) => {
                    gsap.fromTo(el,
                        { y: 30, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.7,
                            delay: i * 0.1,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: el,
                                start: 'top 100%',
                                toggleActions: 'play none none none',
                            },
                        }
                    );
                });
            }

            //디데이
            if (timer.current) {
                gsap.fromTo(timer.current, 
                    {y:30, opacity:0},
                    { 
                        y:0, opacity: 1, duration: 0.7, ease: 'power2.out',
                        scrollTrigger:{
                            trigger: timer.current,
                            start:"top 80%",
                            toggleActions:"play none none none"
                        }
                    }
                ); 
            }
        }, app); 
        
        return () => ctx.revert();
    }, []);

    return {
        app, 
        title, 
        textBody_0, 
        textBody_1, 
        saying, 
        liaison, 
        calendar, 
        gallery, 
        locationBtns, 
        map,
        locationDetails,
        remittance,
        shares,
        timer
    };
};

export default useGsap;