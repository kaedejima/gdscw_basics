var imgs = [
  "images/image1.png",
  "images/image2.png",
  "images/image3.png"
];

var btn = document.querySelector("button");
var icon = document.querySelector(".icon");
var counter = 1;
btn.addEventListener("click", () => {
  if (counter == 3) counter = 0;
  icon.src = imgs[counter];
  counter++;
})