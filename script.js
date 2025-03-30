document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
    } else {
        alert("Message sent successfully!");
    }
});
