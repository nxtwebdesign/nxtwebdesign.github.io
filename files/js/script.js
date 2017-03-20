// ----- Google Maps -------
function initMap() {
    var lawn = {lat: -27.447983, lng: 153.034910};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
      zoom: 17,
      center: lawn,
      gestureHandling: 'cooperative',
      scrollwheel:  false
    });
    var marker = new google.maps.Marker({
      position: lawn,
      map: map,
      icon: '../files/img/logo.png',
      title: 'Kidney Lawn'
    });
}


// ------ Scroll ------
// Enables the click and scroll functionality
$(document).ready(function (){
    $("#go-home").click(function (){
        $("#home").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-home2").click(function (){
        $("#home").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-about").click(function (){
        $("#about2").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-pricing").click(function (){
        $("#pricing").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-pricing2").click(function (){
        $("#pricing").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-seo").click(function (){
        $("#seo").velocity("scroll", { 
            duration: 1000,
        });
    });
     $("#go-seo2").click(function (){
        $("#seo").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-faq").click(function (){
        $("#faq").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-contact").click(function (){
        $("#contact").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-plans").click(function (){
        $("#plans").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-reasons").click(function (){
        $("#reasons").velocity("scroll", { 
            duration: 1000,
        });
    });
    // ----  Popover settings  -----
    $('a.session-box').click(function(e){
        // Prevents scrolling to the top of the page when clicking a tag with href="#"
        e.preventDefault();
    });
});


//Script to fade out the caption when scrolled past
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = ($(window).height() / 1.7); //1.7 previous
    $('.caption').css({

        'opacity': ((height - scrollTop) / (height))
    });
    $('.caption-two').css({

        'opacity': ((height - scrollTop) / (height))
    });
});
// $(document).scroll(function () {
//     if (window.scrollY > 50) {
//         $(".caption-two").stop().animate({
//             zoom: 0.9
//         });
//     }
//     else if (window.scrollY > 60) {
//         $(".caption-two").stop().animate({
//             zoom: 0.8
//         });
//     }
//     else if (window.scrollY > 70) {
//         $(".caption-two").stop().animate({
//             zoom: 0.7
//         });
//     }
//     else if (window.scrollY > 80) {
//         $(".caption-two").stop().animate({
//             zoom: 0.6
//         });
//     }
//     else if (window.scrollY > 90) {
//         $(".caption-two").stop().animate({
//             zoom: 0.5
//         });
//     }
//     else {
//         $(".caption-two").stop().animate({
//             zoom: 1
//         });
//     }
// });
//Script to fade out the scroll gif when scrolled past
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = ($(window).height() / 8); //1.7 previous
    $('.icon-scroll').css({

        'opacity': ((height - scrollTop) / (height))
    });
});


//collapse the navbar upon selection from hamburger menu
$(document).on('click','.navbar-collapse.in',function(e) {
	if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
	    $(this).collapse('hide');
	}
});

// $(document).ready(function() {
//         // Transition effect for navbar 
//         $(window).scroll(function() {
//           // checks if window is scrolled more than 550px, adds/removes solid class
//           if($(this).scrollTop() > 550) { 
//               $('.navbar-default-home').addClass('solid');

//           } else {
//               $('.navbar-default-home').removeClass('solid');

//           }
//         });
// });

$(document).ready(function() {
  //if the user agent is not mobile, run the scripts
    if($(window).width() > 758) {
        /* Every time the window is scrolled ... */
      $(window).scroll( function(){
            // checks if window is scrolled more than 550px, adds/removes solid class
          if($(this).scrollTop() > 400) { 
              $('.navbar-default-home').addClass('solid');

          } else {
              $('.navbar-default-home').removeClass('solid');

          }
          var scroll = $(window).scrollTop();
            $(".caption").css({
                "font-size": (100 + scroll/5)  + "%",
                //Blur suggestion from @janwagner: http://codepen.io/janwagner/ in comments
                "-webkit-filter": "blur(" + (scroll/200) + "px)",
                filter: "blur(" + (scroll/200) + "px)"
            });
            $(".landing-parallax").css({
                //Blur suggestion from @janwagner: http://codepen.io/janwagner/ in comments
                "-webkit-filter": "blur(" + (scroll/40) + "px)",
                filter: "blur(" + (scroll/40) + "px)"
            });
            $(".landing-parallax-2").css({
                //Blur suggestion from @janwagner: http://codepen.io/janwagner/ in comments
                "-webkit-filter": "blur(" + (scroll/40) + "px)",
                filter: "blur(" + (scroll/40) + "px)"
            });
            $(".landing-parallax-3").css({
                //Blur suggestion from @janwagner: http://codepen.io/janwagner/ in comments
                "-webkit-filter": "blur(" + (scroll/40) + "px)",
                filter: "blur(" + (scroll/40) + "px)"
            });
            $(".caption-two").css({
                "font-size": (100 + scroll/5)  + "%",
                //Blur suggestion from @janwagner: http://codepen.io/janwagner/ in comments
                "-webkit-filter": "blur(" + (scroll/200) + "px)",
                filter: "blur(" + (scroll/200) + "px)"
            });
        });
    }
    //if mobile screen width detected, don't run fade in scripts
    else{       
      $('#topnav').addClass('solid');
      $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
    }
});