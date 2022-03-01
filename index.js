
var navlinks = document.querySelector("#navlinks");
function showmenu(){
    navlinks.style.right ="0";
}
function hiddemenu(){
    navlinks.style.right ="-100px";
}

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("click" , ()=>{
    document.body.classList.toggle("dark")
})