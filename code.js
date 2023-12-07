var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});
function closeNavigation() {
  var x = document.getElementById("myTopnav");
  if (x) {
    x.classList.remove("responsive");
  }
}

function myFunction() {
  var x = document.getElementById("myTopnav");

  if (x) {
    if (x.classList.contains("responsive")) {
      closeNavigation();
    } else {
      x.classList.add("responsive");
    }
  } else {
    console.error("Element with ID 'myTopnav' not found");
  }
}

// Add an event listener to close the responsive navigation when clicking outside of it
document.addEventListener("click", function (event) {
  var x = document.getElementById("myTopnav");
  var icon = document.querySelector(".icon");

  if (
    x &&
    event.target !== icon &&
    !icon.contains(event.target) &&
    !x.contains(event.target)
  ) {
    closeNavigation();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const section2 = document.querySelector(".section2");

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function handleScroll() {
    if (isElementInViewport(section2)) {
      section2.classList.add("animate");
    }
  }

  window.addEventListener("scroll", handleScroll);

  // Initial check in case the element is already in the viewport on page load
  handleScroll();
});

$(document).ready(function () {
  // Instagram
  $(".fa-instagram")
    .parent()
    .click(function () {
      window.open("https://www.instagram.com/", "_blank");
    });

  // Envelope (Email)
  $(".fa-envelope")
    .parent()
    .click(function () {
      window.open("mailto:you@example.com", "_blank");
    });

  // LinkedIn
  $(".fa-linkedin-square")
    .parent()
    .click(function () {
      window.open("https://www.linkedin.com/", "_blank");
    });
    //GitHub
  $("fa fa-github")
    .parent()
    .click(function () {
      window.open("https://github.com/NethmiSilva", "_blank");
    });
});
