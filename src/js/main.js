"use strict";

//Asynkron funktion med try/catch för att hämta ut min data. 
async function getData() {

    try {

        const response = await fetch("https://dt207g-moment2-rest.onrender.com/api/workexperience");

        if (!response.ok) throw new Error("Nätverksfel");

        const data = await response.json();
        console.table(data);
        renderData(data);   //Anropar funktion som skriver ut datan på skärmen.
    } catch (error) {
        console.error("Fel vid hämtning:", error);
    } finally {
        console.log("Förfrågan avslutad.");
    }
}

getData();

//Skriv ut datan på skärmen med en funktion och manipulera DOM
function renderData(data) {
    const tableBody = document.getElementById("workexperienceTable");
    tableBody.innerHTML = '';

    data.forEach(work => {
        const row = document.createElement('tr');

        //Addera varje egenskap från de egenskaperna som finns i mitt objekt i API:et.
        row.innerHTML = `
            <td>${work.companyname}</td>
            <td>${work.jobtitle}</td>
            <td>${work.location}</td>
            <td>${work.startdate}</td>
            <td>${work.enddate}</td>
            <td>${work.description}</td>
        `;

        tableBody.appendChild(row);
    });
}
