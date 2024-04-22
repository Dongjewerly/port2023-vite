import Lenis from "@studio-freight/lenis"; 
// @studio-freight/lenis로 부터 Lenis 클래스를 가져옵니다 스크롤 관련 애니메이션 처리 기능 제공함


export function smooth() {
    const lenis = new Lenis ({
        duration : 1, //스크롤 애니메이션의 기간 1초, 1초 동안 진행
        easing : (t) => Math.min(1, 1.001-Math.pow(2,-10*t)), //가속도 함수 easing function 정의 빠르게 가속하다가 느려지면서 스크롤 애니메이션 부드럽게 완료하게 함
        //외부에서도 사용 가능한 export 함수 사용 및 Lenis 클래스의 인스턴스 생성 
    });
    
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll",(e) => {
        console.log(e)
    });
    // function raf(time) { ... }: raf라는 이름의 함수를 정의합니다. 이 함수는 requestAnimationFrame을 이용하여 스크롤 애니메이션을 처리합니다.
    // lenis.raf(time);: Lenis 인스턴스의 raf 메서드를 호출하여 스크롤 애니메이션을 처리합니다. 이 메서드는 주어진 시간에 대한 스크롤 애니메이션을 진행합니다.
    // requestAnimationFrame(raf);: raf 함수를 requestAnimationFrame을 이용하여 반복 호출합니다. 이렇게 하면 스크롤 애니메이션은 브라우저가 지원하는 최대 프레임 속도로 진행되며, 부드러운 애니메이션 효과를 얻을 수 있습니다.
    // lenis.on("scroll", (e) => { ... });: Lenis 인스턴스에 scroll 이벤트 리스너를 등록합니다. 스크롤 애니메이션 진행 중에 scroll 이벤트가 발생할 때마다 이벤트 객체 e를 출력하는 로그를 콘솔에 출력합니다. scroll 이벤트는 Lenis 클래스가 스크롤 애니메이션을 처리하는 동안 발생하는 이벤트입니다. 이 코드에서는 간단한 예시로 이벤트를 콘솔에 출력하도록 설정되어 있습니다.

}