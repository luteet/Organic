$(function(){

    // ==========================  Слайдери  ==========================

    $('.sponsors__slider--body').slick({
        infinite: true,
        slidesToShow: 5,
        arrows: false,
        dots: true,
        slidesToScroll: 2,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
              },
              
        ]
    });
    $('.reviews__slider--body').slick({
        slidesToShow: 1,
        centerMode: true,
        arrows: false,
        centerPadding: "0px",
        dots: true,

    });

    // ==========================  /Слайдери  ==========================


    // ==========================  Название страницы (нужно для ниж. подчоркевание в меню)  ==========================

    let namePage = $('body').data('name-page');
    $.each($('[data-name-page=' + namePage + ']'), function() {
        if(!$(this).is('body')) {
            $(this).addClass('active');
        }
    })

    // ==========================  /Название страницы (нужно для ниж. подчоркевание в меню)  ==========================


    // ==========================  Бургер  ==========================

    $('.nav__burger').on('click', function() {
        $('.nav__burger, .nav__list').toggleClass('active');
        $('body').toggleClass('lock');
    });

    // ==========================  /Бургер  ==========================


    // ==========================  Блокиратор картинок  ==========================

    $('.img-lock').on('dragstart', function(e) { e.preventDefault(); }).contextmenu(function() {
        return false;
    });

    // ==========================  /Блокиратор картинок  ==========================


    // ==========================  Подгрузка блоков (кнопка "загрузить ещё")  ==========================

    let lengthBlogItem = 0;
    $('.blog__list--btn').on('click', function() {
        if($('.blog__list--item.hide').length > 0) {
            $.each($('.blog__list--item.hide'), function() {
                if(lengthBlogItem <= 3) {
                    lengthBlogItem++;
                    $(this).removeClass('hide');
                }
            });
        }
        if($('.blog__list--item.hide').length == 0) {
            $(this).addClass('none');
        }
        
        lengthBlogItem = 0;
    });

    // ==========================  /Подгрузка блоков (кнопка "загрузить ещё")  ==========================
    

    // ==========================  Медиа запроси  ==========================

    function customeMediaEvent() {
        if($(this).width() > 900) {
            $('.nav__burger, .nav__list').removeClass('active');
            $('body').removeClass('lock');
        }
    }
    customeMediaEvent()
    $(window).resize(function() {
        if($(this).width() > 900) {
            customeMediaEvent();
        }
    })

    // ==========================  /Медиа запроси  ==========================


    // ==========================  Скривание шапки при скроле  ==========================

    function hHeader(settings) {

        let header = settings.elemName,
            distance = settings.distance,
            scrollPrev = 0, ifHeaderTopClass, ifHeaderTopDistance,
            scrollDown = distance,          
            distanceHide = settings.distanceHide,
            distanceShow = settings.distanceShow,
            scrolled = $(window).scrollTop(),
            scrollDownCheck = false,
            scrollTop = 0,
            scrollTopCheck = false,
            scrollToTop = false,
            scrollToDown = false;
            

            scrollDown = distanceHide;

            ifHeaderTopClass = settings.ifHeaderTop[0];
            ifHeaderTopDistance = settings.ifHeaderTop[1];        

        function ifHeaderTop() {
            if(scrolled <= ifHeaderTopDistance) {
                $(header).addClass(ifHeaderTopClass);
            }
            else if (scrolled > ifHeaderTopDistance) {
                $(header).removeClass(ifHeaderTopClass);
            }
        }

        ifHeaderTop();

        $(window).scroll(function () {
            scrolled = $(window).scrollTop();          
            if (scrolled == 0) {
                $(header).removeClass(settings.classToHide);
                scrollTopCheck = true;
            }

            ifHeaderTop();
    
            if (scrolled > 100 && scrolled > scrollPrev) {
                if (scrollToDown == false) {
                    scrollToTop = false;
                    scrollDown = scrolled + distanceHide;
                    scrollDownCheck = false;
                    scrollToDown = true;
                }
                
            } else if (scrollToTop == false) {
                
                    scrollToDown = false;
                    scrollTop = scrolled - distanceShow;
                    scrollTopCheck = false;
                    scrollToTop = true;
                }
                
            scrollPrev = scrolled;
            if (scrolled >= scrollDown && scrollDownCheck == false) {
                // hide elem
                $(header).addClass(settings.classToHide);
                scrollDownCheck = true;
            }
            if (scrollTop >= scrolled && scrollTopCheck == false) {
                // show elem
                $(header).removeClass(settings.classToHide);
                scrollTopCheck = true;
            }
        });
    }
    
    hHeader({
        elemName: $('.header'),
        classToHide: 'hide',
        distanceHide: 300,
        distanceShow: 100,
        ifHeaderTop: ['top', 0],
        classAnchorForTop: true,
    });

    // ==========================  /Скривание шапки при скроле  ==========================


    // ==========================  Плавная загрузка картинок  ==========================

    $(".start__image--elem img, .section-bg__item img").on('load', function () {
        $(this).addClass('loaded');
        return false;
    }).each(function(){
        if (this.complete){
            $(this).trigger('load');
        }
    });

    // ==========================  /Плавная загрузка картинок  ==========================


    // ==========================  Анимация при скроле  ==========================

    AOS.init();

    // ==========================  /Анимация при скроле  ==========================

});