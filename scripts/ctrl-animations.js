const BoutonBurger = document.querySelector(".burger");
const menuMobile = document.querySelector(".menu-mobile");
const logo1 = document.querySelector(".OfficielLogo");

console.log("le script est lié");
function toggleBurger(x) {
    x.classList.toggle("change");
    if (BoutonBurger.classList.contains("change")) {
        menuMobile.classList.remove("menu-mobile");
        menuMobile.classList.add("menu-mobile-descente");
        logo1.classList.remove("OfficielLogo");
        logo1.classList.add("OfficielLogoAnim");

    } else {
        menuMobile.classList.remove("menu-mobile-descente");
        menuMobile.classList.add("menu-mobile");
        logo1.classList.remove("OfficielLogoAnim");
        logo1.classList.add("OfficielLogo");
    }
          
}
