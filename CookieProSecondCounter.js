var oldCookieValue1;
var oldCookieValue2;
var oldCookieValue3;

var cps;

window.requestAnimationFrame(cookieCountLoop);
changeSecondCounterTitleTo(0);



async function cookieCountLoop(){
    
    
    oldCookieValue1 = cookies;
    await Sleep(1000);
    oldCookieValue2 = cookies;
    await Sleep(1000);
    cps = Separe(parseFloat((cookies - (oldCookieValue1 + oldCookieValue2)/2).toFixed(2)));
    
    if(cps < 0) cps = 0;    
    changeSecondCounterTitleTo(cps);


    window.requestAnimationFrame(cookieCountLoop);
}

