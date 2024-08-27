const translateNav = () => {
    let nav1 = '';
    let nav2 = '';
    let nav3 = '';

    // nav1
    if (location.pathname.split('/')[2] === 'products') nav1 = '제품';
    if (location.pathname.split('/')[2] === 'story') nav1 = '추천 컨텐츠';
    if (location.pathname.split('/')[2] === 'service') nav1 = '서비스';

    // nav2
    if (location.pathname.split('/')[4] === 'lifeElc.html') nav2 = '주방/생활가전';
    if (location.pathname.split('/')[4] === 'waterElc.html') nav2 = '룰루비데/연수기';
    if (location.pathname.split('/')[4] === 'berexElc.html') nav2 = 'BEREX 매트리스/안마의자';
    if (location.pathname.split('/')[4] === 'refurb.html') nav2 = '리퍼브 기획전';

    //service
    if (location.pathname.split('/')[4] === 'productService.html') nav2 = '제품 관리 서비스';
    if (location.pathname.split('/')[4] === 'heartService.html') nav2 = '하트서비스';
    if (location.pathname.split('/')[4] === 'airCare.html') nav2 = '하트서비스';
    if (location.pathname.split('/')[4] === 'bidet.html') nav2 = '하트서비스';
    if (location.pathname.split('/')[4] === 'waterSoftener.html') nav2 = '하트서비스';
    if (location.pathname.split('/')[4] === 'totalCareService.html') nav2 = '토탈케어서비스';
    if (location.pathname.split('/')[4] === 'filterService.html') nav2 = '필터회수 서비스';
    if (location.pathname.split('/')[4] === 'codymatching.html') nav2 = '실시간 코디매칭';

    if (location.pathname.split('/')[4] === 'bestreview.html') nav2 = '베스트 리뷰';
    // nav3

    const navSpans = document.querySelector('#wrap navigator .nav .inner');
    if (location.pathname.split('/')[2] !== '') {
        const spanNav1 = document.createElement('span');
        spanNav1.textContent = nav1;
        navSpans.append(spanNav1);
    }
    if (location.pathname.split('/')[4] !== '') {
        const spanNav2 = document.createElement('span');
        spanNav2.textContent = nav2;
        navSpans.append(spanNav2);
    }

    // title
    const title = document.querySelector('head title');
    title.innerHTML = `${nav2} | 코웨이`;
};

// 합치기
const openNavigator = () => {
    const getPage = (page, tag) => {
        fetch(page)
            .then((res) => res.text())
            .then((res) => {
                if (tag === '#navigator') {
                    get(tag).innerHTML = res;

                    translateNav();
                }
            });
    };
    getPage('../../../page/navigator.html', '#navigator');
};

// 실행
(() => {
    openNavigator();
})();
