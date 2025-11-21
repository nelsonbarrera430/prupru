console.log("Auth.js cargado");

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

// Registro
if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };
        await apiPOST("users", data);
        alert("Registro exitoso!");
        window.location.href = "login.html";
    });
}

// Login
if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const emailValue = document.getElementById("email").value;
        const passValue = document.getElementById("password").value;
        const users = await apiGET("users");
        const found = users.find(u => u.email === emailValue && u.password === passValue);
        if (!found) {
            alert("Credenciales incorrectas.");
            return;
        }
        localStorage.setItem("user", JSON.stringify(found));
        window.location.href = "dashboard.html";
    });
}
