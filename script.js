/*Menu responsivo*/ 
function showMenuResponsivo(){
            const menuResponsivo = document.querySelector(".menu-responsivo");
            const menuDesktop = document.querySelector(".menu-desktop")
            menuResponsivo.style.display = "flex";
            menuDesktop.style.display = "none";
}
function hideMenuResponsivo(){
            const menuResponsivo = document.querySelector(".menu-responsivo");
            const menuDesktop = document.querySelector(".menu-desktop")
            menuResponsivo.style.display = "none";
            menuDesktop.style.display = "flex";
}