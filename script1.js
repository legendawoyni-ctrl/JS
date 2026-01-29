function addItem() {
  const ul = document.getElementById("list");

  const li = document.createElement("li");
  li.textContent = "Apelsin";

  ul.appendChild(li);
}