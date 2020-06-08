//mapArray:決定地圖中每個格子的元素
//ctx:HTML5 Canvas使用
//currentImgMainX,currentImgMainY:決定主角所在座標
//imgMountain,imgMain,imgEnemy:障礙物,主角,敵人的圖片物件

let mapArray, ctx, curenImgMainX, curenImgMainY;
let imMountain, imgMain,imgEnemy;

//當網頁原件載入完成要做的事情
$(document).ready(function(){
//遊戲地圖    
//0:可走 1:障礙 2:終點 3~7:星座 
mapArray=[0,0,0,7,0,3,0,5,1,0,0,0,0,4,6,2];
ctx = $("#myCanvas")[0].getContext("2d");

//擺主角
imgMain = new Image();
imgMain.src ="club_course/images/spriteSheet.png";
currentImgMainX = 0;
currentImgMainY = 0;
imgMain.onload =function(){
    ctx.drawImage(imgMain,0,0,80,160,currentImgMainX,currentImgMainY,200 ,200);
};
//擺障礙物與敵人
imgMountain =new Image();
imgMountain.src = "club_course/images/Enemy.png";
imgEnemy = new Image();
imgEnemy.src = "club_course/images/Enemy.png";
imgMountain.onload = function(){
    imgEnemy.onload = function(){
        for(let x in mapArray){
            if(mapArray[x]==1){//獅子座
                ctx.drawImage(imgEnemy,130,40,104,135,x%4*200, Math.floor(x/4)*200, 200, 200);
            }else if(mapArray[x]==3){//雙子星
                ctx.drawImage(imgEnemy,7,40,104,135,x%4*200, Math.floor(x/4)*200, 200, 200);
            }else if(mapArray[x]==4){//射手座
                ctx.drawImage(imgEnemy,250,40,104,135,x%4*200, Math.floor(x/4)*200, 200, 200);
            }else if(mapArray[x]==5){//牡羊座
                ctx.drawImage(imgEnemy,360,40,104,135,x%4*200, Math.floor(x/4)*200, 200, 200);
            }else if(mapArray[x]==6){//水坪座
                ctx.drawImage(imgEnemy,470,40,104,135,x%4*200, Math.floor(x/4)*200, 200, 200);
            }else if(mapArray[x]==7){//金牛座
                ctx.drawImage(imgEnemy,580,40,104,135,x%4*200, Math.floor(x/4)*200, 200, 200);
            }

        }
    }
};
});

//當有人按下按鍵後要做的事 
$(document).keydown(function(event){
    let targetImgMainX,targetImgMainY,targetBlock,cutImagePositionX;
    //主角即將要移動過去的目標位置 主角即將要移動過去的那一格標號 依據主角朝向什麼項決定圖片
    event.preventDefault();
    //避免點擊鍵盤出現瀏覽器的其他行為，例如捲動 放大 換頁...
    //根據使用者按鍵只是 對應計算目標位置 主角新的方向圖片
    console.log(event.originalEvent.code);
    switch(event.originalEvent.code){
        case "ArrowLeft"://向左
            targetImgMainX = currentImgMainX-200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 175;
            break;
        case "ArrowUp"://向上
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY-200;
            cutImagePositionX = 355;    
            break;
        case "ArrowRight"://向右
            targetImgMainX = currentImgMainX+200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 540;  
            break;
        case "ArrowDown"://向下
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY+200;
            cutImagePositionX = 0;  
            break;
        default://其他按鍵不回應
            return;
    }

    //在邊界內
    if(targetImgMainX<=600 && targetImgMainX>=0 &&
        targetImgMainY<=600 && targetImgMainY>=0){
            targetBlock = targetImgMainX/200+targetImgMainY/200*4;
    }else{//超出邊界
            targetBlock = -1;
    }
    // 清除主角原本的所在位置
    ctx.clearRect(currentImgMainX,currentImgMainY, 200 ,200);
  
    if(targetBlock == -1 || mapArray[targetBlock] ==1 || mapArray[targetBlock]==3 || mapArray[targetBlock]==4 || mapArray[targetBlock]==5 || mapArray[targetBlock]==6 || mapArray[targetBlock]==7){
    //所有異常(出界,遇到敵人,遇到障礙物都不動)    
    }else{//正常情況就設定新的位置
        $("#talkBox").empty();
        currentImgMainX = targetImgMainX;
        currentImgMainY = targetImgMainY;                  
    }
    //在新的位置畫上主角
    console.log("cutImagePositionX"+cutImagePositionX);
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainX, currentImgMainY, 200, 200);
    //對應文字顯示狀態
    switch(mapArray[targetBlock]){
        case undefined:
            $("#talkBox").text("猜猜我是哪種星座呢!");
            break;
         case 1:
            $("#talkBox").text("獅子座 不斷鞭策自己努力往前衝 戰鬥力80分");
            break;
         case 2:
            $("#talkBox").text("都看完了嗎?");
            break;
         case 3:
            $("#talkBox").text("雙子座 手邊的工作只要盡本分去做就好 戰鬥力50分");
            break;
         case 4:
            $("#talkBox").text("射手座 處理繁雜、份量超標的工作任務，他們也會認命去做完，直到自己撐不住為止 戰鬥力100分");
            break; 
         case 5:
            $("#talkBox").text("牡羊座 事業心很強的牡羊座，或許表面上不說 戰鬥力70分");
            break; 
         case 6:
            $("#talkBox").text("水瓶座 心思敏捷，從事多樣性、腦力激蕩及富有前瞻性的工作 戰鬥力90分");
            break;   
         case 7:
            $("#talkBox").text("金牛座 往往都是默默的埋頭苦幹 戰鬥力60分");
            break;          
        }    
});



