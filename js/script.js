let btn = document.querySelector("#btn");
let btnText = document.querySelector("#btnText");
let btnIcon = document.querySelector("#btnIcon");
let mobile = document.querySelector(".mobile-btn");
let navMenu = document.querySelector(".nav-menu");


btn.onclick = function(){
    document.body.classList.toggle("dark-theme");

    
    if(document.body.classList.contains("dark-theme")) {
        btnIcon.classList.remove("fa-moon");
        btnIcon.classList.add("fa-sun");
        btnText.innerText = "Light";
       
    }else {
        btnIcon.classList.remove("fa-sun");
        btnIcon.classList.add("fa-moon");
        btnText.innerText = "Dark";
    }

}

mobile.addEventListener("click", () => {
    mobile.classList.toggle('active');
    navMenu.classList.toggle('active');
});

