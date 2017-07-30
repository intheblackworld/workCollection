$(function(){
		$(document).ready(function() {
			/*Simple image gallery. Uses default settings*/
			$('.fancybox').fancybox();
             $(document).get(0).oncontextmenu = function() {
              return false;
          };
		});
//MENU=========================================================================================
            $("#btn").click(function () {
                    if ($(this).attr("class") == "menu_close") {
                        $(this).removeClass("menu_close");
                        $("#nav").stop().slideUp(500);
                    } else {
                        $(this).addClass("menu_close");
                        $("#nav").stop().slideDown(500);
                    }
                })



})
