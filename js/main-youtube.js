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
    1. Clicking actions
    2. Transition for nav
    3. Newsletter plugin
    4. FullPage Syntax
    5. Portfolio images
*/

$(document).ready(function(){
    "use strict";

    /* ------------------------------------- */
    /* 1. Clicking actions ................. */
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
    /* 2. Transition for nav ............... */
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
    /* 3. Newsletter plugin ................ */
    /* ------------------------------------- */

    $("#notifyMe").notifyMe();

    /* ------------------------------------- */
    /* 4. FullPage Syntax .................. */
    /* ------------------------------------- */

    $('#fullpage').fullpage({
        navigation: true,
        navigationTooltips: ['Home', 'About', 'Services', 'Portfolio', 'Team', 'Contact'],
        responsiveWidth: 1201,
        responsiveHeight: 800
    });

    /* ------------------------------------- */
    /* 5. Portfolio images ................. */
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