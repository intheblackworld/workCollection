// JavaScript Document
//jQuery is required to run this code

$(document).ready(function () {

  $(document).get(0).oncontextmenu = function() {
              return false;
          };
    $('iframe[src*="youtube.com"]').wrap('<div class="youtubecontent" />');
});