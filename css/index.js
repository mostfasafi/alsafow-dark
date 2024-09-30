let dawn = document.getElementById("dawn");

window.onscroll = function () {
  if (window.scrollY <= 300) {
    dawn.className = "dawnup";
    dawn.style.display = "none";
  } else {
    dawn.className = "dawn";
    dawn.style.display = "flex";
  }
};
dawn.onclick = function () {
  window.open("https://api.whatsapp.com/send/?phone=966558048004");
};
