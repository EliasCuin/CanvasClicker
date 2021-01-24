var randomSpawnX;
var y;
var ySpeed;
var randomSpawnY;

var colors = ["#FF0000","#36ff00","#6e2c00","#d0d3d4","#f1c40f"];

function onCookieClick(){
    
    randomSpawnX = Math.round(Math.random() * 120);
    randomSpawnY = Math.round(Math.random() * 130);
    Newanimation(cookieAddOnClick);
}

function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}


async function Newanimation(Number){
    //requestAnimationFrame(Newanimation);
    ctx.fillStyle = colors[0];
    ctx.font = "50px Sans-serif";
    //if(cookieState = 0) ctx.drawImage(cookieImage,cookiePosX,cookiePosY,cookieWidth,cookieHeight); else ctx.drawImage(cookieImage,cookieClickedPosX,cookieClickedPosY,cookieClickedWidth,cookieClickedHeight); 
    ctx.fillText("+" + Number,cookiePosX + 50 + randomSpawnX,cookiePosY+70+randomSpawnY);
    await Sleep(VisibleNumberTime);
    ctx.clearRect(cookiePosX,cookiePosY,cookieWidth,cookieHeight)

    //redraw cookie
    if(cookieState ==1) {ctx.drawImage(cookieImage,cookieClickedPosX,cookieClickedPosY,cookieClickedWidth,cookieClickedHeight)}
    else {ctx.drawImage(cookieImage,cookiePosX,cookiePosY,cookieWidth,cookieHeight)}
    
}

var iAmount = [];
console.log(iAmount[0]);

function startBetanim(){window.requestAnimationFrame(betaAnim); iAmount.push()}


function betaAnim(num){

    requestAnimationFrame(betaAnim);
    //randomSpawnX = Math.round(Math.random() * 120);
    // code 
    i++;
    console.log(i);
    
    changeTitleTo(i);
    //redraw cookie
    if(cookieState ==1) {ctx.drawImage(cookieImage,cookieClickedPosX,cookieClickedPosY,cookieClickedWidth,cookieClickedHeight)}
    else {ctx.drawImage(cookieImage,cookiePosX,cookiePosY,cookieWidth,cookieHeight)}
}
   