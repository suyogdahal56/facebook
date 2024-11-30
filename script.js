document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        alert(`Logging in with:\nEmail: ${email}\nPassword: ${password}`);
    } else {
        alert("Please fill in all fields!");
    }
});
