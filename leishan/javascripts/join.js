/* Author: 

*/
$(document).ready(function(){
// public club
// $(".public-img>img").on("click",function(){
//     var src = $(this).attr('src');
//     var background_image = "url("+ src + ")";
//     alert(background_image);
//     $(".bg4").css({"background-image": background_image});
// });
// 
if ($(window).width() >= 767){
$(window).stellar();
}

$(".2015,.2014,.2013,.2012,.2011").on("click",function(){
    $("body").find(".2015").removeClass("active");
});

    setInterval(function(){ $(".address-mask > .fa-angle-left,.address-mask > .fa-angle-right").css({
        'color': "#a22330","margin-left": "2px"
    }) }, 500);
    setInterval(function(){ $(".address-mask > .fa-angle-left,.address-mask > .fa-angle-right").css({
        'color': "black","margin-left": "-2px"
    }) }, 1000);


    $(".news-hint").each(function(){
    $(this).text($(this).text().substr(0, 5)+"...");});
var historyAnimation = function () {
    $('.history-title').delay(500).animate({opacity: 1}, 1000);
    $('.history-mask').delay(500).animate({opacity: 1,marginTop: "0px"}, 1000);
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(0)>a").addClass("active");
        };   
historyAnimation();
$(function() {
    $("img,div.lazy").lazyload({
        effect : "fadeIn"
    });
});
$('.map').tinyMap({
    'center': ['25.054571', '121.532846'],
    'zoom': 18,
    'markerWithLabel': true,
    'marker': [
        {'addr': ['25.054528', '121.532798'], 'labelContent': '<strong>台北總公司</strong><br><strong>104 台北市松江路156-1號3F</strong>','labelClass' : 'labels'},
        {'addr': ['25.054943', '121.532822'], 'labelContent': '<strong>首都服務中心</strong><br><strong>104 台北市松江路158號12樓</strong>','labelClass' : 'label'},
        {'addr': ['25.054943','121.532822' ], 'labelContent': '<strong>中炬特許事業部</strong><br><strong>104 台北市松江路158號8樓之4</strong>','labelClass' : 'labels'},
        {'addr': ['25.050286', '121.533293'], 'labelContent': '<strong>帝國服務中心</strong><br><strong>104 台北市中山區松江路87號2樓之2</strong>','labelClass' : 'labels'},
        {'addr': ['24.820671', '121.026781'], 'labelContent': '<strong>翔盟特許事業部</strong><br><strong>302 新竹縣竹北市光明六路東一段251號12樓</strong>','labelClass' : 'labels'},
        {'addr': ['24.411007', '118.298105'], 'labelContent': '<strong>金門特許事業部</strong><br><strong>890 金門縣金沙鎮陽翟63號</strong>','labelClass' : 'labels'},
        {'addr': ['24.168631', '120.640551'], 'labelContent': '<strong>台中服務中心</strong><br><strong>407 臺中市西屯區臺灣大道三段540號14樓之2strong>','labelClass' : 'labels'},
        {'addr': ['22.996690', '120.191775'], 'labelContent': '<strong>台南服務中心</strong><br><strong>700 台南市中西區民生路二段279號17樓</strong>','labelClass' : 'labels'},
        {'addr': ['22.613358', '120.305217'], 'labelContent': '<strong>高雄服務中心</strong><br><strong>806 高雄市前鎮區中山二路260號16樓</strong>','labelClass' : 'labels'},
        {'addr': ['25.055860', '121.536483'], 'labelContent': '<strong>鉅富特許事業部</strong><br><strong>104 台北市中山區建國北路二段84號二樓</strong>','labelClass' : 'labels'},
        {'addr': ['25.022810', '121.295535'], 'labelContent': '<strong>桃園服務中心</strong><br><strong>330 桃園市桃園區中正路1353號9樓</strong>','labelClass' : 'labels'},
        {'addr': ['26.154674', '119.949910'], 'labelContent': '<strong>寶勝特許事業部</strong><br><strong>209 連江縣南竿鄉介壽村214號1樓</strong>','labelClass' : 'labels'},
    ]
});
$(".address-item:eq(0)").click(function(){$(".map").tinyMap('panTo', ['25.054528', '121.532798']);});
$(".address-item:eq(1)").click(function(){$(".map").tinyMap('panTo', ['25.054943', '121.532822']);});
$(".address-item:eq(2)").click(function(){$(".map").tinyMap('panTo', ['25.054943','121.532822' ]);});
$(".address-item:eq(3)").click(function(){$(".map").tinyMap('panTo', ['25.050286', '121.533293']);});
$(".address-item:eq(4)").click(function(){$(".map").tinyMap('panTo', ['24.820671', '121.026781']);});
$(".address-item:eq(5)").click(function(){$(".map").tinyMap('panTo', ['24.411007', '118.298105']);});
$(".address-item:eq(6)").click(function(){$(".map").tinyMap('panTo', ['24.168631', '120.640551']);});
$(".address-item:eq(7)").click(function(){$(".map").tinyMap('panTo', ['22.996690', '120.191775']);});
$(".address-item:eq(8)").click(function(){$(".map").tinyMap('panTo', ['22.613358', '120.305217']);});
$(".address-item:eq(9)").click(function(){$(".map").tinyMap('panTo', ['25.055860', '121.536483']);});
$(".address-item:eq(10)").click(function(){$(".map").tinyMap('panTo', ['25.022810', '121.295535']);});
$(".address-item:eq(11)").click(function(){$(".map").tinyMap('panTo', ['26.154674', '119.949910']);});

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
}); 

// 媒體露出
var animateNumber = function(){
    $('.news-count>h1').animateNumber({ number: 74,easing: 'easeInQuad' },4000);
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(2)>a").addClass("active");
  
} 

// news tab
$(".one").on("click",function(){var src = $(this).find("img").attr("src");$(".news-highlight>img").attr("src",src);});
$(".two").on("click",function(){var src = $(this).find("img").attr("src");$(".news-highlight>img").attr("src",src);});
$(".three").on("click",function(){var src = $(this).find("img").attr("src");$(".news-highlight>img").attr("src",src);});
$(".p1").on("click",function(){var src = $(this).find("img").attr("src");$(".public-highlight>img").attr("src",src);});
$(".p2").on("click",function(){var src = $(this).find("img").attr("src");$(".public-highlight>img").attr("src",src);});
$(".p3").on("click",function(){var src = $(this).find("img").attr("src");$(".public-highlight>img").attr("src",src);});
$(".p4").on("click",function(){var src = $(this).find("img").attr("src");$(".public-highlight>img").attr("src",src);});
$(".p5").on("click",function(){var src = $(this).find("img").attr("src");$(".public-highlight>img").attr("src",src);});
$(".p6").on("click",function(){var src = $(this).find("img").attr("src");$(".public-highlight>img").attr("src",src);});
//address sidebar show hide
$(".address-mask>.fa-angle-left,.address-mask>.fa-angle-right").on("click",function(){
$(this).parent(".address-mask").animate({opacity: 0,marginRight: "-300px"},500);
$(this).parent(".address-mask").hide(100);
$("body").find(".add-sec>.fa-angle-right").delay(200).animate({opacity: 1}, 300)});
$(".add-sec>.fa-angle-right").on("click",function(){
$("body").find(".add-sec>.fa-angle-right").animate({opacity: 0}, 10)
$("body").find(".address-mask").animate({opacity: 1,marginRight: "0px"},500);
$("body").find(".address-mask").show();
});





$(window).scroll(function(){
    // alert($(window).scrollTop());
// menu效果function
var menuitemAnimation = function () {
    $('.menu-item').animate({opacity: 1}, 1000);
    $('.menu-title:eq(0)').delay(800).animate({opacity: 1,marginTop: "20px"}, 500);
    $('.menu-title:eq(1)').delay(1200).animate({opacity: 1,marginTop: "20px"}, 500);
    $('.menu-title:eq(2)').delay(1600).animate({opacity: 1,marginTop: "20px"}, 500);
        };
var ideaAnimation = function () {
    $('.idea-title').fadeIn(500);
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(1)>a").addClass("active");
    // $('.company-control').delay(800).animate({opacity: 1}, 500);
    // $('.box').transition({ scale: 2.2 });
    $(".idea-circle:eq(0)").delay(500).transition({ scale: 1 },500,'ease');
    $(".idea-item:eq(0)").delay(500).transition({ scale: 1 },500,'ease');
    $(".idea-circle:eq(1)").delay(700).transition({ scale: 1 },500,'ease');
    $(".idea-item:eq(1)").delay(700).transition({ scale: 1 },500,'ease');
    $(".idea-circle:eq(2)").delay(900).transition({ scale: 1 },500,'ease');
    $(".idea-item:eq(2)").delay(900).transition({ scale: 1 },500,'ease');
    $(".idea-circle:eq(3)").delay(1100).transition({ scale: 1 },500,'ease');
    $(".idea-item:eq(3)").delay(1100).transition({ scale: 1 },500,'ease');
        };
var recordAnimation = function () {
    $('.record-img:eq(0)').delay(400).animate({opacity: 1,marginTop: "0px"}, 300);
    $('.record-img:eq(1)').delay(600).animate({opacity: 1,marginTop: "0px"}, 300);
    $('.record-img:eq(2)').delay(800).animate({opacity: 1,marginTop: "0px"}, 300);
    $('.record-img:eq(3)').delay(1000).animate({opacity: 1,marginTop: "0px"}, 300);
    $('.record-img:eq(4)').delay(1200).animate({opacity: 1,marginTop: "0px"}, 300);
    $('.record-img:eq(5)').delay(1400).animate({opacity: 1,marginTop: "0px"}, 300);
    $('.record-img:eq(6)').delay(1600).animate({opacity: 1,marginTop: "0px"}, 300);
    $('.record-nav').delay(1800).fadeIn(300);
    $('.record-mask').delay(1800).fadeIn(300);
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(3)>a").addClass("active");
    
};
var recordAnimation480 = function () {
    $('.record-img:eq(0)').delay(400).animate({opacity: 0.3,marginTop: "40px"}, 300);
    $('.record-img:eq(1)').delay(600).animate({opacity: 0.3,marginTop: "40px"}, 300);
    $('.record-img:eq(2)').delay(800).animate({opacity: 0.3,marginTop: "40px"}, 300);
    $('.record-img:eq(3)').delay(1000).animate({opacity: 0.3,marginTop: "40px"}, 300);
    $('.record-img:eq(4)').delay(1200).animate({opacity: 0.3,marginTop: "40px"}, 300);
    $('.record-img:eq(5)').delay(1400).animate({opacity: 0.3,marginTop: "40px"}, 300);
    $('.record-img:eq(6)').delay(1600).animate({opacity: 0.3,marginTop: "40px"}, 300);
    $('.record-nav').delay(1800).fadeIn(300);
    $('.record-mask').delay(1800).fadeIn(300);
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(3)>a").addClass("active");
    
};
var publicAnimation = function () {
    $('.public-title').animate({opacity: 1}, 500);
    $('.public-sub').delay(400).animate({opacity: 1}, 500);
    $(".public-sub-sub:eq(0)").delay(600).animate({ opacity: 1 },500);
    $(".public-sub-sub:eq(1)").delay(900).animate({ opacity: 1 },500);
    $(".public-list").delay(1200).animate({ opacity: 1 },500);
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(5)>a").addClass("active");
};
var contactAnimation = function () {
    $('.user').animate({opacity: 1,marginTop: "0px"}, 1000);
    $('.mail-mask').delay(400).animate({opacity: 1,marginTop: "0px"}, 700);
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(6)>a").addClass("active");
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
    if (distance< 450) {
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(0)>a").addClass("active");
    }
    if (distance> 600){  
    ideaAnimation();    
    }
    if (distance> 1300){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(2)>a").addClass("active");    
    }
    if (distance > 1900){
    recordAnimation480();
    }
    if (distance> 2640){
    publicAnimation();    
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(4)>a").addClass("active");
    }

    if (distance> 3250){
    
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(5)>a").addClass("active");    
    }

    if (distance> 3750){
        contactAnimation();
    footerAnimation();    
    }

}
else if ($(window).width() > 400 &&$(window).width() <= 480) {
   var distance = $(window).scrollTop();
   // console.log(distance);
    if (distance>50) {      
        menuitemAnimation();
    } 
    
    if (distance>550) {      
        ideaAnimation();
    } 
     if (distance> 1900){
    recordAnimation480(); 
 
    }
    if (distance> 3100){
    publicAnimation();    
    }
    if (distance> 3400){
    contactAnimation();    
    }

    if (distance> 4200){
        // alert(distance)
    footerAnimation();    
    }
}
else if ($(window).width() > 480 &&$(window).width() <= 767) {
   var distance = $(window).scrollTop();
    console.log(distance);
   if (distance< 450) {
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(0)>a").addClass("active");
    }
    if (distance> 600){  
    ideaAnimation();    
    }
    if (distance> 1390){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(2)>a").addClass("active");    
    }
    if (distance > 1900){
    recordAnimation();
    }
    if (distance> 2440){
    publicAnimation();    
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(4)>a").addClass("active");
    }

    if (distance> 3050){
    
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(5)>a").addClass("active");    
    }

    if (distance> 3750){
        contactAnimation();
    footerAnimation();    
    }

} else if ($(window).width() > 767 && $(window).width() <= 980) {
    var distance = $(window).scrollTop();
    console.log(distance);
    
    if (distance< 450) {
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(0)>a").addClass("active");
    }
    if (distance> 600){  
    ideaAnimation();    
    }
    if (distance> 1200){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(2)>a").addClass("active");    
    }
    if (distance > 1600){
    recordAnimation();
    }
    if (distance> 2400){
    publicAnimation();    
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(4)>a").addClass("active");
    }

    if (distance> 2800){
    
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(5)>a").addClass("active");    
    }

    if (distance> 3500){
        contactAnimation();
    footerAnimation();    
    }

} else {
    var distance = $(window).scrollTop();
     // console.log(distance);
    if (distance< 450) {
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(0)>a").addClass("active");
    }
    if (distance> 450){  
    ideaAnimation();    
    }
    if (distance> 1200){
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(2)>a").addClass("active");    
    }
    if (distance > 1600){
    recordAnimation();
    }
    if (distance> 2400){
    publicAnimation();    
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(4)>a").addClass("active");
    }

    if (distance> 2800){
    
    $(".page-menu>li>a").removeClass("active");
    $(".page-menu>li:eq(5)>a").addClass("active");    
    }

    if (distance> 3500){
        contactAnimation();
    footerAnimation();    
    }








    if (distance>800) {      
        menuitemAnimation();
    } 
    
    
}




















});

});