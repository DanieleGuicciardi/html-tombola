const numbers = Array.from({length: 90}, (_, i) => i + 1); 
let drawnNumbers = []; 

// table
const tableContainer = document.getElementById("tombola-table");
numbers.forEach(number => {
    const cell = document.createElement("div");
    cell.classList.add("table-cell");
    cell.id = `cell-${number}`;
    cell.textContent = number;
    tableContainer.appendChild(cell);
});

// number extraction
function drawNumber() {
    if (drawnNumbers.length >= 90) {
        alert("Tutti i numeri sono stati estratti!");
        return;
    }
    let number;
    do {
        number = Math.floor(Math.random() * 90) + 1;
    } while (drawnNumbers.includes(number));

    drawnNumbers.push(number);
    document.getElementById(`cell-${number}`).classList.add("highlighted");
}

// random number
function generateTicket() {
    const ticketContainer = document.getElementById("ticket");
    ticketContainer.innerHTML = ""; //content reset
    ticketContainer.style.display = "grid";

    let ticketNumbers = [];
    while (ticketNumbers.length < 24) {
        const randomNumber = Math.floor(Math.random() * 90) + 1;
        if (!ticketNumbers.includes(randomNumber)) {
            ticketNumbers.push(randomNumber);
        }
    }

    ticketNumbers.forEach(number => {
        const cell = document.createElement("div");
        cell.classList.add("ticket-cell");
        cell.textContent = number;
        ticketContainer.appendChild(cell);
    });
}