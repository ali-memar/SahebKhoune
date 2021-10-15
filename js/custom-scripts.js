/* Preloader */
$(window).on("load", function () {
    var preloaderFadeOutTime = 500;

    function hidePreloader() {
        var preloader = $(".spinner-wrapper");
        setTimeout(function () {
            preloader.fadeOut(preloaderFadeOutTime);
        }, 500);
    }

    hidePreloader();
});
/* end of preloader */

// toggle nav
function openNav() {
    const doc = document.getElementById("toggleNav");
    if (doc.style.right == -70 + "%") {
        //for show
        doc.style.right = 0 + "%";
        document.getElementById("closeNav").innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="33.527" height="32.527" viewBox="0 0 33.527 32.527">\n' +
            '  <g id="Group_152" data-name="Group 152" transform="translate(-353.381 -18.737)">\n' +
            '    <line id="Line_12" data-name="Line 12" x1="36" transform="translate(357.916 47.728) rotate(-45)" fill="none" stroke="#696969" stroke-linecap="round" stroke-width="5"/>\n' +
            '    <line id="Line_16" data-name="Line 16" x1="36" transform="translate(356.916 22.272) rotate(45)" fill="none" stroke="#696969" stroke-linecap="round" stroke-width="5"/>\n' +
            "  </g>\n" +
            "</svg>\n";
    } else {
        //for close
        doc.style.right = -70 + "%";
        document.getElementById("closeNav").innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="43" height="27" viewBox="0 0 43 27">\n' +
            '                <g id="Group_152" data-name="Group 152" transform="translate(-347.144 -21.5)" opacity="0.69">\n' +
            '                    <line id="Line_12" data-name="Line 12" x1="36" transform="translate(350.644 45)" fill="none"\n' +
            '                          stroke="#272727" stroke-linecap="round" stroke-width="7"/>\n' +
            '                    <line id="Line_13" data-name="Line 13" x1="36" transform="translate(350.644 35)" fill="none"\n' +
            '                          stroke="#272727" stroke-linecap="round" stroke-width="7"/>\n' +
            '                    <line id="Line_14" data-name="Line 14" x1="36" transform="translate(350.644 25)" fill="none"\n' +
            '                          stroke="#272727" stroke-linecap="round" stroke-width="7"/>\n' +
            "                </g>\n" +
            "            </svg>";
    }
}

function closeNav() {
    //for close
    document.getElementById("toggleNav").style.right = -70 + "%";
    document.getElementById("closeNav").innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="43" height="27" viewBox="0 0 43 27">\n' +
        '                <g id="Group_152" data-name="Group 152" transform="translate(-347.144 -21.5)" opacity="0.69">\n' +
        '                    <line id="Line_12" data-name="Line 12" x1="36" transform="translate(350.644 45)" fill="none"\n' +
        '                          stroke="#272727" stroke-linecap="round" stroke-width="7"/>\n' +
        '                    <line id="Line_13" data-name="Line 13" x1="36" transform="translate(350.644 35)" fill="none"\n' +
        '                          stroke="#272727" stroke-linecap="round" stroke-width="7"/>\n' +
        '                    <line id="Line_14" data-name="Line 14" x1="18" transform="translate(368.644 25)" fill="none"\n' +
        '                          stroke="#272727" stroke-linecap="round" stroke-width="7"/>\n' +
        "                </g>\n" +
        "            </svg>";
}

// end of toggle nav

/* Back To Top Button */
// (function ($) {
//     "use strict";
//     // jQuery for page scrolling feature - requires jQuery Easing plugin
//     $(function () {
//         $(document).on("click", "a.page-scroll", function (event) {
//             var $anchor = $(this);
//             $("html, body")
//                 .stop()
//                 .animate(
//                     {
//                         scrollTop: $($anchor.attr("href")).offset().top,
//                     },
//                     600,
//                     "easeInOutExpo"
//                 );
//             event.preventDefault();
//         });
//     });

//     // create the back to top button
//     $("body").prepend('<a href="#" class="back-to-top page-scroll" target="_self"></a>');
//     var amountScrolled = 700;
//     $(window).scroll(function () {
//         if ($(window).scrollTop() > amountScrolled) {
//             $("a.back-to-top").fadeIn("500");
//         } else {
//             $("a.back-to-top").fadeOut("500");
//         }
//     });
// })(jQuery);
/* End of Back To Top Button */

function smoothScroll(elementId) {
    var MIN_PIXELS_PER_STEP = 16;
    var MAX_SCROLL_STEPS = 30;
    var target = document.getElementById(elementId);
    var scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    var targetY = 0;
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target == target.offsetParent);

    var pixelsPerStep = Math.max(
        MIN_PIXELS_PER_STEP,
        (targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS
    );

    let count = 0;
    var stepFunc = function () {
        count++;
        scrollContainer.scrollTop = Math.min(targetY, pixelsPerStep + scrollContainer.scrollTop);

        console.log(scrollContainer.scrollTop + "  : " + targetY);
        if (scrollContainer.scrollTop >= targetY - 100) {
            return;
        }

        if (count > 30) {
            return;
        }
        window.requestAnimationFrame(stepFunc);
    };

    window.requestAnimationFrame(stepFunc);
}
