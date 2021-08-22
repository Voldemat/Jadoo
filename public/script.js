const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", event => {
    menuButton.classList.toggle("active")
})
document.querySelectorAll("a").forEach(tag => {
    tag.addEventListener("click", event => {
        event.preventDefault()
    })
})