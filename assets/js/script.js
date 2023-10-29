const startButton = document.getElementById("start");

const language = {
  es: "https://archive.org/embed/fnaf-es",
};

startButton.addEventListener("click", function () {
  const selectElement = document.getElementById("lang");

  const mainElement = document.querySelector("main");
  mainElement.innerHTML = "";

  const iframe = document.createElement("iframe");
  iframe.src = language[selectElement.value];
  iframe.width = "750";
  iframe.height = "580";
  iframe.frameborder = "0";
  iframe.webkitallowfullscreen = "true";
  iframe.mozallowfullscreen = "true";
  iframe.allowfullscreen = "true";
  iframe.style.border = "none";

  mainElement.appendChild(iframe);
});
