const buttoncopy = document.querySelector(".buttoncopy")
const buttoncopyclicado = document.querySelector(".buttoncopyclicado")
const text = document.querySelector(".inputtext")

buttoncopy.addEventListener("click", (evt) =>{
    buttoncopyclicado.style.display = "block";
    text.select();
    document.execCommand("copy");

    setTimeout(function () {
        buttoncopyclicado.style.display = "none";
    }, 2100);
})

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",    
      prevEl: ".swiper-button-prev",
    },
  });