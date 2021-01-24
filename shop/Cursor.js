// detecting click on cursorButton
var cursorAmount = 0;
var cursorAddValue = 1;
var cursorPrice = 5;

function OnCursorButtonclick(){
    if(cookies > cursorPrice || cookies == cursorPrice){
        cursorAmount++;
        buyCursor(1);
        cookies-= cursorPrice;
        cursorPrice += 3; changeTitleTo(cookies);       
        setCursorButtonData(cursorPrice + "🍪",cursorAmount)
    }
    else alert("Tu n'as pas assez de Cookies :/🍪🍪🍪")
}

function setCursorButtonData(price,amount){
    ctx.drawImage(cursorImage,cursorButtonX,cursorButtonY,cursorButtonWidth,cursorButtonHeight);
    ctx.font = "25px Verdana";
    ctx.fillStyle = "black";
    ctx.fillText(price,710,145,50,50);
    ctx.fillText(amount,930,145,50,50);
}

async function cursorLoop(){
    randomSpawnX = Math.round(Math.random() * 120);
    randomSpawnY = Math.round(Math.random() * 130);
    await Newanimation(cursorAddValue);
    cookies+=cursorAddValue; changeTitleTo(cookies);
    await Sleep(Math.round(Math.random() * 3000 + 2000));
    window.requestAnimationFrame(cursorLoop);
}

function buyCursor(amount){
    window.requestAnimationFrame(showcursorIcon);
    for(var i = 0;i < amount;i++){
        window.requestAnimationFrame(cursorLoop);  
    }    
}

function showcursorIcon(){
    requestAnimationFrame(showcursorIcon);
    ctx.drawImage(cursorIcon,350,450,cursorIcon.width * 0.5,cursorIcon.height* 0.5)
}