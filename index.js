
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

const write = document.getElementById("write");
let rar = "World's Biggest univercity"
let idx = 1;
setInterval(tipe , 120);
function tipe(){
write.innerText = rar.slice(0,idx);
idx++;
}

const lev = document.getElementById("score-lev");
setInterval(() => {
    lev.style.width = "82%";
    lev.style.opacity = 1
}, 1000);

