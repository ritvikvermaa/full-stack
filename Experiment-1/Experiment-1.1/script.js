const form = document.getElementById("registrationForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    if (name.length < 9 || name.length > 50) {
        alert("Name must be between 9 and 50 characters");
        return;
    }

    if (age < 16 || age > 30) {
        alert("Age must be between 16 and 30");
        return;
    }

    successMsg.innerText = "Registration Successful!";
    form.reset();
});
