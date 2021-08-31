const toggle = document.querySelector("#toggle");
const nav = document.querySelector("#nav");
toggle.addEventListener('click', function (e) {
  console.log("===")
  nav.classList.toggle('active');
})
