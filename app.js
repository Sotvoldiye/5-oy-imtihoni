const darkMode = document.querySelector(".dark-mode");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  darkMode.innerHTML = `<img id="light-mode" src="./Icon.svg" width="19" alt="">`;
} else {
  darkMode.innerHTML = `<img id="dark-mode" src="./Sun.svg" width="19" alt="">`;
}

darkMode.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    darkMode.innerHTML = `<img id="light-mode" src="./Icon.svg" width="19" alt="">`;
    localStorage.setItem("theme", "light");
  } else {
    darkMode.innerHTML = `<img id="dark-mode" src="./Sun.svg" width="19" alt="">`;
    localStorage.setItem("theme", "dark");
  }
});

const close_btn = document.querySelector(".close-btn");
const createLogin = document.querySelector(".createLogin");
const modal_overlay = document.querySelector(".modal-overlay");
const login = document.querySelector(".login");

login.addEventListener("click", () => {
  modal_overlay.style.display = "flex";
});

close_btn.addEventListener("click", () => {
  modal_overlay.style.display = "none";
});

modal_overlay.addEventListener("click", () => {
  modal_overlay.style.display = "none";
});

 
const links__link = document.querySelector('modal2')
const modal2 = document.querySelector('.modal2')

links__link.addEventListener('click', ()=>{
    modal2.style.display = 'flex'
})