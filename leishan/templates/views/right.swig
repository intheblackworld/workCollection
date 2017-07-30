
{% extends "../layouts/leishan.swig" %}

{% block intro %}


<div class="page-menu">
  <li><a data-scroll href="#startup" class="active"></a></li>
  <li><a data-scroll href="#dream"></a></li>
  <li><a data-scroll href="#function"></a></li>
  <!-- <li><a data-scroll href="#structure"></a></li> -->
  <li><a data-scroll href="#advantage"></a></li>
  <li><a data-scroll href="#cover"></a></li>
  <li><a data-scroll href="#finance"></a></li>
  <li><a data-scroll href="#contact-form"></a></li>
</div>

<section id="startup" class="anchor">
<a data-scroll href="#dream" class="sloganscroll">
 <i class="fa fa-angle-double-down fa-5x"></i>
</a>
<div class="bg11-1 lazy" data-original="image/slogan1.png" style="background-image: url(&quot;image/slogan1.png&quot;);">
  <div class="startup-mask" id="slogan1" style="">
   <i class="fa fa-play-circle-o fa-3x"></i>
   <h1>還在由別人決定你的人生？</h1>
  </div>
</div>
<div class="bg11-2 lazy" data-original="image/slogan2.png" style="background-image: url(&quot;image/slogan2.png&quot;);">
  <div class="startup-mask" id="slogan2" style="">
   <h1>你，值得擁有更好的未來</h1>
  </div>
</div>
<div class="bg11-3 lazy" data-original="image/slogan3.png" style=" background-image: url(&quot;image/slogan3.png&quot;);">
  <div class="startup-mask" id="slogan3" style="">
   <h1>人生，就該盡興揮灑</h1>
  </div>
</div>
<div class="bg11-4 lazy" data-original="image/slogan4.png" style=" background-image: url(&quot;image/slogan4.png&quot;);">
  <div class="startup-mask" id="slogan4" style="">
   <h1>我們與你一起創造未來</h1>
  </div>
</div>
<div class="bg11-5 lazy" data-original="image/slogan5.png" style=" background-image: url(&quot;image/slogan5.png&quot;);">


</div>
  
  
</section><section id="dream" class="anchor">
<div class="lazy" data-original="">
  <div class="dream-mask">
    <div class="dream-title">圓夢見證</div>
      
     <div class="dream-sub">掌握自主權,創造屬於你的圓滿人生!<br>你也能像他們一樣,過的不凡!</div>
      
     
      <div class="dream-photo">
      <!-- <div class="col-lg-3 col-md-4 col-xs-6 thumb">
            <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="This is my title" data-caption="Some lovely red flowers" data-image="http://onelive.us/wp-content/uploads/2014/08/flower-delivery-online.jpg" data-target="#image-gallery">
                <img class="img-responsive" src="http://onelive.us/wp-content/uploads/2014/08/flower-delivery-online.jpg" alt="Short alt text">
            </a>
        </div> -->



{% for post in  data.logo   %}
{% if (loop.index0) < 7 %}
     <div class="dream-img thumb">
     <a class="thumbnail" href="#" data-toggle="modal" 
     data-image="{{ post.image.url}}" 
     data-target="#image-gallery" 
     data-title="{{ post.title}}"
     data-sub="{{ post.subtitle}}"
     data-caption="{{ post.content.extended }} ">



     <img src="{{  post.image.url}}" alt="" class="img-responsive ">
    
     </a>
     <div class="people-title">{{ post.title }}</div>
     <div class="people-sub">{{ post.subtitle }}</div>
    </div>
    {% endif %}
  {%  endfor %}

<!-- 
    <div class="dream-img thumb">
     <a class="thumbnail" href="#" data-toggle="modal" 
     data-image="image/dream-01.png" 
     data-target="#image-gallery" 
     data-title="鄭芳齡執行長"
     data-sub="扛起家庭重擔，購農場送愛夫"
     data-caption="在校學習幼兒教育的我,如願一畢業就往幼兒教育之路學習,一路學習擔任老師、主管,直至開了一所幼兒園當上園長,十年的歲月中,獲得許多美好的學習。當幼兒園成長到一階段之時,雖穩定但較無向上成長的空間,另少子化的因素,導致招生不易,種種因素,讓我開始思考未來的道路,開創一條新路想必是勢在必行的,該是勇敢挑戰自己的時刻了!我對我自己有個期許,期許自己能力更強,期許自己可以更多學習,培訓自己成為一位頂尖人才,尋覓許久發現保險行業有許多專業課程,相信必能收穫滿滿;另一吸引我的則是公司招待出國旅行的福利讓我為之心動,我決定挑戰自己,轉戰保險行業,雖起初未獲得老公認可,但個性驅使我勇敢嘗試,即使失敗也了無遺憾,而且我相信,努力終將帶來豐碩的果實!進到高雄保誠公司的磊山團隊,參與策畫會報之時,原先以為都是外聘專業講師前來支援辦理活動,沒想到從上到下,全部的規畫安排,都是由業務同仁親自完成;在經委會的學習如同經營一間公司"
     ><img src="image/dream-01.png" alt="" class="img-responsive "></a>
     <div class="people-title">鄭芳齡執行長</div>
     <div class="people-sub">扛起家庭重擔，購農場送愛夫</div>
    </div> -->


  

       
   </div>
  </div>


<div class="modal fade" id="image-gallery" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    
    
    <div class="modal-dialog">
                <!-- <div class="col-md-2">
                    <button type="button" class="btn btn-primary" id="show-previous-image">Previous</button>
                </div>


                <div class="col-md-2">
                    <button type="button" id="show-next-image" class="btn btn-default">Next</button>
                </div> -->
            <div class="modal-img">
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
                <img id="image-gallery-image" class="img-responsive" src="">
            </div>
            <div class="modal-text">
                <div id="image-gallery-title"></div>
                <div id="image-gallery-sub"></div>
                <div class="" id="image-gallery-caption">
                    This text will be overwritten by jQuery
                </div>
                
            </div>
            <div class="clearfix"></div>

    </div>
</div>
  
  <script >
  $(document).ready(function(){

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current){
        $('#show-previous-image, #show-next-image').show();
        if(counter_max == counter_current){
            $('#show-next-image').hide();
        } else if (counter_current == 1){
            $('#show-previous-image').hide();
        }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr){
        var current_image,
            selector,
            counter = 0;

        $('#show-next-image, #show-previous-image').click(function(){
            if($(this).attr('id') == 'show-previous-image'){
                current_image--;
            } else {
                current_image++;
            }

            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
        });

        function updateGallery(selector) {
            var $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-caption').html($sel.data('caption'));
            $('#image-gallery-title').text($sel.data('title'));
            $('#image-gallery-sub').text($sel.data('sub'));
            $('#image-gallery-image').attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }

        if(setIDs == true){
            $('[data-image-id]').each(function(){
                counter++;
                $(this).attr('data-image-id',counter);
            });
        }
        $(setClickAttr).on('click',function(){
            updateGallery($(this));
        });
    }
});
  </script>

</div>
</section><section id="function" class="anchor" style="clear: both;">
  <div class="bg19 lazy" data-original="image/bg19.png">
     <div class="mask-function">
      <div style="padding: 0px 40px 0px 40px">
      <div class="function-title">成功方程式</div>
      <div class="function-sub">無論經驗多寡，三個步驟助您打造永續經營的事業</div>
      </div>
      <!-- <div class="service-list">您的人生 讓我們陪您一起走過！</div> -->
      <div class="mask-funciton-bottom">
      <div class="col-md-12 col-sm-12 col-xs-12">
           <div class="col-md-4 col-sm-4 col-xs-12"><div class="function-circle">step<br>1</div><div class="function-item"><div style="font-size: 18px;font-weight: bold;text-shadow: 2px 2px 5px black">
           厚實專業基礎<br>快速建立專業與實戰經驗<br></div><br>扎實教育訓練<br>＋<br>多元商品組合<br>＋<br>堅強後勤支援</div></div>
           <div class="col-md-4 col-sm-4 col-xs-12"><div class="function-circle">step<br>2</div><div class="function-item"><div style="font-size: 18px;font-weight: bold;text-shadow: 2px 2px 5px black">打造高效團隊<br>建立高產能的業務團隊<br></div><br>跨界管理訓練<br>＋<br>雲端管理平台<br>＋<br>豐富管理獎金</div></div>
           <div class="col-md-4 col-sm-4 col-xs-12"><div class="function-circle">step<br>3</div><div class="function-item"><div style="font-size: 18px;font-weight: bold;text-shadow: 2px 2px 5px black">拓展事業版圖<br>擁有屬於自己的事業帝國<br></div><br>特許加盟體系<br>＋<br>暢通國際通路<br>＋<br>堅強後勤支援</div></div>
         </div> 
         <div style="clear:both;"></div>  
      </div>
      <div style="clear:both;"></div> 
     </div>
  </div>
</section><section id="advantage" class="anchor" >
  <div class="bg16 lazy"  data-original="image/bg16.png">
     <div class="mask-advantage">
      <div class="advantage-title">制度優勢</div>
      <div class="advantage-sub">多元事業發展，成就卓越人生</div>
      <div class="col-md-12 col-sm-12 col-xs-12 hidden-xs">
           <div class="col-md-3 col-sm-3 col-xs-6"><div class="advantage-circle"><i class="fa fa-signal fa-4x"></i></div><div class="service-item">穩定發展的<br>商業模式</div></div>
           <div class="col-md-3 col-sm-3 col-xs-6"><div class="advantage-circle"><i class="fa fa-search fa-4x"></i></div><div class="service-item">佣獎公開透明<br>拒絕黑箱</div></div>

           <div class="col-md-3 col-sm-3 col-xs-6"><div class="advantage-circle"><i class="fa fa-line-chart fa-4x "></i></div><div class="service-item">直昇機式晉升<br>能力大於資歷</div></div>

           <div class="col-md-3 col-sm-3 col-xs-6"><div class="advantage-circle"><i class="fa fa-user-plus fa-4x"></i></div><div class="service-item">高額繼續率獎金<br>傳子事業永續經營</div></div>
         </div> 
         <div class="col-md-12 col-sm-12 col-xs-12 visible-xs">
           <div class="col-md-3 col-sm-3 col-xs-6"><div class="advantage-circle"><i class="fa fa-signal fa-4x"></i></div><div class="service-item" style="transform: scale(1);">穩定發展的商業模式</div></div>
           <div class="col-md-3 col-sm-3 col-xs-6"><div class="advantage-circle"><i class="fa fa-search fa-4x"></i></div><div class="service-item" style="transform: scale(1);">佣獎公開透明拒絕黑箱</div></div>

           <div class="col-md-3 col-sm-3 col-xs-6"><div class="advantage-circle"><i class="fa fa-line-chart fa-4x "></i></div><div class="service-item" style="transform: scale(1);">直昇機式晉升能力大於資歷</div></div>

           <div class="col-md-3 col-sm-3 col-xs-6"><div class="advantage-circle"><i class="fa fa-user-plus fa-4x"></i></div><div class="service-item" style="transform: scale(1);">高額繼續率獎金傳子事業永續經營</div></div>
         </div> 
         <div style="clear:both;"></div>  
     </div>

  </div>
</section><section id="cover" class="anchor">
  <div class="bg17 lazy" data-stellar-background-ratio="1" data-original="image/bg17.png">
     <div class="mask-cover">
      <div class="mask-top">
      <div class="cover-title">創業平台 + 你</div>
      <div class="cover-sub">我們能幫助你輕鬆創造高薪</div>
      </div>
      <div class="cover-left col-md-6 ">
        <h1 class= "col-md-3 ">行政支援</h1>
        <div class="col-md-9 ">
        <li class="">1. 熱門商品分析</li>
        <li class="">2. 每日新聞即時更新</li>
        <li class="">3. 獲獎無數的業界資優生</li>
        <li class="">4. 31家合作夥伴</li>
        </div>
      </div>
      <div class="cover-right col-md-6 ">
        <h1 class= "col-md-3 ">業務支援</h1>
        <div class="col-md-9 ">
        <li class="">1. 完善的教育訓練系統</li>
        <li class="">2. 業界首創APP</li>
        <li class="">3. 高品質客戶平台講座</li>
        <li class="">4. 商品多元組合優勢</li>
        <li class="">5. 創新的電子商務</li>
        </div>
      </div>
      
         <div style="clear:both;"></div>  
     </div>

  </div>
</section><section id="finance" class="anchor">
  <div class="bg18 lazy"  data-original="image/bg18.png">
     <div class="mask-finance">
      <div class="finance-title">數位金融3.0</div>
      <div class="finance-sub">服務數位化是產業趨勢，而在金融保險業界，「Fintech」已經是一個熱門關鍵字。磊山保經投入大量資源發展各項數位化系統，以提升夥伴展業與服務的品質與速度。</div>
      <hr>  
      <div class="col-md-3  col-sm-6 col-xs-6 finance-block">
        <div class="finance-list-title">1.ISO27001</div>
        <div class="finance-list-sub">磊山保經為台灣保險業第一家申請ISO27001的公司引領業界建立數位標準！</div>
      </div> 
      <div class="col-md-3 col-md-offset-1 col-sm-6 col-xs-6 finance-block">
        <div class="finance-list-title">2.行政後援平台PKS</div>
        <div class="finance-list-sub">最堅強的數據後盾給予夥伴安定的行政後援</div>
      </div> 
      <div class="col-md-3 col-md-offset-1 col-sm-6 col-xs-6 finance-block">
        <div class="finance-list-title">3.管理數據分析系統 Jarvis</div>
        <div class="finance-list-sub">透過快速的數據運算用簡單的頁面找到管理的重要關鍵</div>
      </div> 
      <div class="col-md-3  col-sm-6 col-xs-6 finance-block">
        <div class="finance-list-title">4.旅平險服務平台 LsTrip</div>
        <div class="finance-list-sub">簡單人性化的操作，是夥伴大量服務拓展合作通路的最佳工具。</div>
      </div> 
      <div class="col-md-3 col-md-offset-1 col-sm-6 col-xs-6 finance-block">
        <div class="finance-list-title">5.建議書整合系統 PaperMe</div>
        <div class="finance-list-sub">將多家公司的商品整合於圖像化的介面每個夥伴都成為提案大師。</div>
      </div> 
      <div class="col-md-3 col-md-offset-1 col-sm-6 col-xs-6 finance-block">
        <div class="finance-list-title">6.業務支援平台 LsLAB</div>
        <div class="finance-list-sub">2016新上架的業務支援平台更直覺的操作方式使夥伴展業更加便利
        </div>
      </div> 
      
      
         <div style="clear:both;"></div>  
      </div>
     </div>

  </div>
</section><script src="javascripts/jquery.lazyload.min.js" type="text/javascript"></script>
<script src='javascripts/customer.js'></script>

{% endblock %}