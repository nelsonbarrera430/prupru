const user = JSON.parse(localStorage.getItem("user"));
if (!user) {
    window.location.href = "login.html";
}

document.getElementById("welcome").textContent =
    "Bienvenido, " + user.name;

document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "login.html";
});

// Mostrar usuarios de MockAPI en tarjetas
async function loadUsers() {
    const users = await apiGET("users");
    const container = document.getElementById("cards");
    container.innerHTML = "";

    users.forEach(u => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${u.name}</h3>
            <p><strong>Email:</strong> ${u.email}</p>
            <p><strong>ID:</strong> ${u.id}</p>
        `;
        container.appendChild(card);
    });
}

loadUsers();
