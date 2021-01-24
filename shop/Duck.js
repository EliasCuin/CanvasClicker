// detecting click on duckButton
var duckAmount = 0;
var duckAddValue = 3;
var duckPrice = 300;
var iconOldXPos = 10;
var iconOldYPos = 300;
var DuckMaximum = true; 

function OnDuckButtonClick(){
    if(cookies > duckPrice || cookies == duckPrice){
        duckAmount++;
        buyDuck(1);
        cookies-= duckPrice;
        duckPrice += 20; changeTitleTo(cookies);       
        setDuckButtonData(duckPrice + "🍪",duckAmount)
    }
    else alert("Tu n'as pas assez de Cookies :/🍪🍪🍪")
}

function setDuckButtonData(price,amount){
    ctx.drawImage(duckImage,duckButtonX,duckButtonY,duckButtonWidth,duckButtonHeight);
    ctx.font = "25px Verdana";
    ctx.fillStyle = "black";
    ctx.fillText(price,710,210,50,50);
    ctx.fillText(amount,930,210,50,50);   
}

async function duckLoop(){
    randomSpawnX = Math.round(Math.random() * 120);
    randomSpawnY = Math.round(Math.random() * 130);
    cookies+=duckAddValue; changeTitleTo(cookies);
    await Newanimation(duckAddValue);
    await Sleep(Math.round(Math.random() * 500));
    window.requestAnimationFrame(duckLoop);
}
async function buyDuck(amount){
    for(var i = 0;i < amount;i++){
        await addDuckIcon()
        window.requestAnimationFrame(duckLoop);  
    }    
}
async function addDuckIcon(){
    if(iconOldYPos < 450 && DuckMaximum){
        await ctx.drawImage(duckIcon,iconOldXPos,iconOldYPos,duckIcon.width * 0.1,duckIcon.height* 0.1)
        iconOldXPos += 30;
        if(iconOldXPos > 150){
            iconOldXPos = 10;
            iconOldYPos += 30;
        }
        if(iconOldYPos == 420 && iconOldXPos > 120){
            DuckMaximum = false;
            ctx.fillStyle = "#FFFF00";
            ctx.fillText("+",145,463,30,30);           
        }
    }   
}

