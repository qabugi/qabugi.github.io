var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/trhx2.png");
        document.title = '::>_<::不要走..好不好..';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/img/trhx2.png");
        document.title = 'ο(=•ω＜=)ρ⌒☆' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});