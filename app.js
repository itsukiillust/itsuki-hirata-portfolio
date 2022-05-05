

$(function() {

   
    // section1
    $('.talk').fadeIn(8000);
    $('.cover-se1').stop().animate({opacity: 0}, 5000);

    // スクロールでの表示
    $(window).scroll(function() {

        
        //header 
        let scrollTop = $(document).scrollTop();
        let section2Top = $('.section2').offset().top;
        let headOut = section2Top - 250;
        if (scrollTop >= headOut) {
            $('.top-left').fadeOut('slow');
            $('.menu').fadeOut('slow');
            $('.back-top').fadeIn('slow');
        } else {
            $('.top-left').fadeIn();
            $('.menu').fadeIn();
            $('.back-top').fadeOut();
        };


        // section2
        let section2In = section2Top - 200;
        if (scrollTop >= section2In) {
            $('.title-se2 > h1').fadeIn('slow');
            $('.title-se2 > h2').fadeIn('slow');
            $('.explain').fadeIn(1500);
            $('.jiku').fadeIn(2500);
            $('.event').fadeIn(1);
            $('.event').stop().animate({left: 0}, 2000);
        } else {
            $('.title-se2 > h1').fadeOut();
            $('.title-se2 > h2').fadeOut();
            $('.explain').fadeOut(1);
            $('.jiku').fadeOut(1);
            $('.event').fadeOut(1);
            $('.event').stop().animate({left: '-100%'}, 1);

        };


        // section3
        let section3Top = $('.section3').offset().top;
        let section3In = section3Top - 500;
        if (scrollTop >= section3In) {
            $('.title-se3').fadeIn('slow');
            $('.thou-box').fadeIn(3000, "swing");
        } else {
            $('.title-se3').fadeOut();
            $('.thou-box').fadeOut();
        };


        // section4
        let section4Top = $('.section4').offset().top;
        let section4In = section4Top - 100;
        if (scrollTop >= section4In) {
            $('.title-se4').fadeIn('slow');
        } else {
            $('.title-se4').fadeOut();
        };
        let section4In1 = section4Top + 50;
        if (scrollTop >= section4In1) {
            $('.artline1').fadeIn(2000, "swing");
        } else {
            $('.artline1').fadeOut();
        };
        let section4In2 = section4Top + 500;
        if (scrollTop  >= section4In2) {
            $('.artline2').fadeIn(2000, "swing");
        } else {
            $('.artline2').fadeOut();
        };
        let section4In3 = section4Top + 800;
        if (scrollTop >= section4In3) {
            $('.artline3').fadeIn(2000, "swing");
        } else {
            $('.artline3').fadeOut();
        };


        // section5 
        let section5Top =$('.section5').offset().top;
        let section5In = section5Top - 200;
        if (scrollTop >= section5In) {
            $('.title-se5').fadeIn('slow');
        } else {
            $('.title-se5').fadeOut();
        };


    });


    //クリックでの表示 
    $('.dra-box').click(function() {
        $('.drawing').fadeIn('slow'); 
    });

    $('.cal-box').click(function() {
        $('.calender').fadeIn('slow'); 
    });

    $('.lin-box').click(function() {
        $('.line').fadeIn('slow'); 
    });

    $('.suz-box').click(function() {
        $('.suzuri').fadeIn('slow'); 
    });

    $('.mov-box').click(function() {
        $('.movie').fadeIn('slow'); 
    });

    $('.san-box').click(function() {
        $('.santa').fadeIn('slow'); 
    });

    $('.x > p').click(function() {
        $('.illust-sh').fadeOut('slow');
    });


});