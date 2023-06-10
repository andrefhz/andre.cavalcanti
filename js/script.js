let btn = document.querySelector("#btn");
let btnText = document.querySelector("#btnText");
let btnIcon = document.querySelector("#btnIcon");

btn.onclick = function(){
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")) {
        btnIcon.src = "img/sun.png";
        btnText.innerText = "Light";
    }else {
        btnIcon.src = "img/moon.png";
        btnText.innerText = "Dark";
    }

}


