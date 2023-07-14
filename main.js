let menu=document.querySelector(".img");
let close=document.querySelector(".close");
let list=document.querySelector(".itinfo")
menu.onclick=function(){
    list.style.cssText="display:flex !important";
}
close.onclick=function(){
    list.style.cssText="display:none !important";
}