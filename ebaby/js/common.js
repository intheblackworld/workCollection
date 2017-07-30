// JavaScript Document
//jQuery is required to run this code
$(function () {
    $(document).get(0).oncontextmenu = function() {
              return false;
          };
    $("a").click(function () {
        if (!$(this).hasClass("dropdown-toggle")) {
            var url = $(this).attr("href");
            if (!$(this).attr("target") == "_blank") {
                setTimeout(function () {
                    window.location = url;
                }, 500);
                return false;
            }
        }
    });
    $('.carousel').each(function () {
        $(this).carousel({
            //interval: false
            interval: 5000
        });
    });
});

