let hamburger = document.querySelector(".hamburger");
let times = document.querySelector(".times");
let mobileNav = document.querySelector(".mobile-navbar");
hamburger.addEventListener("click", function () {
  mobileNav.classList.add("open");
});

times.addEventListener("click", function () {
  mobileNav.classList.remove("open");
});
function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "ggane005@gmail.com",
    Password: "3D830B317FA58C885A128A517C7C8A73686A",
    To: "ganeshbodakuntla@gmail.com",
    From: document.getElementById("email").value,
    Subject: "new contact form enquiry",
      Body: "name" + document.getElementById("name").value
          + "<br> email:" + document.getElementById("email").value
          + "<br> subject:" + document.getElementById("subject").value
          +"<br> your message:"+ document.getElementById("textarea").value
  }).then((message) => alert("message sent successfully"));
}
