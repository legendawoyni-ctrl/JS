const sarlavha = document.getElementById("sarlavha");
const matn = document.querySelector(".matn");
const ulug = document.getElementById("btn");

ulug.addEventListener("click", () => {
  sarlavha.textContent = "Yangi Sarlavha";
  console.log(matn.textContent);
});

