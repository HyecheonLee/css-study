let toggles = document.querySelectorAll(".faq-toggle");
toggles.forEach(toggle => {
    toggle.addEventListener('click', evt => {
        toggle.closest(".faq").classList.toggle('active')
    })
})
