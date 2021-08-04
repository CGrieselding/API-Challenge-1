const baseURL = "https://ergast.com/api/f1/2021/drivers.json";
const results = document.getElementById("results");

function fetchDrivers() {
  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayDrivers(data);
    });
}

fetchDrivers();

let row = document.createElement("div");
row.setAttribute("class", "row");

// <!-- Button trigger modal -->
// <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//   Launch demo modal
// </button>

// <!-- Modal -->
// <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         SKIP  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>

function displayDrivers(data) {
  for (driver of data.MRData.DriverTable.Drivers) {
    console.log(driver);

    let col = document.createElement("div");
    col.setAttribute("class", "col-3");

    // START OF MODAL
    let button = document.createElement("a");
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#exampleModal");

    button.innerText = driver.givenName + " " + driver.familyName;

    let modal = document.createElement("div");
    modal.setAttribute("class", "modal fade");
    modal.setAttribute("id", "exampleModal");
    modal.setAttribute("tabindex", -1);
    modal.setAttribute("aria-labelledby", "exampleModalLabel");
    modal.setAttribute("aria-hidden", true);

    let modalDialog = document.createElement("div");
    modalDialog.setAttribute("class", "modal-dialog");

    let modalContent = document.createElement("div");
    modalContent.setAttribute("class", "modal-content");

    let modalHeader = document.createElement("div");
    modalHeader.setAttribute("class", "modal-header");

    let nameHeader = document.createElement("h5");      // ADDED
    nameHeader.innerText = driver.givenName + " " + driver.familyName;

    let buttonTwo = document.createElement("button");
    buttonTwo.setAttribute("class", "btn-close");
    buttonTwo.setAttribute("data-bs-dismiss", "modal");
    buttonTwo.setAttribute("aria-label", "Close");

    let modalBody = document.createElement("div");
    modalBody.setAttribute("class", "modal-body");
    
    // MODAL BODY START

    let birthDate = document.createElement("p");    // ADDED
    birthDate.innerText = 'Date of Birth: ' + driver.dateOfBirth;

    let driverNationality = document.createElement("p");
    driverNationality.innerText = 'Nationality: ' + driver.nationality;

    let driverNumber = document.createElement("p");
    driverNumber.innerText = 'Permanent Number: ' + driver.permanentNumber;

    let driverBiography = document.createElement("p");
    driverBiography.innerText = 'Biography: ' + driver.url;

    // MODAY BODY END

    let modalFooter = document.createElement("div");
    modalFooter.setAttribute("class", "modal-footer");

    col.appendChild(button);      
    row.appendChild(col);         

    results.appendChild(row);         // IN MODAL
    document.body.appendChild(modal);
    modal.appendChild(modalDialog);
    modalDialog.appendChild(modalContent);
    modalContent.appendChild(modalHeader);
    modalHeader.appendChild(buttonTwo);
    modalHeader.appendChild(nameHeader);
    modalContent.appendChild(modalBody);
    modalBody.appendChild(birthDate);         // ADDED
    modalBody.appendChild(driverNationality); // ADDED
    modalBody.appendChild(driverNumber);      // ADDED 
    modalBody.appendChild(driverBiography);   // ADDED
    modalContent.appendChild(modalFooter);
    // END OF MODAL
  }
}