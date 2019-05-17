$(function () {
    scrollboolean = true;
    $window.on('scroll', function () {
        if (scrollboolean) {
            var scrollTop = $window.scrollTop();
            if (scrollTop > 0) {
                nav.toggleClass('hidden', scrollTop > prev);
                prev = scrollTop;
            }
        }
    });
});