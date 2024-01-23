//hamburger menu

const buttons = document.querySelectorAll("button");

document.querySelector(".btn").onclick = (e) => {
  const btns = document.querySelectorAll(".btn");
  if (btns) {
    buttons.forEach((button) => {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    });
  }
};
document.addEventListener("click", (event) => {
  const isButtonClick = Array.from(buttons).some((button) =>
    button.contains(event.target)
  );

  if (!isButtonClick && !container.contains(event.target)) {
    buttons.forEach((button) => {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    });
  }
});
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
  });
});

// toggle class active
const container = document.querySelector(".container");
// ketika hamburger menu di-klik
document.querySelector("button").onclick = (e) => {
  container.classList.toggle("active");
  e.preventDefault();
};
// klik di luar sidebar untuk menghilangkan nav
const button = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!button.contains(e.target) && !container.contains(e.target)) {
    container.classList.remove("active");
  }
});

//  Logika pencocokan code
let input_qr = document.querySelector("#txt_qr");
let btn_cari = document.querySelector("#btn_cari");

const keyNumber = (event) => {
  if (event.key >= 0 && event.key <= 9) {
    return true;
  } else {
    return false;
  }
};

input_qr.addEventListener(
  "keypress",
  (event) => (event.returnValue = keyNumber(event))
);

input_qr.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    cari();
  }
});

const cari = () => {
  const inputValue = parseInt(input_qr.value);

  if (inputValue === 12345) {
    window.open("Mangga.html", "_blank");
  }
  else if (inputValue === 54321) {
    window.open("Sawo.html", "_blank");
  }
  else if (inputValue === 67890) {
    window.open("Kersen.html", "_blank");
  }
  else {
    alert("Harap Memasukkan Code Yang Sesuai");
  }
}

btn_cari.addEventListener('click', ()=>{
  if (btn_cari.innerHTML == "Cari"){
    btn_cari.innerHTML = "Clear";
    cari();
  }
  else{
    btn_cari.innerHTML = "Cari";
    input_qr.value = "";
  }
});
// parralax
const translate = document.querySelectorAll(".translate");
const header = document.querySelector("header");
const section = document.querySelector("section");
const big_tittle = document.querySelector(".big-tittle");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  let sectionY = section.getBoundingClientRect();

  translate.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });

  big_tittle.style.opacity = -scroll / (header_height / 2) + 1;
});

const hamburgerSvg = document.querySelector(".hamburger");

function updateViewBox() {
  if (window.matchMedia("(max-width: 399px)").matches) {
    // Update viewBox value for 399px and below
    hamburgerSvg.setAttribute("width", "45");
  } else if (window.matchMedia("(max-width: 540px)").matches) {
    // Update viewBox value for 720px and below
    hamburgerSvg.setAttribute("width", "50");
  } else {
    // Reset viewBox value for above 720px
    hamburgerSvg.setAttribute("width", "60");
  }
}

// Call the function on page load and whenever the window is resized
window.addEventListener("DOMContentLoaded", updateViewBox);
window.addEventListener("resize", updateViewBox);

// read more button
const readMoreBtn = document.querySelectorAll(".read-more");
readMoreBtn.forEach((readMoreBtn) => {
  readMoreBtn.addEventListener("click", function () {
    readMoreBtn.classList.add("shrink");

    // Delay to allow the button to shrink before reverting back
    setTimeout(function () {
      readMoreBtn.classList.remove("shrink");
    }, 100); // Adjust the delay time if needed
  });
});

//navbar click
const links = document.querySelectorAll(".container a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    link.classList.add("clicked");
    setTimeout(function () {
      link.classList.remove("clicked");
    }, 200);
  });
});

//Primary Clicked
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    const isCardActive = card.classList.contains("actived");

    cards.forEach((otherCard) => {
      otherCard.classList.remove("actived");
    });

    if (!isCardActive) {
      card.classList.add("actived");
    }

    e.stopPropagation();
  });
});

