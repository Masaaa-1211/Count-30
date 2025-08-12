const numberEl = document.getElementById("number");
const wordsEl = document.getElementById("words");
const resultEl = document.getElementById("result");

var num = 0;
var win = 0;

function p1(){
    num++;
    number.textContent = num;
    wordsEl.textContent = "+1（あなた）"
    if(num >= 30 && win == 0){
        resultL.textContent = "あなたの負けです..."
        win++;
    }
    setTimeout(cpu, 1000);
}

function p2(){
    num += 2;
    number.textContent = num;
    wordsEl.textContent = "+2（あなた）"
    if(num >= 30 && win == 0){
        resultL.textContent = "あなたの負けです..."
        win++;
    }
    setTimeout(cpu, 1000);
}

function p3(){
    num += 3;
    number.textContent = num;
    wordsEl.textContent = "+3（あなた）"
    if(num >= 30 && win == 0){
        resultL.textContent = "あなたの負けです..."
        win++;
    }
    setTimeout(cpu, 1000);
}

function cpu(){
    var cpunum = Math.floor(Math.random() * 3) + 1;
    num += cpunum;
    number.textContent = num;
    wordsEl.textContent = "+" + cpunum + "（CPU）"
    if(num >= 30 && win == 0){
        resultW.textContent = "あなたの勝ちです！";
        win++;
    }
    
    if(num >= 60){
        alert("やめろ");
    }
}
