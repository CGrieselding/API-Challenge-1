const baseURL = "http://ergast.com/api/f1/2021/driverStandings.json";
const results = document.getElementById("results");

function fetchDrivers() {
  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayDrivers(data);
    });
};

fetchDrivers();

let row = document.createElement("div");
row.setAttribute("class", "row");

function displayDrivers(data) {
  for (driver of data.MRData.StandingsTable.StandingsLists[0].DriverStandings) {
    console.log(driver);

    let col = document.createElement("div");
    col.setAttribute("class", "col-3");

    let button = document.createElement("a");
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", `#${driver.Driver.givenName}`);

    button.innerText = driver.Driver.givenName + " " + driver.Driver.familyName;

    let modal = document.createElement("div");
    modal.setAttribute("class", "modal fade");
    modal.setAttribute("id", `${driver.Driver.givenName}`);
    modal.setAttribute("tabindex", -1);
    modal.setAttribute("aria-labelledby", `${driver.Driver.givenName}ModalLabel`);
    modal.setAttribute("aria-hidden", true);

    let modalDialog = document.createElement("div");
    modalDialog.setAttribute("class", "modal-dialog");

    let modalContent = document.createElement("div");
    modalContent.setAttribute("class", "modal-content");

    let modalHeader = document.createElement("div");
    modalHeader.setAttribute("class", "modal-header");

    let buttonTwo = document.createElement("button");
    buttonTwo.setAttribute("class", "btn-close");
    buttonTwo.setAttribute("data-bs-dismiss", "modal");
    buttonTwo.setAttribute("aria-label", "Close");

    let nameHeader = document.createElement("h2");
    nameHeader.innerText = driver.Driver.givenName + " " + driver.Driver.familyName;

    let modalBody = document.createElement("div");
    modalBody.setAttribute("class", "modal-body");

    let birthDate = document.createElement("p");   
    birthDate.innerText = 'Date of Birth (YYYY/MM/DD): ' + driver.Driver.dateOfBirth;

    let driverNationality = document.createElement("p");
    driverNationality.innerText = 'Nationality: ' + driver.Driver.nationality;

    let driverNumber = document.createElement("p");
    driverNumber.innerText = 'Car Number: ' + driver.Driver.permanentNumber;

    let driverRank = document.createElement("p");
    driverRank.innerText = 'Current Rank This Season: ' + driver.position;

    let driverPoints = document.createElement("p");
    driverPoints.innerText = 'Total Points This Season: ' + driver.points;

    let driverWins = document.createElement("p");
    driverWins.innerText = 'Total Wins This Season: ' + driver.wins;

    let driverBiography = document.createElement("a");
    driverBiography.setAttribute('target', '_blank');
    let biographyText = document.createTextNode(`Read More About ${driver.Driver.givenName + " " + driver.Driver.familyName} Here!`)
    driverBiography.appendChild(biographyText);
    driverBiography.href = driver.Driver.url;
    // window.open(driverBiography.href, '_blank');
    driverBiography.style.color = "#ff1801";

    let modalFooter = document.createElement("div");
    modalFooter.setAttribute("class", "modal-footer");

    col.appendChild(button);      
    row.appendChild(col);         

    results.appendChild(row);
    document.body.appendChild(modal);
    modal.appendChild(modalDialog);
    modalDialog.appendChild(modalContent);
    modalContent.appendChild(modalHeader);
    modalHeader.appendChild(nameHeader);
    modalHeader.appendChild(buttonTwo);
    modalContent.appendChild(modalBody);
    modalBody.appendChild(birthDate);
    modalBody.appendChild(driverNationality); 
    modalBody.appendChild(driverNumber);
    modalBody.appendChild(driverRank);
    modalBody.appendChild(driverPoints);
    modalBody.appendChild(driverWins);
    modalBody.appendChild(driverBiography);
    modalContent.appendChild(modalFooter);
  }
}