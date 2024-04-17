// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// export function port() {
//     gsap.registerPlugin(ScrollTrigger);
//     const horSection = gsap.utils.toArray(".port__item");

//     gsap.to(horSection, {
//         xPercent: -120 * (horSection.length - 1),
//         ease: "none",
//         scrollTrigger: {
//             trigger: "#port",
//             start: "top 56px",
//             end: "+=3000",
//             pin: true,
//             scrub: 1,
//             markers: false,
//             invalidateOnRefresh: true,
//             anticipatePin: 1,
//         },
//     });
// }
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
//ScrollTrigger를 사용하기 위해서는 import를 시켜야 합니다. 
//                             port__item 속성이 여러개 있기 때문에 다중 선택을 해야 합니다. 
//                             gsap.utils.toArray 속성을 사용하여 다중 선택을 하고 
//                             gsap.to 속성을 이용하여 이동시켜 줍니다. 
//                             trigger 속성은 움직이는 시점을 설정하고, start와 end를 통해 애니메이션을 컨틀롤 할 수 있습니다.


export function port() {
    gsap.registerPlugin(ScrollTrigger);
    const horSection = gsap.utils.toArray(".port_item");
    
    gsap.to(horSection, {
        xPercent: -120 * (horSection.length-1),
        ease:"none",
        scrollTrigger: {
            trigger:"#port",
            start:"top 60px",
            end: "+=3000",
            pin:true,
            scrub:1,
            markers:false,
            invalidateOnRefresh: true,
            anticipatePin:1,

        },
    });
}
// import ScrollTrigger from "gsap/ScrollTrigger"; : GSAP의 ScrollTrigger 모듈을 가져옵니다. ScrollTrigger는 GSAP의 플러그인으로 스크롤에 반응하는 애니메이션을 쉽게 구현할 수 있도록 도와줍니다.
//                                 gsap.registerPlugin(ScrollTrigger); : ScrollTrigger를 GSAP에 등록합니다. 이를 통해 ScrollTrigger를 사용하여 애니메이션을 정의할 수 있습니다.
//                                 const horSection = gsap.utils.toArray(".port__item"); : 클래스 이름이 "port__item"인 모든 요소들을 선택하여 배열 horSection에 저장합니다.
//                                 gsap.to(horSection, {...}); : GSAP의 to 메서드를 사용하여 요소들에 애니메이션을 적용합니다.
//                                 xPercent: -120 * (horSection.length - 1),: 요소들을 가로 방향으로 배치하기 위해 xPercent 속성을 사용합니다. 스크롤되면 120% 만큼 이동하도록 설정합니다.
//                                 ease: "none", : 애니메이션의 이징(easing)을 "none"으로 설정하여 일정한 속도로 애니메이션이 진행되도록 합니다.
//                                 scrollTrigger: {...}: ScrollTrigger를 이용하여 스크롤에 따라 애니메이션을 제어하는 옵션들을 설정합니다.
//                                 trigger: "#port": 애니메이션을 시작할 트리거 요소로, #port를 선택합니다.
//                                 start: "top 56px": 트리거 요소의 상단에서 56px 아래에서 애니메이션이 시작됩니다.
//                                 end: "+=3000": 트리거 요소의 아래에서 3000px 아래에서 애니메이션이 끝납니다.
//                                 pin: true,: 애니메이션이 스크롤 범위 동안 고정되도록 합니다.
//                                 scrub: 1,: 스크롤 시 애니메이션 속도에 비례하여 애니메이션이 진행됩니다.
//                                 markers: false,: 디버깅을 위한 마커를 표시하지 않습니다.
//                                 invalidateOnRefresh: true,: 페이지 리프레시 시 ScrollTrigger 캐시를 재설정합니다.
//                                 anticipatePin: 1,: 고정된 상태로 애니메이션이 시작되기 전에 스크롤 위치에 따라 약간의 애니메이션 효과를 부여합니다.
