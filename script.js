var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");
var h1= document.querySelector("h1");


main.addEventListener ( "mousemove" ,function (elem) {
    cursor.style.left = (elem.x + 15)  + "px";
    cursor.style.top = (elem.y +15) + "px";
})
    
h1.addEventListener ( "mouseover" ,function (elem) {  
    cursor.style.scale =2;   
})
h1.addEventListener("mouseleave",function(elem){  
    cursor.style.scale =1; 
}) 
