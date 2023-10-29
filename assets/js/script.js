const startButton = document.getElementById("start");

const language = {
  es: "https://archive.org/embed/fnaf-es",
};

startButton.addEventListener("click", function () {
  const selectElement = document.getElementById("lang");
  const mainElement = document.querySelector("main");

  if (window.innerWidth < 768) {
    return (mainElement.innerHTML = `<iframe src="${
      language[selectElement.value]
    }" width="300" height="300" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`);
  }

  mainElement.innerHTML = `<iframe src="${
    language[selectElement.value]
  }" width="750" height="580" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`;
});
