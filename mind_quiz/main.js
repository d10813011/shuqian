$(document).ready(function(){
    //建立currentQuiz，儲存目前作達到第幾題。
    let currentQuiz = null;
    //當按下按鈕後，要做的事情放在這裡面。
    $("#startButton").click(function(){
        //if 還沒作答。
        if(currentQuiz==null){
            currentQuiz=0;
            //顯示題目
            $("#question").text(questions[0].question);
            $("#options").empty();
            for(let x=0;x<questions[0].answers.length;x++){
                $("#options").append(
                    "<input name='options' type='radio' value="+
                    x+
                    "><label>" + questions[0].answers[x][0]+
                    "</label><br><br>"
                );
            }

            //將按紐文字換成NEXT 或 下一題
            $("#startButton").attr("value","next");
        }else{
            $.each(
                $(":radio"),function(i,val){
                    if(val.checked){
                        //分成是否已產生結果(A-D)
                        if(isNaN(questions[currentQuiz].answers[i][1])){
                            //通往最終成果。
                            let finalResult = questions[currentQuiz].answers[i][1];
                            //顯示最終成果標題。
                            $("#question").text(finalAnswers[finalResult][0]);
                            //清空選項區域。
                            $("#options").empty();
                            //顯示最終成果的內容。
                            $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                            //將目前作答到第幾題的變數清空。
                            currentQuiz=null;
                            //修改按鈕為重新開始。
                            $("#startButton").attr("value","Restart");
                        }else{
                            //跳去某一題。

                            //指定下一個要顯示的題目，原始資料是從1開始，所以要-1。
                            currentQuiz = questions[currentQuiz].answers[i][1]-1;
                            //顯示新的題目，
                            $("#question").text(questions[currentQuiz].question);
                            //清空舊的選項內容。
                            $("#options").empty();
                            //顯示新的選項內容。
                            for(let x=0;x<questions[currentQuiz].answers.length;x++){
                                $("#options").append(
                                    "<input name='options' type='radio' value="+
                                    x+
                                    "><label>" + questions[currentQuiz].answers[x][0]+
                                    "</label><br><br>"
                                );
                            }
                        }

                        //完成後即可跳離迴圈。
                        return false;
                    }
                }
            )



        }
    });
});


