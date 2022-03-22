const passengers = [{name: "Julie Benchuk", paid: true},
    {name: "Anastasia Skokova", paid: true},
    {name: "Alina Magistrova", paid: false},
    {name: "Igor Stalyarow", paid: true},
    {name: "Daria Khamenya", paid: false}
];

//return TRUE if person paid for the ticket//
function checkPaid(passengers) {
    return (passengers.paid);
}

//return FALSE if there is person who isn't allowed to fly//
function checkBlackList(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        if (passengers[i].name === "Daria Khamenya") {
            return false;
        }
    }
    return true;
}

// function onBlackList(passengers) {
//     return (passengers.name === "Daria Khamenya");
// }

//list of passengers to log//
function printPassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        console.log(passengers[i].name);
        return false;
    }
    return true;
}

function processPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

//log message//
let allCanFly = processPassengers(passengers, checkBlackList);
if (!allCanFly) {
    console.log("The plane can't take off: there is a blacklisted passengers.");
}

//log message//
let allPaid = processPassengers(passengers, checkPaid);
if (!allPaid) {
    console.log("The plane can't take off: we have a passenger, who didn't pay for a ticket.");
}






