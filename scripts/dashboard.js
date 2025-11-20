// Intentamos cargar datos solo si existen los elementos
const user = JSON.parse(localStorage.getItem("user"));

// Redirigir a login si no hay usuario y existe el elemento de bienvenida
if (!user && document.getElementById("welcome")) {
    window.location.href = "login.html";
}

// Mensaje de bienvenida (solo si el elemento existe)
const welcomeEl = document.getElementById("welcome");
if (welcomeEl && user) {
    welcomeEl.textContent = "Bienvenido, " + user.name;
}

// Botón de logout (solo si existe)
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "login.html";
    });
}

// Mostrar usuarios de MockAPI en tarjetas (solo si existe el contenedor)
async function loadUsers() {
    const container = document.getElementById("cards");
    if (!container) return; // No hay contenedor, salimos

    try {
        const users = await apiGET("users");
        container.innerHTML = "";

        users.forEach(u => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <h3>${u.name}</h3>
                <p><strong>Email:</strong> ${u.email || "sin email"}</p>
                <p><strong>ID:</strong> ${u.id}</p>
            `;
            container.appendChild(card);
        });
    } catch (err) {
        console.error("Error cargando usuarios:", err);
        container.innerHTML = "<p>Error cargando usuarios</p>";
    }
}

loadUsers();

// Mensaje de consola para confirmar carga
console.log("Dashboard cargado correctamente");
