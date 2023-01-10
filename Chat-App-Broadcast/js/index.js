const sendForm = document.getElementById("send-form");

sendForm.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("submitted");
});