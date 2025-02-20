const darcMode = document.querySelector('.dark-mode')

darcMode.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");


    if (document.body.classList.contains("dark-mode")) {
        darcMode.innerHTML =`
        <img id="light-mode" src="./Icon.svg" width="19" alt="">`
        document.body.classList.add('.light-mode')
             
    } else {
  darcMode.innerHTML =`
        <img id="dark-mode" src="./Sun.svg" width="19" alt="">`
    }
});