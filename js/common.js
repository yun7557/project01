// 공통으로 한번. common.js
const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const preventDefaultAnchor = () => {
    const $links = getAll('a[href="#"]');
    $links.forEach((link) => {
        link.addEventListener('click', (e) => e.preventDefault());
    });
};

// 공통으로 들어가는 내용을 성격별로 함수로 만들기

const gnbMenu = () => {
    const $header = get('#header');
    const $gnbWrap = get('#header .nav .gnb-wrap');
    const $gnbLis = getAll('#header .nav .gnb-wrap .gnb .gnb-li');
    const $lnbs = getAll('#header .nav .gnb .gnb-li .lnb');

    let h = parseInt(getComputedStyle($header).height, 10);
    let arrH = [];

    $gnbLis.forEach((li, idx) => {
        arrH.push($lnbs[idx].offsetHeight);

        li.addEventListener('mouseenter', () => {
            $gnbLis.forEach((liItem) => {
                liItem.classList.remove('on');
            });
            $lnbs.forEach((lnbItem) => {
                lnbItem.classList.remove('on');
            });
            $header.classList.remove('off');

            li.classList.add('on');
            $lnbs[idx].classList.add('on');
            $header.classList.add('on');

            $header.style.height = `${h + arrH[idx] + 76}px`;
            $gnbWrap.style.height = `${h + arrH[idx] + 76}px`;
        });
    });

    $gnbWrap.addEventListener('mouseleave', () => {
        $gnbLis.forEach((liItem) => {
            liItem.classList.remove('on');
        });
        $lnbs.forEach((lnbItem) => {
            lnbItem.classList.remove('on');
        });
        $header.classList.remove('on');

        $header.classList.add('off');

        $header.style.height = `${h}px`;
        $gnbWrap.style.height = `${h}px`;
    });
};

// 합치기
const comInit = () => {
    const getPage = (page, tag) => {
        fetch(page)
            .then((res) => res.text())
            .then((res) => {
                if (tag === '#header') {
                    get(tag).innerHTML = res;

                    gnbMenu();
                }
                if (tag === '#footer') {
                    get(tag).innerHTML = res;
                }
            });
    };
    getPage('../../../page/header.html', '#header');
    getPage('../../../page/footer.html', '#footer');
};

// 실행
(() => {
    preventDefaultAnchor();
    comInit();
})();
