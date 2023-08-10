
$(function(){

    // header
    let winWidth = $(window).width();

    $(window).on('resize', function(){
        winWidth = $(this).width();
        if(winWidth > 768){
            $('.submenu').removeAttr('style');
            $('.gnb_wrap').removeAttr('style');
        }else{
            
        }
        saveSectionPos();
    });

    $('.toggle').on('click', function(){
        $('.gnb_wrap').fadeToggle();
    });

    $('.gnb > li').on('mouseenter', function(){
        if(winWidth > 768){
            $(this).children('.submenu').stop().slideDown();
        } else{
            $('.gnb > li > a').off('click');
            $('.gnb > li > a').on('click', function(){
                $('.submenu').stop().slideUp();
                $(this).next('.submenu').stop().slideToggle();
            });
        }
    });
    $('.gnb > li').on('mouseleave', function(){
        if(winWidth > 768){
            $(this).children('.submenu').stop().slideUp();
        }
    });

    // main
    var swiper = new Swiper(".visual .swiper", {
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".visual .swiper-button-next",
          prevEl: ".visual .swiper-button-prev",
        },
      });

    // best
    $('ul.tab_btn li').click(function(e) {
        e.preventDefault();
        var activeTab = $(this).attr('data-tab');

        $('ul.tab_btn li').removeClass('on');
        $('.tab_content').removeClass('on');
        $(this).addClass('on');
        $('.' + activeTab).addClass('on');
    })

    // showroom
    var swiper = new Swiper(".showroom .swiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        allowTouchMove: true,
        simulateTouch: false,
    });

    // instagram
    var swiper = new Swiper(".instagram .swiper", {
        speed: 1000,
        scrollbar: {
            el: ".instagram .swiper-scrollbar",
            hide: true,
        },
        slidesPerView: 5,
        spaceBetween: 30,   
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 2.5,
                // slidesPerGroup: 2,
            },
            480: {
                slidesPerView: 2.5,
            },
            768: {
                slidesPerView: 4.5,
            },
            1200: {
                slidesPerView: 5,
            },
        },
      });
});