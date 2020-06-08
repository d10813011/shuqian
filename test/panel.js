document.write("2020年JavaScript期中作業")

//對話框
var rnd = Math.random();
        if(rnd <=0.5){//求出0~1的亂數
            var msg ='今天是幸運日!'; 
        }else if (rnd <=0.9){//亂數值的設定
            var msg ='讓我一起一步一步地努力走下去吧～';
        }else {
            var msg ='要小心預料之外的麻煩....';
        }
        window.alert('歡迎蒞臨星座運勢線上占卜 ' + msg);  //對話框顯示占卜結果      
//開合框設定
$(document).ready(function () {
  $('#panel dd').hide();
  $('#panel dt')
    .click(function (e) {
      var d = $('+dd', this);
      if (d.css('display') === 'block') {
        d.slideUp(1000);
      } else {
        d.slideDown(1000);
      }
    });
}); 
//開合文字
$(function() {  
    $('#dt1').html("具有人際溝通以及社交關係的聰慧能力，在某些地方，會表現出強烈的意志力以及聰明的特質。"+'<a href="http://www.yahoo.com/">風象星座(智慧型)：雙子座、天秤座、水瓶座。</a>');  
    $('#dt2').html("通常表現出某種追求領導地位的欲望，會有獨斷、積極、熱心、具創造力以及陽剛的特質。"+'<a href="http://www.yahoo.com/">火象星座(精力型)：牡羊座、獅子座、射手座。</a>');
    $('#dt3').html("注重情緒及情感的領域，並且和生命中較敏感、憑直覺以及更深一層心靈研究的事物有關。"+'<a href="http://www.yahoo.com/">水象星座(情感型)：巨蟹座、天蠍座、雙魚座。</a>');
    $('#dt4').html("擁有非常務實的態度，並具有善於使用及管理物質、金錢等，這些使人類生活安定運作的必須能力。"+'<a href="http://www.yahoo.com/">土象星座(實際型)：金牛座、處女座、魔羯座。</a>');
  });
          