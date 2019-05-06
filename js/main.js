/*
* DSTNY - Revolutionary Coming Soon Template
* Build Date: November 2017
* Last Update: November 2017
* Author: Madeon08
* Copyright (C) 2017 Madeon08
* This is a premium product available exclusively here : https://themeforest.net/user/Madeon08/portfolio
*/

/*  TABLE OF CONTENTS
    ---------------------------
    1. Loading / Opening
    2. Clicking actions
    3. Transition for nav
    4. Newsletter plugin
    5. FullPage Syntax
    6. Portfolio images
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).load(function(){
    "use strict";

    $('.content-inside h1, .content-inside p, .content-inside a').addClass('before-loading');

    setTimeout(function(){
        
        $("#loading").addClass('loaded');

        $('.content-inside h1, .content-inside p, .content-inside a').each(function(i) {
        (function(self) {
            setTimeout(function() {
                $(self).removeClass('before-loading').addClass('animated-middle fadeInUp');
            },(i*150)+150);
            })(this);
        });

    },2800);

    setTimeout(function(){

        $("#loading").remove();

    },3200);

    setTimeout(function(){

        $('.content-inside h1, .content-inside p, .content-inside a').removeClass('animated-middle fadeInUp');

        $(".light-btn").addClass("animated-quick");

    },4500);

});


$(document).ready(function(){
    "use strict";

    /* ------------------------------------- */
    /* 2. Clicking actions ................. */
    /* ------------------------------------- */

    $('#small-screen-menu').on( "click", function() {

        $("#fullpage, #left-part, #fp-nav").toggleClass("menu-opened");

        $(this).toggleClass('open').toggleClass('custom-menu');
    });

    $('#show-news-form').on( "click", function() {

        $("#hide-newsletter").removeClass("display-none zoomOut");
        
        $(".light-btn").addClass("fadeOutDown").removeClass("fadeInUp");

        setTimeout(function(){

            $("#subscribe").removeClass('fadeOutDown display-none').addClass('fadeInUp');

            $(".light-btn").addClass("display-none");
            
        },310);
    });

    $('#hide-newsletter').on( "click", function() {

        $("#hide-newsletter").addClass('zoomOut');

        $("#subscribe").removeClass('fadeInUp').addClass('fadeOutDown');

        setTimeout(function(){

            $(".light-btn").removeClass("fadeOutDown display-none").addClass("fadeInUp");

            $("#subscribe").addClass("display-none");

            $("#hide-newsletter").addClass("display-none");
            
        },310);
    });

    /* ------------------------------------- */
    /* 3. Transition for nav ............... */
    /* ------------------------------------- */

    $(window).on("load resize", function() {
        if ($(this).width() < 1201) {
            $("#fp-nav").addClass("transition-desktop-mobile");
        }

        else if ($(this).height() < 800) {
            $("#fp-nav").addClass("transition-desktop-mobile");
        }

        else {
            $("#fp-nav").removeClass("transition-desktop-mobile");
        }
    });

    /* ------------------------------------- */
    /* 4. Newsletter plugin ................ */
    /* ------------------------------------- */

    $("#notifyMe").notifyMe();

    /* ------------------------------------- */
    /* 5. FullPage Syntax .................. */
    /* ------------------------------------- */

    $('#fullpage').fullpage({
        navigation: true,
        navigationTooltips: ['Home', 'About', 'Services', 'Portfolio', 'Team', 'Contact'],
        responsiveWidth: 1201,
        responsiveHeight: 800
    });

    /* ------------------------------------- */
    /* 6. Portfolio images ................. */
    /* ------------------------------------- */

    $('.gallery-link')
        // Background set up
        .each(function(){
        $(this)
        // Add a photo container
        .append('<div class="photo"></div>')
        // Set up a background image for each link based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    });
 
});