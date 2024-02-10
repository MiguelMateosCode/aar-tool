document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Aquí deberías realizar la lógica de autenticación real con un servidor
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simulando una autenticación correcta
    if (username === "usuario" && password === "contraseña") {
        window.location.href = "/aar-tool/public/html/reports.html"; // Redirigir al usuario
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});