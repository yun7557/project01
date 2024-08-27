// 서브 페이지의 공통부분
const subVisual = () => {};
const subText = () => {};
const subBanner = () => {};

// 서브 페이지별 함수
// sub1

// 함수 담기 (sub1... 관련된 이름으로 수정)
const sub1 = () => {};

// 합치기
const subInit = () => {
    // 공통
    subVisual();
    subText();
    subBanner();

    //페이지별 sub 함수호출
    if (location.pathname.split('/').pop() === 'sub1.html') {
        sub1();
    }
    if (location.pathname.split('/').pop() === 'sub2.html') {
        sub2();
    }
    if (location.pathname.split('/').pop() === 'sub3.html') {
        sub3();
    }
    if (location.pathname.split('/').pop() === 'sub4.html') {
        sub4();
    }
    if (location.pathname.split('/').pop() === 'sub5.html') {
        sub5();
    }
};

// 실행
(() => {
    subInit();
})();
