const ContactForms = document.getElementById("contact-form");

ContactForms.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const url = event.target.action; // Get the form action URL
  const formData = new FormData(ContactForms); // Create a FormData object from the form

  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      window.location.href = "thankyou.html"; // Redirect to thank you page on success
    })
    .catch((error) => alert("Error: " + error)); // Handle any errors that occur during the fetch
});

document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed-text", {
    strings: [
      "Andri.",
      "Junior Web Programmer.",
    ],
    typeSpeed: 80,
    backSpeed: 90,
    backDelay: 2000,
    loop: true,
    showCursor: true,
    cursorChar: "_",
  });
});
