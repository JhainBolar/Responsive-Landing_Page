const btn = document.querySelector('.menu-toggle')
const navlinks = document.querySelector('.navbar')

btn.addEventListener('click', ()=>{
    if (navlinks.style.display === "none") {
        navlinks.style.display = "flex";
    } else {
        navlinks.style.display = "none";
    }
})
function myFunction(x) {
    btn.classList.toggle("fa-minus-circle");
}
