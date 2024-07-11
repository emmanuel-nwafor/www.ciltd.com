//alert("THIS SITE IS STILL UNDER CONSTRUCTION")
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
};

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  
};


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
   
    this.classList.toggle("active");

   
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
};

function review() {
  alert("Thanks for your review.");
}


const image = document.getElementById("image")
function seat2() {
  
  document.getElementById("image");
  
  if (image.style.display === "flex") {
    image.style.display = "none"
  }
  else {
    image.style.display = "flex"
  };
};

const seating = document.getElementById("image2")
function seat(){
  document.getElementById("image2");
  
  if (seating.style.display === "flex") {
    seating.style.display = "none"
  }
  else {
    seating.style.display = "flex"
  }
}
/*$(document).ready(function(){
  $(".accordion").click(function(){
    $(".panel").slideToggle();
  });;
});*/




const hidden = document.getElementById("hidden");
function message() {
  
  document.getElementById("hidden")
//  hidden.style.display = "flex";
  
  if (hidden.style.display === "flex") {
    hidden.style.display = "none"
  } else {
    hidden.style.display = "flex"
  }

};