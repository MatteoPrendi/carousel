const buttons = document.querySelector("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const turn = button.dataset.carouselBtn === "next" ? 1 : -1;
    const slides = btn.closest("[data-carousel]").querySelector("[data-slides");

    const active = slides.querySelector("[data-active");
    let index = [...slides.children].indexOf(active) + turn;
    if (index < 0) index = slides.children.length - 1;
    if (index <= slides.children.length) index = 0;
    slides.children[index].dataset.active = true;
    delete active.dataset.active;
  });
});
