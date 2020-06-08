$(document).ready(function(){
    setTable();
    $("#inputDate").change(function(){
        //console.log("有人改變了日期!!");
        //console.log($(this).val());
        //console.log(typeof($(this).val()));
        let inputDate = $(this).val();
        let splitText = inputDate.split("-");
        console.log(splitText);
        //更新startDate
        setMonthAndDay(splitText[1],splitText[2]);
        setTable();
    });
});

function setTable(){
    $("#courseTable").empty();
    $("#courseTable").append(
        "<tr><th>場次</th><th>時間</th><th>主題</th><th>演講人</th><th>地點</th></tr>"
    );
 
    //一天有多少毫秒
    let ondDayMilliseconds = 24*60*60*1000;
 
    //產生資料列
    let topicCount = topicsArray.length;
    for(let x=0;x<topicCount;x++){
        //console.log(x);
        //YYYY/MM/DD
        let thisDate = new Date(startDate.getTime()+7*x*ondDayMilliseconds);
        $("#courseTable").append(
            "<tr>"+
            "<td>"+(x+1)+"</td>"+
            "<td>"+thisDate.toLocaleDateString().slice(5)+"</td>"+
            "<td>"+topicsArray[x]+"</td>"+
            "<td>"+nameArray[x]+"</td>"+
            "<td>"+addressArray[x]+"</td>"+
            "</tr>"
        );
    }
}
//網路預約
function validateForm(form){
    if (!checkEmail(form.email.value)){
        alert("Email 資料有誤，表單將不送出！");
        return(false);	
    }
    alert("資料正確無誤，立刻送出表單！");
    form.submit();
    return(true);
}    // 尋找 @ 的位置，0 代表開始尋找的起始位置
function checkEmail(email){
    index = email.indexOf ('@', 0);		
    if (email.length==0) {
        alert("請輸入電子郵件地址！");
        return (false);
    } else if (index==-1) {
        alert("錯誤：必須包含「@」。");
        return (false);
    } else if (index==0) {
        alert("錯誤：「@」之前不可為空字串。");
        return (false);
    } else if (index==email.length-1) {
        alert("錯誤：「@」之後不可為空字串。");
        return (false);
    } else
        return (true);
}

//顯示地址及地圖
$(function() {    
    $('#google_map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.541559393899!2d121.557449915379!3d25.049627443817997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abeab377eef3%3A0x1ee398246fb5e3f8!2z6LKh57aT5bm05Luj5aSn5qiT566h55CG5aeU5ZOh5pyD!5e0!3m2!1szh-TW!2stw!4v1590211676013!5m2!1szh-TW!2stw" width="450" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>');
});

//function google_map(){
//     if(mySelect.value=="Taipai"){
//        $('#google_map').text('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.541559393899!2d121.557449915379!3d25.049627443817997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abeab377eef3%3A0x1ee398246fb5e3f8!2z6LKh57aT5bm05Luj5aSn5qiT566h55CG5aeU5ZOh5pyD!5e0!3m2!1szh-TW!2stw!4v1590211676013!5m2!1szh-TW!2stw" width="450" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>');
//     }else if (mySelect.value=="Taoyuan"){
//        $('#google_map').text('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.541559393899!2d121.557449915379!3d25.049627443817997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abeab377eef3%3A0x1ee398246fb5e3f8!2z6LKh57aT5bm05Luj5aSn5qiT566h55CG5aeU5ZOh5pyD!5e0!3m2!1szh-TW!2stw!4v1590211676013!5m2!1szh-TW!2stw" width="450" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>');
//     }else if (mySelect.value=="Taichung"){
//        $('#google_map').text('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.541559393899!2d121.557449915379!3d25.049627443817997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abeab377eef3%3A0x1ee398246fb5e3f8!2z6LKh57aT5bm05Luj5aSn5qiT566h55CG5aeU5ZOh5pyD!5e0!3m2!1szh-TW!2stw!4v1590211676013!5m2!1szh-TW!2stw" width="450" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>');
//     }return
//}  