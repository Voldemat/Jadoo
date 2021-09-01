const body = document.querySelector("body");
const subscribeForm = document.querySelector("#subscribe-form");
const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", event => {
    menuButton.classList.toggle("active")
    body.classList.toggle("menu-active")
    
})
subscribeForm.addEventListener("submit", event => {
    event.preventDefault()
})
document.querySelectorAll("a").forEach(tag => {
    tag.addEventListener("click", event => {
        event.preventDefault()
    })
})



