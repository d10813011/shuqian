$(document).ready(function(){
            $('#entry li:odd').css('background-color','#F7EEEB');
        });

$(document).ready(function(){
    $("input").click(function(){
        console.log("Click");
        let numberoflistitem = $("#choices li").length;
        console.log("numberoflistitem"+numberoflistitem);
       // let numberofstar = Math.floor(Math.random()*numberoflistitem); //星座說明用
        let randomchildnumber = Math.floor(Math.random()*numberoflistitem);
        $("random-result").text($("#choices li").eq(randomchildnumber).text()); 
        $("#random-pic").attr("src",images[randomchildnumber]);   
       // $("dl").text($("startext").eq(numberofstar).text());  //星座說明用
    });
});
$(function() {  
    $('#startext').text("具有人際溝通以及社交關係的聰慧能力，在某些地方，會表現出強烈的意志力以及聰明的特質。風象星座(智慧型)：雙子座、天秤座、水瓶座。");
});  
