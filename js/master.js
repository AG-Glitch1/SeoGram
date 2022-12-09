let hamburger = document.querySelector('.hamburger')
let navMenu = document.querySelector('.nav-bar')


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("activebar")
    navMenu.classList.toggle("activebar")
})


document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener('click', () => {
    hamburger.classList.remove("activebar")
    navMenu.classList.remove("activebar")
}))



let ahead = document.querySelectorAll(".nav-link")

ahead.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        ahead.forEach((ele) => {
            ele.classList.remove("activee")
        })
        e.currentTarget.classList.add("activee")
    })
})





let upto = document.querySelector('.upto');

onscroll = function (){
    if(scrollY >= 240){
        upto.classList.add("show");
    } else{
        upto.classList.remove("show");
    }
}
upto.onclick = function(){
    scrollTo ({
        top: 0,
        behavior: "smooth",
    })
}
