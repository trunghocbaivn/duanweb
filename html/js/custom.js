$(document).ready(function(){
    $("header").sticky({topSpacing:0,zIndex: 1001,className:'fixed-header'});
    $('#btn-search').click(function(){
        $(this).toggleClass('active');
        $('.box-search').toggleClass('active');
    });
    $('#open-menu').click(function(){
        $('#sticker').toggleClass('active');
    });
    $('#close-menu , #sticker .overlayer').click(function(){
        $('#sticker').removeClass('active');
    });
    $('.body-wrapper>ul>li').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).children('ul').slideUp();
        }
        else{
            $(this).siblings('li').removeClass('active');
            $(this).siblings('li').children('ul').slideUp();
            $(this).addClass('active');
            $(this).children('ul').slideDown();
        }
    });
    $('.body-wrapper>ul>li.active').has('ul').click(function(){
        $(this).children('ul').slideToggle();
    });
    $('.slide-banner ul').lightSlider({
        item:1,
        loop:false,
        slideMove:1,
        slideMargin:0,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:2000,
        pause:4000,
        auto:true,
        adaptiveHeight:true,
        onSliderLoad: function() {
            $('.slide-banner ul').removeClass('cS-hidden');
        } 
    });
    $('.slide-p ul').lightSlider({
        item:4,
        loop:true,
        slideMove:1,
        slideMargin:10,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        pager:false,
        onSliderLoad: function() {
            $('.slide-p ul').removeClass('cS-hidden');
        } ,
        responsive : [
            {
                breakpoint:991,
                settings: {
                    item:3,
                    slideMove:1,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });
    $(document).ready(function () {
        $(".slide-panter ul").simplyScroll();
    });
});