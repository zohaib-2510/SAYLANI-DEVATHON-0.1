
var likebtn = document.getElementById("like");
var i = document.getElementById("i");
likebtn.addEventListener("click",()=>{
    i.style.color="red"
})
var read = document.getElementById("readmore");
read.addEventListener("click",()=>{
    var p = document.getElementById("rep").innerHTML="dolor sit amet consectetur, aspernatur officia odi";
    read.style.display="none"

})