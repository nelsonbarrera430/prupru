const user = JSON.parse(localStorage.getItem("user"));
const loaderToken = "loaderio-efbef567c31b278347796a38724003cd";

// No redirigir si Loader.io accede al archivo
if (!user && !window.location.href.includes(loaderToken)) {
    window.location.href = "login.html";
}

document.getElementById("welcome")?.textContent =
    user ? "Bienvenido, " + user.name : "";

document.getElementById("logoutBtn")?.addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "login.html";
});

// Mostrar usuarios de MockAPI en tarjetas
async function loadUsers() {
    const users = await apiGET("users");
    const container = document.getElementById("cards");
    if (!container) return;
    container.innerHTML = "";

    users.forEach(u => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${u.name}</h3>
            <p><strong>Email:</strong> ${u.email || "N/A"}</p>
            <p><strong>ID:</strong> ${u.id}</p>
        `;
        container.appendChild(card);
    });
}

loadUsers();
