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

btn_cari.addEventListener('click', () => {
  if (btn_cari.innerHTML == "Cari") {
    btn_cari.innerHTML = "Clear";
    cari();
  }
  else {
    btn_cari.innerHTML = "Cari";
    input_qr.value = "";
  }
});
// Modal Card Name
const showModal = function(Nama, Biodata, Ig, Whatsapp) {
  document.querySelector("#modalNama").innerText = Nama;
  document.querySelector("#modalBiodata").innerText = Biodata;
  document.querySelector("#modalSosmed").innerText = "Instagram: " + Ig + "\nWhatsapp: " + Whatsapp;
  document.querySelector("#myModal").style.display = "flex";
};

const closeModal = function() {
  document.querySelector("#myModal").style.display = "none";
};

document.querySelector("#kartu1").addEventListener("click", function() {
  showModal('Muhammad Refo Febrian', 'Halo Saya Muhammad Refo Febrian, Seorang mahasiswa yang sedang berkuliah di UNIVERSTIAS TEKNOKRAT INDONESIA. Saya berumur 20 tahun dan dalam projek ini saya berkontribusi sebagai colaborator. Bagian bagian yang saya buat adalah Fitur ala ala QR code namun tidak memakai scanner hanya pencocokan angka saja, dan juga bagian halaman about us yang mengimplementasikan animasi modal', 'M.RefoFebrian_', '083190521929');
});

document.querySelector("#kartu2").addEventListener("click", function() {
  showModal('Julius John Cristian', 'Halo Saya Julius John Cristian, Seorang mahasiswa yang sedang berkuliah di UNIVERSTIAS TEKNOKRAT INDONESIA. Saya berumur 23 tahun dan dalam projek ini saya berkontribusi sebagai Master. Bagian bagian yang saya buat adalah halaman tentang pohon yang terdiri dari navbar, content, dan footer.', 'cecepisme', '085609185334');
});

document.querySelector("#kartu3").addEventListener("click", function() {
  showModal('Haidar Ramadhan', 'Halo Saya Haidar Ramadhan, Seorang mahasiswa yang sedang berkuliah di UNIVERSTIAS TEKNOKRAT INDONESIA. Saya berumur 20 tahun dan dalam projek ini saya berkontribusi sebagai colaborator. Bagian bagian yang saya buat adalah Home page yang mengimplementasi efek animasi paralax.', 'p_haidar_ramadhan_s.kom', '082178891674');
});

window.onclick = function(event) {
  if (event.target === document.querySelector("#myModal")) {
    closeModal();
  }
};
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

