<!DOCTYPE html>
<html>
<head>
 
    <meta charset='utf-8'>
    <meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible'>
    <title>磊山保經</title>
    <meta content="" name="keywords" >
    <meta content='' name='description'>
    <meta content='' name='author'>
    <meta content='width=device-width, initial-scale=1.0' name='viewport'>
    <link href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link href='stylesheets/style.css' rel='stylesheet'>

    <link href='stylesheets/ekko-lightbox.min.css' rel='stylesheet'>
    
    <!-- <script src='javascripts/modernizr-2.0.6.min.js'></script>  -->

    <!-- 引用jquery  -->
    <script type="text/javascript" src="//code.jquery.com/jquery-1.9.1.min.js"></script>
    <script src='javascripts/jquery-ui-1.9.2.custom.min.js'></script>
    <script src='javascripts/jquery.transit.min.js'></script>
    <script src="javascripts/smooth-scroll.min.js"></script>
    
    <!-- 引用 bootstrap js -->
    <script type="text/javascript" src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <!-- 引用respond js -->
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
    
    <script src="//maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
    <script src='javascripts/ekko-lightbox.min.js'></script>
    <script src='javascripts/jquery.stellar.min.js'></script>
    
     <!-- Fav and touch icons -->
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="img/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="img/apple-touch-icon-57-precomposed.png">
    <link rel="shortcut icon" href="img/favicon.png">


    <!--[if lt IE 8]>
    
    <![endif]-->
    <!--[if lt IE 9]>
    
    <![endif]-->
    <!--[if lt IE 10]>
    
    <![endif]-->
    

</head>
<body>
  
  <header class="navbar navbar-static-top bs-docs-nav" id="top" role="banner"> 
  <div class="container"> 
    <div class="navbar-header"> 
      <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="false"> 
        <span class="sr-only">Toggle navigation</span> 
        <span class="icon-bar"></span> 
        <span class="icon-bar"></span> 
        <span class="icon-bar"></span> 
      </button> 
     <a href="/" class="navbar-brand"><img src="image/logo.png" style="width:59px;height: 42px;"></a> 
    </div> 
      <nav id="bs-navbar" class="collapse navbar-collapse"> 
       
        <ul class="nav navbar-nav navbar-right"> 
          <li class="active"> 
          <a href="/customer">磊山客戶</a> 
          </li> 
          <li> 
          <a href="/intro">了解磊山</a> 
          </li> 
          <li> 
          <a href="/join">加入磊山</a> 
          </li> 
        </ul> 
      </nav> 
     
  </div> 
</header>
  <script type="text/javascript">
  $(document).ready(function(){
    $(".page-menu>li>a").on("click",function(){
      $(".page-menu>li>a").removeClass("active");
      $(this).addClass("active");
    });
  });
</script>




{%- block intro -%}{%- endblock -%}
{%- block content -%}{%- endblock -%}
 

   <section style="clear: both;padding-top: 0px ;margin-top: 0px;" class="anchor" id="contact-form">
  
   <div class="bg5 lazy" data-original="image/bg5.png">
 
  
 <form id="contact" method='post'>

  <input type="hidden" name='action' value='contact'>  
    <div class="contact-mask">
      <div class="user">
      <div class="contact-logo">聯絡我們</div><div class="alert-block">
          {% if enquirySubmitted %}
         <i class="fa fa-exclamation-circle"></i>
         
      <div class="alert-message">信件已寄出</div>

    {% endif %}
       </div> 
        <input type="text" name="name.full" class="contact-user" placeholder="姓名" required>
       <input type="text" name="email" class="contact-user" placeholder="信箱" >
       <input type="text" name="phone" class="contact-user" placeholder="市話 / 手機" required>
       <input type="text" name="address" class="contact-user" placeholder="縣市 / 行政區" required>
       
      </div>
    </div>
    <div class="mail-mask">
      <input type="text" name="title" class="contact-title"  placeholder="信件標題" required>
      <hr>
      <textarea  style="white-space: pre-line" placeholder="信件訊息" class="contact-comment" form="contact" name="message" required></textarea> 
      <input type="submit" value="寄出訊息" class="submit">
     
    </div>
    </form>


  </div>
</section> 


 
  <section style="clear: both;">
  <div class="footer">
    <div class="footer-logo">
      <img class="logo-white" src="image/logo-white.png"><br>
      <img class="qrcode" src="image/qrcode.png">
    </div>
    <div class="line"><img src="image/Line.png"></div>
    <div class="special-link">
      <div class="link-title">SPECIAL LINK</div>
      <li class="link-item"><a href="https://www.ls-ecommerce.com.tw/">1.線上旅平險服務</a></li>
      <li class="link-item"><a href="http://leishan.taipei">2.活動報名網站</a></li>
      <li class="link-item"><a href="https://eip.leishan.com.tw:8080">3.業務管理系統</a></li>
      <li class="link-item"><a href="http://leishan.cloudapp.net/login.php">4.業務支援系統</a></li>
      <li class="link-item"><a href="http://www.leishan.com.tw/index.php?REQUEST_ID=bW9kPWRvd25sb2Fk">5.磊山補給站</a></li>
      <li class="link-item"><a href="http://lsapp.leishan.com.tw">6.磊山原官網</a></li>
    </div>
    <div class="quick-link">
      <div class="link-title">QUICK LINK</div>
      <li class="link-item"><a href="http://www.ib.gov.tw/ch/home.jsp?id=125&parentpath=0,8">1.微型保險專區</a></li>
      <li class="link-item"><a href="http://www.lia-roc.org.tw/OTHER/h1001005.htm">2.高齡化保險專區</a></li>
    </div>
    <div class="app">
      <div class="link-title">APP DOWNLOAD</div>
      <a href="https://play.google.com/store/apps/details?id=com.no1.leishan&hl=zh_TW" style="padding: 20px 20px 10px 0px">
      <img src="image/googleapp.png">
      </a>
      <a href="https://itunes.apple.com/tw/app/lei-shan-bao-jing/id670127737?l=zh&mt=8" style="padding: 20px 0px 10px 0px">
      <img src="image/iosapp.png"></a>
    </div>
    <div class="ins">
      <div class="link-title">FACEBOOK</div>
      <a target="_blank" href="https://www.facebook.com/leishan.voice/photos/pb.1445527189097120.-2207520000.1454067460./1542908336025671/?type=3&theater"><div class="insphoto1"></div></a>
      <a target="_blank" href="https://www.facebook.com/leishanbroker/photos/a.122709651122055.17074.121804451212575/1000231340036544/?type=3&theater"><div class="insphoto2"></div></a>
      <a target="_blank" href="https://www.facebook.com/leishanbroker/photos/a.122709651122055.17074.121804451212575/1000226140037064/?type=3&theater"><div class="insphoto3"></div></a>
      <a target="_blank" href="https://www.facebook.com/leishanbroker/photos/a.122709651122055.17074.121804451212575/996442407082104/?type=3&theater"><div class="insphoto4"></div></a>
      <a target="_blank" href="https://www.facebook.com/leishanbroker/photos/a.121804587879228.16776.121804451212575/991557127570632/?type=3&theater"><div class="insphoto5"></div></a>
      <a target="_blank" href="https://www.facebook.com/leishanbroker/photos/a.320575528002132.71930.121804451212575/991546527571692/?type=3&theater"><div class="insphoto6"></div></a>
    </div>
  </div>
</section>
<script>
    smoothScroll.init();
</script>
  <!-- <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
 -->

</body>
</html>
 
   