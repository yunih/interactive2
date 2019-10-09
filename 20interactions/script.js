let element3 = document.querySelector("#element-3");
let element4 = document.querySelector("#element-4");
let element5 = document.querySelector("#element-5");
let element6 = document.querySelector("#element-6");
let element7 = document.querySelector("#element-7");
let element8 = document.querySelector("#element-8");
let element9 = document.querySelector("#element-9");
let element10 = document.querySelector("#element-10");


element3.addEventListener("click", function() {
  element3.animate(
    [
      {
        opacity: 0,
        marginLeft: getComputedStyle(this).marginLeft,
        fontSize: "100px",
        borderWidth: getComputedStyle(this).borderWidth
      },
      {
        opacity: 0.4,
        marginLeft: "125px",
        fontSize: "24px",
        borderWidth: "10px"
      }
    ],
    {
      duration: 200,
      iterations: 1,
      fill: "forwards"
    }
  );
});

element6.addEventListener("pointermove", function(e) {
  var xPos = e.pageX - 125;
  var yPos = e.pageY - 125;

  this.style.position = "absolute";
  this.style.top = yPos + "px";
  this.style.left = xPos + "px";
});

element4.addEventListener("click", function() {
  this.classList.add("gradient-background");
});

element5.addEventListener("click", function() {
  this.nextElementSibling.classList.toggle("circle");
});

let draggedEl

element7.onmousedown = function(){
      draggedEl = this
    }

    document.onmousemove = function(event){
     
if(draggedEl){
      draggedEl.style.position = 'absolute'

    draggedEl.style.top = window.scrollY + event.clientY - draggedEl.clientHeight/2 + 'px'
    draggedEl.style.left = event.clientX - draggedEl.clientWidth/2 + 'px'
}
  }
  document.onmouseup = function() {
    draggedEl = undefined
  }





var x = 0;
var y = 0;
var z = 0;

function myMoveFunction() {
  z += 1
  this.innerHTML = z//+=1;
}

function myEnterFunction() {
  document.getElementById("element-9").innerHTML = x+=1;
}

function myOverFunction() {
  document.getElementById("element-10").innerHTML = y+=1;
}


element8.onmousemove = myMoveFunction

element9.onmouseenter = myEnterFunction

element10.onmouseover = myOverFunction







