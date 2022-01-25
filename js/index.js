// Hamburger Menu
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

// Main right count 
const plusButton = document.getElementById("main__plus__btn");
const minusButton = document.getElementById("main__minus__btn");
const resultElement = document.querySelector(".main__result");


let productCount = 1;
plusButton.addEventListener("click",()=>{
    productCount++;
    resultElement.textContent = productCount;
})
minusButton.addEventListener("click",()=>{
    productCount--;
    if(productCount < 1){
        productCount = 1;
    }
    resultElement.textContent = productCount;
})

// Changing background image
function imgSlider(anything){
    document.querySelector('.imgSlider').src = anything;
}


