/* Author: 

*/
$(document).ready(function(){
// elite club
// $(".elite-img>img").on("click",function(){
//     var src = $(this).attr('src');
//     var background_image = "url("+ src + ")";
//     alert(background_image);
//     $(".bg4").css({"background-image": background_image});
// });

if ($(window).width() >= 767){
$(window).stellar();
}
$(function() {
    $("img,div.lazy").lazyload({
         effect : "fadeIn"
    });
});
$(".activity-sub-item").each(function(){
    $(this).text($(this).text().substr(0, 32)+"...");});

    

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({scale_height: false});
}); 


setInterval(function(){
    $(".fa-play-circle-o").transition({scale:1.1},500).transition({scale:1},500)
},1000);
setInterval(function(){
    $(".sloganscroll").transition({marginTop:"440px"},500,'ease').transition({marginTop:"450px"},500,'ease')
},1000);

$(".fa-play-circle-o").click(function(){
    $(".fa-play-circle-o").hide();
    $("#slogan1>h1").fadeIn(500);
  // $(".bg11-2 .bg11-3 .bg11-4 .bg11-5").transition({ opacity: 0,marginTop:"100px" },10,'ease');  
  $(".bg11-1").transition({ "background-position-y":"30%" },4000,'linear').transition({ opacity: 0,marginTop:"100px" },500,'ease');
  $(".bg11-2").delay(4000).transition({ "background-position-y":"70%" },4000,'linear').transition({ opacity: 0,marginTop:"100px" },500,'ease');
  $(".bg11-3").delay(8000).transition({ "background-position-y":"30%" },4000,'linear').transition({ opacity: 0,marginTop:"100px" },500,'ease');
  $(".bg11-4").delay(12000).transition({ "background-position-y":"70%" },4000,'linear').transition({ opacity: 0,marginTop:"100px" },500,'ease');
  $(".bg11-5").delay(16000).transition({ opacity: 1,scale: 1.1},1000,'ease').animate({scale: 0.9}, 300).animate({scale: 1.1}, 300).animate({scale: 0.95}, 300).animate({scale: 1}, 300);
  $("#slogan2").delay(4300).fadeIn(500);
  $("#slogan3").delay(8300).fadeIn(500);
  $("#slogan4").delay(12300).fadeIn(500);
  $(".fa-angle-double-down").delay(17000).transition({ opacity: 1 },100,'linear');
  // $(".startup-mask>h1").transition({ marginLeft: "100px" },18000,'linear');
});






$("#dream").css({"margin-top":448});
var rewardAnimation = function () {
    $('.reward-main').animate({opacity: 1}, 1000);
    $('.reward-img-3:eq(0)').delay(400).animate({opacity: 1,marginTop: "0px"}, 300);
    $('.reward-img-3:eq(1)').delay(600).animate({opacity: 1,marginTop: "0px"}, 300);
    $('.reward-img-3:eq(2)').delay(800).animate({opacity: 1,marginTop: "0px"}, 300);
    $('.reward-img-3:eq(3)').delay(1000).animate({opacity: 1,marginTop: "0px"}, 300);
    $('.reward-img-4:eq(0)').delay(1200).animate({opacity: 1,marginTop: "0px"}, 300);
    $('.reward-img-4:eq(1)').delay(1400).animate({opacity: 1,marginTop: "0px"}, 300);
    $('.reward-img-4:eq(2)').delay(1600).animate({opacity: 1,marginTop: "0px"}, 300);
        };   

rewardAnimation();


$(window).scroll(function(){
    // alert($(window).scrollTop());
// menu效果function
var menuitemAnimation = function () {
    $('.menu-item').animate({opacity: 1}, 1000);
    $('.menu-title:eq(0)').delay(800).animate({opacity: 1,marginTop: "20px"}, 500);
    $('.menu-title:eq(1)').delay(1200).animate({opacity: 1,marginTop: "20px"}, 500);
    $('.menu-title:eq(2)').delay(1600).animate({opacity: 1,marginTop: "20px"}, 500);
        };




var companyAnimation = function () {
    $('.company-title').animate({opacity: 1,marginLeft: "0px"}, 500);
    $('.company-sub').delay(200).animate({opacity: 1,marginLeft: "0px"}, 500);
    $('.company-list').delay(400).animate({opacity: 1,marginLeft: "0px"}, 500);
    $('.company-control').delay(800).animate({opacity: 1}, 500);
    
        };
var serviceAnimation = function () {
    $('.service-title').fadeIn(500);
    $('.service-sub').delay(400).fadeIn(500);
    $('.service-list').delay(800).fadeIn(500);
    // $('.company-control').delay(800).animate({opacity: 1}, 500);
    // $('.box').transition({ scale: 2.2 });
    $(".service-circle:eq(0)").delay(1200).transition({ scale: 1 },500,'ease');
    $(".service-circle:eq(0)>i").delay(1200).transition({ scale: 1 },500,'ease');
    $(".service-item:eq(0)").delay(200).transition({ scale: 1 },500,'ease');
    $(".service-circle:eq(1)").delay(1400).transition({ scale: 1 },500,'ease');
    $(".service-circle:eq(1)>i").delay(1400).transition({ scale: 1 },500,'ease');
    $(".service-item:eq(1)").delay(400).transition({ scale: 1 },500,'ease');
    $(".service-circle:eq(2)").delay(1600).transition({ scale: 1 },500,'ease');
    $(".service-circle:eq(2)>i").delay(1600).transition({ scale: 1 },500,'ease');
    $(".service-item:eq(2)").delay(600).transition({ scale: 1 },500,'ease');
    $(".service-circle:eq(3)").delay(1800).transition({ scale: 1 },500,'ease');
    $(".service-circle:eq(3)>i").delay(1800).transition({ scale: 1 },500,'ease');
    $(".service-item:eq(3)").delay(800).transition({ scale: 1 },500,'ease');
        };
var activityAnimation = function () {
    $('.activity-title').fadeIn(500);
    $('.activity-sub').delay(400).fadeIn(500);
    $('.activity-list').delay(800).fadeIn(500);
    $('.bs-example-2').delay(1000).animate({opacity: 1}, 500);
    
};
var eliteAnimation = function () {
    $('.elite-logo').animate({opacity: 1,marginLeft: "-10px"}, 500);
    $('.elite-list').delay(400).animate({opacity: 1,marginLeft: "0px"}, 500);
    $(".elite-img:eq(0)").delay(600).transition({ scale: 1 },500,'ease');
    $(".elite-img:eq(1)").delay(900).transition({ scale: 1 },500,'ease');
    $(".elite-img:eq(2)").delay(1200).transition({ scale: 1 },500,'ease');
    $(".elite-img:eq(3)").delay(1500).transition({ scale: 1 },500,'ease');
    $(".elite-img:eq(4)").delay(1800).transition({ scale: 1 },500,'ease');
    $(".elite-img:eq(5)").delay(2100).transition({ scale: 1 },500,'ease');
};
var contactAnimation = function () {
    $('.user').animate({opacity: 1,marginTop: "0px"}, 1000);
    $('.mail-mask').delay(400).animate({opacity: 1,marginTop: "0px"}, 700);
};
var footerAnimation = function () {
    $('.footer-logo').animate({opacity: 1}, 400);
    $('.line').delay(300).animate({opacity: 1}, 400);
    $('.special-link').delay(600).animate({opacity: 1}, 400);
    $('.quick-link').delay(900).animate({opacity: 1}, 400);
    $('.app').delay(1200).animate({opacity: 1}, 400);
    $('.ins').delay(1500).animate({opacity: 1}, 400);


};
if ($(window).width() <= 400) {
   var distance = $(window).scrollTop();
   console.log(distance);
    if (distance<518) {
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(0)>a").addClass("active");
    }
    if (distance> 518){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(1)>a").addClass("active");
    }
    if (distance> 1560){  
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(2)>a").addClass("active");
    }
    if (distance> 2850){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(3)>a").addClass("active");
    }
    if (distance> 3485){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(4)>a").addClass("active");
    serviceAnimation();
    }
    if (distance> 4020){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(5)>a").addClass("active");
    }

    if (distance> 4710){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(6)>a").addClass("active");
    contactAnimation();  
    footerAnimation();
    }

    
}
else if ($(window).width() > 400 &&$(window).width() <= 480) {
   var distance = $(window).scrollTop();
   console.log(distance);
    
    if (distance> 3300){
    contactAnimation();    
    footerAnimation();    
    }

  
}
else if ($(window).width() > 480 &&$(window).width() <= 767) {
   var distance = $(window).scrollTop();
   console.log(distance);
    if (distance<518) {
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(0)>a").addClass("active");
    }
    if (distance> 518){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(1)>a").addClass("active");
    }
    if (distance> 2000){  
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(2)>a").addClass("active");
    }
    if (distance> 3300){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(3)>a").addClass("active");
    serviceAnimation();
    }
    if (distance> 3900){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(4)>a").addClass("active");
    
    }
    if (distance> 4500){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(5)>a").addClass("active");
    }

    if (distance> 5350){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(6)>a").addClass("active");
    contactAnimation();  
    footerAnimation();  
    }

  

} else if ($(window).width() > 767 && $(window).width() <= 980) {
    var distance = $(window).scrollTop();
    console.log(distance);
     // alert(distance);
     if (distance<518) {
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(0)>a").addClass("active");
    }
    if (distance> 518){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(1)>a").addClass("active");
    }
    if (distance> 1500){  
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(2)>a").addClass("active");
    }
    if (distance> 2000){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(3)>a").addClass("active");
    serviceAnimation();
    }
    if (distance> 2400){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(4)>a").addClass("active");
    
    }
    if (distance> 3000){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(5)>a").addClass("active");
    }

    if (distance> 3650){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(6)>a").addClass("active");
    contactAnimation();  
    footerAnimation();  
    }


} else {
    var distance = $(window).scrollTop();
    console.log(distance);
    if (distance<518) {
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(0)>a").addClass("active");
    }
    if (distance> 18){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(1)>a").addClass("active");
    }
    if (distance> 1010){  
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(2)>a").addClass("active");
    }
    if (distance> 1700){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(3)>a").addClass("active");
    serviceAnimation();
    }
    if (distance> 2100){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(4)>a").addClass("active");
    
    }
    if (distance> 2600){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(5)>a").addClass("active");
    }

    if (distance> 3100){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(6)>a").addClass("active");
    contactAnimation();  
    footerAnimation();
    }









    
    
    
}




















});

});