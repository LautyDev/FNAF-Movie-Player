const startButton = document.getElementById("start");

const language = {
  en: "https://archive.org/embed/fnaf-en",
  es: "https://archive.org/embed/fnaf-es",
};

startButton.addEventListener("click", function () {
  const selectElement = document.getElementById("lang");
  const mainElement = document.querySelector("main");

  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    return (mainElement.innerHTML = `<iframe src="${
      language[selectElement.value]
    }" width="${
      screenWidth - 50
    }" height="480" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`);
  }

  mainElement.innerHTML = `<iframe src="${
    language[selectElement.value]
  }" width="750" height="580" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`;
});
