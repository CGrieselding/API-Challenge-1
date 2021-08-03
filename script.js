const baseURL = 'https://ergast.com/api/f1/2021/drivers';

let f1Drivers = baseURL.MRData.DriverTable.Drivers[0];  //ERROR

function fetchDrivers (e) {
    e.preventDefault();

    fetch(baseURL)
    .then(result => {
        console.log(result)
        return result.json;
    })
    .then(json => {
        displayDrivers(json);
    })
}

function displayDrivers(data) {
    console.log('Inside displayDrivers:', data);

    data.forEach(drivers => {
        console.log(drivers.name)
    })
}

// Put a p tag in html and do queryselector or select by class/ID.