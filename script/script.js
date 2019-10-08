
let hamMenu = document.querySelector("#hamburger");
let modal = document.querySelector("#modal");
let body = document.querySelector("body");
let close = document.querySelector(".close");

hamMenu.addEventListener("click", function(){
  modal.style.display = "block";
  body.style.overflowY = "hidden";
  body.style.overflowX = "hidden";
});

close.addEventListener("click", function(){
  exit();
});

window.addEventListener("click", function(event){
  if (event.target == modal){
    exit();
  }
})

window.addEventListener("resize", function(){
  exit();
})

function exit(){
  modal.style.display = "none";
  body.style.overflowY = "scroll";
}