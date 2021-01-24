//#region images
var cookieImage;

var SaveImage;
var SaveImageClicked;

var importImage;
var importImageClicked;

//#endregion

window.addEventListener("load", () => {
    
    //#region cookieImage
    cookieImage = new Image();
    cookieImage.src = './Images/Cookie.png';
    cookieImage.onload = function(){
        ctx.drawImage(cookieImage,cookiePosX,cookiePosY,cookieWidth,cookieHeight);
    }   
    //#endregion
    //#region saveImage
    SaveImage = new Image();
    SaveImage.src = './Images/Button1.png';
    SaveImage.onload = function(){
        ctx.drawImage(SaveImage,0,canvas.height - this.height,this.width,this.height);
    } 

    SaveImageClicked = new Image();
    SaveImageClicked.src = './Images/Button1clicked.png';
    //SaveImageClicked.onload = function(){ctx.drawImage(SaveImageClicked,0,canvas.height - 71,307,71); console.log(this.height + "|" + this.height);}
    //#endregion
    //#region importImage
    importImage = new Image();
    importImage.src = './Images/Button2.png';
    importImage.onload = function(){
        ctx.drawImage(importImage,this.width +20,canvas.height - this.height,this.width,this.height);
    }  

    importImageClicked = new Image();
    importImageClicked.src = './Images/Button2clicked.png';
    //#endregion
    
});