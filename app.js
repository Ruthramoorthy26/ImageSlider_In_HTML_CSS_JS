const container = document.querySelector(".container");
const buttons = document.querySelectorAll(".btn");
const imageList = ["1", "2", "3", "4"];

let index = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("btn-left")) {
      index--;
      if (index < 0) {
        index = imageList.length - 1;
      }
      container.style.background = `url("images/${imageList[index]}.jpg") center/cover fixed no-repeat`;
    } else {
      index++;
      if (index === imageList.length) {
        index = 0;
      }
      container.style.background = `url("images/${imageList[index]}.jpg") center/cover fixed no-repeat`;
    }
  });
});
