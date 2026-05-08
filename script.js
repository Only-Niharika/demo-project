document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    let defaultUsername = "test";
    let defaultPassword = "12345";

    if (username === defaultUsername && password === defaultPassword) {
        message.style.color = "green";
        message.textContent = "Login successful!";

        window.location.href = "dashboard.html";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password!";
    }
});