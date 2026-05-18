// let lists = document.getElementsByClassName("list-item");
let lists = document.querySelectorAll(".list-item");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (list of lists) {
  console.log(list);
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;
    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(selected);
      selected = null;
    });

    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", function (e) {
      leftBox.appendChild(selected);
      selected = null;
    });
  });
}
