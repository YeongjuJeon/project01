$(function () {
    const slide = $('.visual-slide li');
    const prevbtn = $('.btnSlidePrev');
    const nextbtn = $('.btnSlideNext');
    const ppbtn = $('.btnSlidepp');

    let current = 0;
    let setIntervalId = undefined;
    timer();

    function timer() {
        setIntervalId = setInterval(function () {
            let prev = slide.eq(current);
            move(prev, 0, '-100%');
            current++;
            if (current == 5) {
                current = 0
            }
            let next = slide.eq(current);
            move(next, '100%', 0);
        }, 2000);
    }

    function move(tg, start, end) {
        tg.css('left', start).stop().animate({
            left: end
        });
    }
});

// 미니슬라이드
let slideBox = $('popup-slide');
let slideImg = $('.popup-slide img');
let prev = $('.popup-slide-btn .psbtn1');
let next = $('.popup-slide-btn .psbtn2');
let pause = $('.popup-slide-btn .psbtn3');
let current = 0;

function show() {
    slideshow = setInterval(function () {
        slideImg.first().appendTo(slideBox);
        slideImg.last().prepend(slideBox);
    })
}