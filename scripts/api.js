const API_URL = "https://691e9c66bb52a1db22be6ab4.mockapi.io/api/v1";

async function apiGET(endpoint) {
    const res = await fetch(`${API_URL}/${endpoint}`);
    return res.json();
}

async function apiPOST(endpoint, data) {
    const res = await fetch(`${API_URL}/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return res.json();
}

window.apiGET = apiGET;
window.apiPOST = apiPOST;
