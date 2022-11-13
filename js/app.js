let lis = document.querySelectorAll("li");
lis.forEach((li) =>
  li.addEventListener("click", () => {
    li.parentElement
      .querySelectorAll(".active")
      .forEach((active) => active.classList.remove("active"));
    li.classList.add("active");
  })
);
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 250,
  reset: true,
});

sr.reveal(`.info`);
sr.reveal(`.img`, { delay: 500 });
sr.reveal(`.cv`, { delay: 600 });
sr.reveal(`.r`, { origin: "left" });
sr.reveal(`.l`, { origin: "right" });
sr.reveal(`.t`, { origin: "top" });
sr.reveal(`.b`, { origin: "bottom" });
sr.reveal(`.project`, { interval: 150 });


let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#typing", {
    speed: 20,
  })
  .type("Helo!")
  .pause(300)
  .move(-2)
  .type("l")
  .move(2)
  .type("<br>")
  .type("I am ")
  .type("Mohaed")
  .pause(300)
  .move(-2)
  .type("m")
  .move(2)
  .type(" ")
  .type("Gaer")
  .pause(300)
  .move(-2)
  .type("b")
  .move(2)
  .type(".")
  .go();
});