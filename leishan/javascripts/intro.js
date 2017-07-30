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
    $(this).ekkoLightbox();
}); 

var rewardAnimation = function () {
    $('.reward-main').animate({opacity: 1}, 1000);
    $('.reward-img-3:eq(0)').delay(400).animate({opacity: 1,marginTop: "0px"}, 300);
    $('.reward-img-3:eq(1)').delay(600).animate({opacity: 1,marginTop: "0px"}, 300);
    $('.reward-img-3:eq(2)').delay(800).animate({opacity: 1,marginTop: "0px"}, 300);
    $('.reward-img-3:eq(3)').delay(1000).animate({opacity: 1,marginTop: "0px"}, 300);
    $('.reward-img-4:eq(0)').delay(1200).animate({opacity: 1,marginTop: "0px"}, 300);
    $('.reward-img-4:eq(1)').delay(1400).animate({opacity: 1,marginTop: "0px"}, 300);
    $('.reward-img-4:eq(2)').delay(1600).animate({opacity: 1,marginTop: "0px"}, 300);
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(0)>a").addClass("active");
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
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(1)>a").addClass("active");
    
        };
var serviceAnimation = function () {
    $('.service-title').fadeIn(500);
    $('.service-sub').delay(400).fadeIn(500);
    $('.service-list').delay(800).fadeIn(500);
    // $('.company-control').delay(800).animate({opacity: 1}, 500);
    // $('.box').transition({ scale: 2.2 });
    $(".service-circle:eq(0)").delay(1200).transition({ scale: 1 },500,'ease');
    $(".service-circle:eq(0)>i").delay(1200).transition({ scale: 1 },500,'ease');
    $(".service-item:eq(0)").delay(1200).transition({ scale: 1 },500,'ease');
    $(".service-circle:eq(1)").delay(1400).transition({ scale: 1 },500,'ease');
    $(".service-circle:eq(1)>i").delay(1400).transition({ scale: 1 },500,'ease');
    $(".service-item:eq(1)").delay(1400).transition({ scale: 1 },500,'ease');
    $(".service-circle:eq(2)").delay(1600).transition({ scale: 1 },500,'ease');
    $(".service-circle:eq(2)>i").delay(1600).transition({ scale: 1 },500,'ease');
    $(".service-item:eq(2)").delay(1600).transition({ scale: 1 },500,'ease');
    $(".service-circle:eq(3)").delay(1800).transition({ scale: 1 },500,'ease');
    $(".service-circle:eq(3)>i").delay(1800).transition({ scale: 1 },500,'ease');
    $(".service-item:eq(3)").delay(1800).transition({ scale: 1 },500,'ease');
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(2)>a").addClass("active");
        };
var activityAnimation = function () {
    $('.activity-title').fadeIn(500);
    $('.activity-sub').delay(400).fadeIn(500);
    $('.activity-list').delay(800).fadeIn(500);
    $('.bs-example-2').delay(1000).animate({opacity: 1}, 500);
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(3)>a").addClass("active");
    
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
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(4)>a").addClass("active");
};
var contactAnimation = function () {
    $('.user').animate({opacity: 1,marginTop: "0px"}, 1000);
    $('.mail-mask').delay(400).animate({opacity: 1,marginTop: "0px"}, 700);
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(5)>a").addClass("active");
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
    if (distance<550) {      
        rewardAnimation();
    } 
    if (distance>1000) {      
        companyAnimation();
    } 
    if (distance>2100) {      
        serviceAnimation();
    } 
     if (distance> 2900){
    activityAnimation();    
    }
    if (distance> 3350){
    eliteAnimation();    
    }
    if (distance> 3900){
    contactAnimation();    
    }

    if (distance> 4100){
        // alert(distance)
    footerAnimation();    
    }
}
else if ($(window).width() > 400 &&$(window).width() <= 480) {
   var distance = $(window).scrollTop();
   console.log(distance);
    if (distance<550) {      
        rewardAnimation();
    } 
    if (distance>600) {      
        companyAnimation();
    } 
    if (distance>1500) {      
        serviceAnimation();
    } 
     if (distance> 2000){
    activityAnimation();    
    }
    if (distance> 2700){
    eliteAnimation();    
    }
    if (distance> 3300){
    contactAnimation();    
    }

    if (distance> 3800){
        // alert(distance)
    footerAnimation();    
    }
}
else if ($(window).width() > 480 &&$(window).width() <= 767) {
   var distance = $(window).scrollTop();
   console.log(distance);
    if (distance<550) {      
        rewardAnimation();
    } 
    if (distance>600) {      
        companyAnimation();
    } 
    if (distance>1200) {      
        serviceAnimation();
    } 
     if (distance> 1800){
    activityAnimation();    
    }
    if (distance> 2700){
    eliteAnimation();    
    }
    if (distance> 3300){
    contactAnimation();    
    }

    if (distance> 3800){
        // alert(distance)
    footerAnimation();    
    }

} else if ($(window).width() > 767 && $(window).width() <= 980) {
    var distance = $(window).scrollTop();
    console.log(distance);
     // alert(distance);
    if (distance<300) {      
        rewardAnimation();
    }
    if (distance>330) {      

        companyAnimation();
    } 
    if (distance>950) {      
        serviceAnimation();
    } 
    if (distance> 1500){
    activityAnimation();    
    }
    if (distance> 2400){
    eliteAnimation();    
    }
    if (distance> 3000){
    contactAnimation();    
    }

    if (distance> 3200){
        // alert(distance)
    footerAnimation();    
    }
} else {
    var distance = $(window).scrollTop();
    console.log(distance);
    if (distance<300) {      
        rewardAnimation();
    }
    if (distance> 300){
    companyAnimation();
    }
    if (distance> 900){  
    serviceAnimation();    
    }
    if (distance> 1500){
    activityAnimation();    
    }
    if (distance> 2400){
    eliteAnimation();    
    }
    if (distance> 3000){
    contactAnimation();    
    }

    if (distance> 3200){
        // alert(distance)
    footerAnimation();    
    }








    if (distance>600) {      
        menuitemAnimation();
    } 
    
    
}




















});

});