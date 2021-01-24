var cc = ["=UT", "Rd0", "DIA","D0I","OI0","SZI","QGH","D1S","MAW","DSD","SP="];
function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}
function togglePopup1(){
    document.getElementById("popup-2").classList.toggle("active");                                      
}
function onOkbuttonclicked(){
    document.getElementById("popup-2").classList.toggle("active");
    cookies = parseInt(convertCodeTocookies(document.getElementById('tb2').value));
    changeTitleTo(cookies);
}
function openPupup(code){
    togglePopup();
    document.getElementById('tb1').value = code;
}
function convertCookiesToCode(Cookies){
    return cc[Math.round(Math.random() * 10)] + cc[Math.round(Math.random() * 10)]+ cc[Math.round(Math.random() * 10)]+ cc[Math.round(Math.random() * 10)]+ cc[Math.round(Math.random() * 10)]+ cc[Math.round(Math.random() * 10)]+ cc[Math.round(Math.random() * 10)]+ cc[Math.round(Math.random() * 10)]+ cc[Math.round(Math.random() * 10)] + btoa(Cookies)
}
function convertCodeTocookies(codee){
    return atob(codee.substring(27));
}