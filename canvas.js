var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

//main script
var cookies = 0;

window.addEventListener("load", () => {
    changeTitleTo(0);   
});

canvas.onmousedown = function(e){
    if(e.clientX > 265 && e.clientX < 500 && e.clientY < 500 && e.clientY > 260 ){ //cookie click detetction on cookie button
        //ctx.clearRect(176,138,400,400); 
            ctx.clearRect(cookiePosX,cookiePosY,cookieWidth,cookieHeight)
            ctx.drawImage(cookieImage,cookieClickedPosX,cookieClickedPosY,cookieClickedWidth,cookieClickedHeight);     
            cookieState = 1;  
    }
    else if (e.clientX > 0 && e.clientX < 307 && e.clientY < canvas.height && e.clientY > 636){ //click detection on cookie save button
        ctx.drawImage(SaveImageClicked,0,canvas.height - 71,307,71);
    }
    else if(e.clientX > 315 && e.clientX < 629 && e.clientY < canvas.height && e.clientY > 636){
        console.log("click");
        ctx.drawImage(importImageClicked,importImageClicked.width +20,canvas.height - importImageClicked.height,importImageClicked.width,importImageClicked.height);
    }
    
}
canvas.onmouseup = function(e){
    ctx.clearRect(255,260,200,300); 
    ctx.clearRect(cookiePosX,cookiePosY,cookieWidth,cookieHeight)
    ctx.drawImage(cookieImage,cookiePosX,cookiePosY,cookieWidth,cookieHeight);

    cookieState = 0;
    ctx.drawImage(SaveImage,0,canvas.height - 71,307,71);
    ctx.drawImage(importImage,importImage.width +20,canvas.height - importImage.height,importImage.width,importImage.height);
    if(e.clientX > 265 && e.clientX < 500 && e.clientY < 500 && e.clientY > 260 ){       //click detection on cookie button
        cookies+= cookieAddOnClick;
        changeTitleTo(cookies); 
        onCookieClick();       
    }
    else if (e.clientX > 0 && e.clientX < 307 && e.clientY < canvas.height && e.clientY > 636){  //click detection on save button
        console.log("clicked on save");
        openPupup(convertCookiesToCode(cookies));
    }
    else if(e.clientX > 315 && e.clientX < 629 && e.clientY < canvas.height && e.clientY > 636){
        togglePopup1();
    }
    else if(e.clientX > 691 && e.clientX < canvas.width && e.clientY < 174 && e.clientY > 108){ //cursor Button click detect
        OnCursorButtonclick()
    }
    else if(e.clientX > 691 && e.clientX < canvas.width && e.clientY < 240 && e.clientY > 174){ //duck Button click
        OnDuckButtonClick();
    }

}

changeTitleTo(cookies);

function changeTitleTo(cookiesvar){
    ctx.clearRect(300,0,300,80);

    ctx.fillStyle = "#2c1c14";
    ctx.font = "40px Verdana";
    ctx.fillText("" + Separe(cookiesvar) + "🍪",330, 50);
}

function changeSecondCounterTitleTo(value){
    ctx.clearRect(20,0,300,80);

    ctx.fillStyle = "#2c1c14";
    ctx.font = "20px Verdana";

    ctx.fillText("" + value + "🍪 par seconde",20, 30);
}


window.addEventListener("mousemove", event =>{
    if(showCoor)console.log("X:"+event.x + "Y"+ event.y)
});

function addCookie(cookiesN){cookies += cookiesN;} 

function Separe(number) {
    // Info: Die '' sind zwei Hochkommas
    number = '' + number;
    if (number.length > 3) {
      var mod = number.length % 3;
      var output = (mod > 0 ? (number.substring(0,mod)) : '');
      for (i=0 ; i < Math.floor(number.length / 3); i++) {
        if ((mod == 0) && (i == 0))
          output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
        else
          // hier wird das Trennzeichen festgelegt mit '.'
          output+= ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
      }
     return (output);
    }
    else return number;
  }


