let topicsArray=[
"12星座理財大趨勢",
"靠占星調整自己的人生",
"各星座面對感情的相處與提升之道",
"12星座的創業優勢",
"哪種星座是超級直銷員",
"從占星看人生值得留意的蛻變期",
"12星座職場的人際相處之道"
];

let nameArray=[
    "星星王子",
    "星座公主",
    "命運大師",
    "星星王子",
    "命運大師",
    "星星王子",
    "星座公主"
    ];

let addressArray=[
    "台北市",
    "桃園市",
    "桃園市",
    "台中市",
    "桃園市",
    "台北市",
    "台中市"
    ];    

let startDate=new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);

}

//給社長用的
setMonthAndDay(2,24);
setMonthAndDay(7,15);

