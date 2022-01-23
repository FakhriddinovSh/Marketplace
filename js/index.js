// // Hamburger Menu
// const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;
// menuBtn.addEventListener('click',() =>{
//     if(!menuOpen) {
//         menuBtn.classList.add('open');
//         menuOpen = true
//     }else{
//         menuBtn.classList.remove('open');
//         menuOpen = false;
//     }
// });

var toggle = document.querySelector("#toggle")
var navbar = document.querySelector("#navbar")
toggle.addEventListener("click", ()=>{
    if(toggle.classList.contains("header__toggle--active")){
        toggle.classList.remove("header__toggle--active")
        navbar.classList.remove("header__navbar--active")
    }else{
        toggle.classList.add("header__toggle--active")
        navbar.classList.add("header__navbar--active")
    }
})


