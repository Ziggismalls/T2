// const select = document.querySelectorAll(".select");
// const player1 = document.getElementById("player1");
// const player2 = document.getElementById("player2");
// let clicknumb = 1;
// let currentPlayer = 1;
// select.forEach((s) => {
//   s.addEventListener("click", () => changeplayer(currentPlayer));

//   function changeplayer(player) {
//     const styles = window.getComputedStyle(s);
//     if (clicknumb <= 1) {
//       player1.style.backgroundImage =
//         styles.getPropertyValue("background-image");
//       currentPlayer = 2;
//     } else if (clicknumb === 2) {
//       player2.style.backgroundImage =
//         styles.getPropertyValue("background-image");
//     }
//     clicknumb++;
//   }
// });

const select = document.querySelectorAll(".select");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
let name1 = document.getElementById("playerName1");
let name2 = document.getElementById("playerName2");
let vsLogo = document.getElementById("vsLogo");
let clicknumb = 1;
let currentPlayer = 1;

select.forEach((s) => {
  s.addEventListener("click", () => changeplayer(currentPlayer));

  function changeplayer(player) {
    const styles = window.getComputedStyle(s);
    if (clicknumb <= 1) {
      player1.style.backgroundImage =
        styles.getPropertyValue("background-image");
      setTimeout(() => {
        name1.innerHTML = player1.style.backgroundImage
          .replace(/url\(|\)/g, "")
          .replace(/"/g, "")
          .split("/")
          .pop()
          .split(".")
          .shift()
          .toLowerCase()
          .replace(/_/g, " ")
          .replace(/\b\w/g, function (txt) {
            return txt.toUpperCase();
          });
      }, 1000);
      currentPlayer = 2;
    } else if (clicknumb === 2) {
      player2.style.backgroundImage =
        styles.getPropertyValue("background-image");
      setTimeout(() => {
        name2.innerHTML = player2.style.backgroundImage
          .replace(/url\(|\)/g, "")
          .replace(/"/g, "")
          .split("/")
          .pop()
          .split(".")
          .shift()
          .toLowerCase()
          .replace(/_/g, " ")
          .replace(/\b\w/g, function (txt) {
            return txt.toUpperCase();
          });
      }, 1000);
      setTimeout(() => {
        vsLogo.style.display = "flex";
      }, 2000);
      console.log(vsLogo.style);
      currentPlayer++;
    }
    clicknumb++;
  }
  select.forEach((s) => {
    s.addEventListener("mouseover", () => {
      switch (currentPlayer) {
        case 1:
          s.classList.add("selectedPerso1");
          break;
        case 2:
          s.classList.add("selectedPerso2");
          break;
        default:
          s.classList.add("noSelected");
          break;
      }
    });
  });
});

const homePage = document.getElementById("homePage");
const gamePage = document.getElementById("gamePage");
const startButton = document.getElementById("menuSlide");
const body = document.querySelector("body");
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
startButton.addEventListener("click", () => {
  slide1.classList.add("slideLeft");
  slide2.classList.add("slideRight");
  slide3.classList.add("slideDown");
  setTimeout(() => {
    homePage.style.display = "none";
    document.querySelector(".top").style.zIndex = "-1";
  }, 2500);
});
