import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const useGsap = () => {
    const app = useRef(); //전체 영역

    const title = useRef(); //타이틀
    const textBody_0 = useRef(); //본문글 - 0
    const textBody_1 = useRef(); //본문글 - 1

    const liaison = useRef(); //연락하기
    const calendar = useRef(); //달력
    const gallery = useRef(); //갤러리

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            //타이틀
            gsap.fromTo(title.current, 
                {y:30, opacity:0},
                { 
                    y:0,
                    opacity: 1,
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger:{
                        trigger:".title",
                        start:"top 500",
                        end:"100 200",
                        markers:true,
                        toggleActions:"play none none none"
                    }
                }
            ); 

            //본문글 - 0
            gsap.fromTo(textBody_0.current, 
                {y:30, opacity:0},
                { 
                    y:0,
                    opacity: 1,
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger:{
                        trigger:".text-body-0",
                        start:"top 500",
                        end:"100 200",
                        markers:true,
                        toggleActions:"play none none none"
                    }
                }
            ); 
            
            //본문글 - 1
            gsap.fromTo(textBody_1.current, 
                {y:30, opacity:0},
                { 
                    y:0,
                    opacity: 1,
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger:{
                        trigger:".text-body-1",
                        start:"top 500",
                        end:"100 200",
                        markers:true,
                        toggleActions:"play none none none"
                    }
                }
            ); 
            
            //연락하기
            gsap.fromTo(liaison.current, 
                {y:30, opacity:0},
                { 
                    y:0,
                    opacity: 1,
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger:{
                        trigger:".liaison",
                        start:"top 500",
                        end:"100 200",
                        markers:true,
                        toggleActions:"play none none none"
                    }
                }
            ); 

            //달력
            gsap.fromTo(calendar.current, 
                {y:30, opacity:0},
                { 
                    y:0,
                    opacity: 1,
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger:{
                        trigger:".calendar",
                        start:"top 500",
                        end:"100 200",
                        markers:true,
                        toggleActions:"play none none none"
                    }
                }
            ); 

            //갤러리
            gsap.fromTo(gallery.current, 
                {y:30, opacity:0},
                { 
                    y:0,
                    opacity: 1,
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger:{
                        trigger:".gallery",
                        start:"top 500",
                        end:"100 200",
                        markers:true,
                        toggleActions:"play none none none"
                    }
                }
            ); 
        }, app); 
        
        return () => ctx.revert();
    });

    return {app, title, textBody_0, textBody_1, liaison, calendar, gallery};
};

export default useGsap;