const input = document.querySelector("input");
const section = document.querySelector("#main_screen");
let icons = document.querySelectorAll(".trash_can_icon");
icons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    section.removeChild(e.target.parentNode.parentNode);
  });
});

function createItemList(itemName) {
  const div = document.createElement("div");
  div.setAttribute("class", "shopping_list");
  section.appendChild(div);
  const p = document.createElement("p");
  p.setAttribute("class", "item_name");
  p.innerHTML = itemName;
  div.appendChild(p);

  const divIcon = document.createElement("div");
  divIcon.setAttribute("class", "trash_can_icon");
  divIcon.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
  div.appendChild(divIcon);
}

function makeLastIconEvent() {
  const lastIcon = document.querySelector(".shopping_list:last-child i");
  lastIcon.addEventListener("click", (e) => {
    section.removeChild(lastIcon.parentNode.parentNode);
  });
}
input.addEventListener("keypress", (e) => {
  createItemList(e.target.value);
  e.target.value = "";
  makeLastIconEvent();
});

const plus_btn = document.querySelector(".plus_btn");
plus_btn.addEventListener("click", () => {
  createItemList(input.value);
  input.value = "";
  makeLastIconEvent();
});
