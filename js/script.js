const iconHamburger = document.querySelector(".header__hamburger--menu")
const iconClose = document.querySelector(".header__nav__icon__close")
const menuMobile = document.querySelector(".header__nav--mobile")

iconHamburger.addEventListener("click", function(event){
   
        iconHamburger.style.display = "none"
        menuMobile.style.display = "block"
    
})

iconClose.addEventListener("click", function(event){
    menuMobile.style.display = "none"
    
    iconHamburger.style.display = "block"
 
})

