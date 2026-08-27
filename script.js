const list = document.querySelector("#starred");
const status = document.querySelector("#status");

fetch("events.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }
        return response.json();
    })
    .then((events) => {
        events.forEach((event) => {
            const item = document.createElement("li");
            item.textContent = `${event.name} - starred ${event.starred}`;
            list.appendChild(item);
        });
        list.setAttribute("aria-busy", "false");
        status.textContent = `${events.length} starred repositories loaded.`;
    })
    .catch((error) => {
        list.setAttribute("aria-busy", "false");
        status.textContent = "Unable to load starred repositories.";
        console.error(error);
    });