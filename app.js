let menuOn = document.querySelector(".menu-btn")
let Navhide = document.querySelector(".ul")
let myNav = document.querySelector("nav")
let exitbtn =document.querySelector(".exit")
menuOn.onclick = function(){
    Navhide.style.display ="block"
     myNav.style.display ="block"
    menuOn.style.display ="none"
    exitbtn.style.display = "block"

}
exitbtn.onclick = function(){
    Navhide.style.display ="none"
     myNav.style.display ="flex"
    menuOn.style.display ="block"
    exitbtn.style.display = "none"

}
