const scriptURL =
  "https://script.google.com/macros/s/AKfycbxtrZPMvmyOh3oNe2ayejezWsddtUtnBsQNcBrbORLmRcsC8ngbJ-o8UmuCMQm794QK/exec";

const form = document.forms["contact-form"];

if (!form.hasEventListener) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submission prevented");

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        window.location.href = "thankyou.html"; // Redirect
      })
      .catch((error) => console.error("Error!", error.message));
  });
  form.hasEventListener = true; // Prevent duplicate listeners
}
