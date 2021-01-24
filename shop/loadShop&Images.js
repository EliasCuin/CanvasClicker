var shopHeader;
shopHeader = new Image();

var cursorImage;
cursorImage = new Image();

var duckImage;
duckImage = new Image();

var duckIcon;
duckIcon = new Image();

var cursorIcon;
cursorIcon = new Image();

var factoryIcon;
factoryIcon = new Image();

var factoryImage;
factoryImage = new Image();


window.addEventListener("load", () => {
    ctx.fillStyle = "blue";
    ctx.fillRect(canvas.width - 244 * 1.3 ,0,244 * 1.3,canvas.height)   
    ctx.fillStyle = "#FF0000";
    ctx.fillText("SHOP",canvas.width-244 * 1.3 + 90, 70)

    cursorImage.src = "./Images/ShopImages/CursorButton.png";
    cursorImage.onload = function(){
        console.log(cursorImage.width + "|" +  cursorImage.height);
        console.log("loaded!");
        ctx.drawImage(cursorImage,cursorButtonX,cursorButtonY,cursorButtonWidth,cursorButtonHeight);

        setCursorButtonData(cursorPrice + "🍪",cursorAmount);
    };

    shopHeader.src = "./Images/ShopImages/shopHeader.png";
    shopHeader.onload = function(){
        ctx.drawImage(shopHeader,shopheaderX,shopheaderY,shopHeaderWidth,shopHeaderHeight);
    }

    duckImage.src = "./Images/ShopImages/DuckButton.png";
    duckImage.onload = function(){
        ctx.drawImage(duckImage,duckButtonX,duckButtonY,duckButtonWidth,duckButtonHeight);

        setDuckButtonData(duckPrice + "🍪",duckAmount);
    }

    factoryImage.src = "./Images/ShopImages/UsineButton.png";
    factoryImage.onload = function(){
        ctx.drawImage(factoryImage,factoryButtonX,factoryButtonY,factoryButtonWidth,factoryButtonHeight);
        console.log(factoryImage.width + " " + factoryImage.height)
    }


    duckIcon.src = "./Images/ShopImages/DuckIcon.png";
    cursorIcon.src = "./Images/ShopImages/cursorClick.png";
    factoryIcon.src = "./Images/ShopImages/FactoryIcon.png";

});