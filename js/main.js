$(function () {
    $('.menu-burger').click(function () {
        if ($(window).width() < 575 && !$('.menu-burger').hasClass('menu-burger--active')) {
            $('.menu-burger').addClass('menu-burger--active');
            $('.menu-burger span').addClass('burger-item--active');
            $('.nav').addClass('nav--active')
        } else {
            $('.menu-burger').removeClass('menu-burger--active');
            $('.menu-burger span').removeClass('burger-item--active');
            $('.nav').removeClass('nav--active');
        }
    })

    let docEl = $(document);
    let fadeEl = $('.fade');

    docEl.on('scroll', function () {
        let curScrollPos = docEl.scrollTop();
        
        fadeEl.each(function () {
            let $this = $(this);
            let elemOffsetPos = $this.offset().top;


            if (curScrollPos + $(window).height() > elemOffsetPos) {
                $this.css('opacity', 0 + (curScrollPos - 120 + $(window).height() - elemOffsetPos) / $this.height());
            }
        })

    })
})