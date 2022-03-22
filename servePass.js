const passengers = [{name: "Julie Benchuk", paid: true, ticket: "firstclass"},
    {name: "Anastasia Skokova", paid: true, ticket: "firstclass"},
    {name: "Alina Magistrova", paid: false, ticket: "businessclass"},
    {name: "Igor Stalyarow", paid: true, ticket: "coach"},
    {name: "Daria Khamenya", paid: false, ticket: "businessclass"}
];
//                                     CHECK PAYMENT AND PROHIBITION         //
//return TRUE if person paid for the ticket//
function checkPaid(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        if(!passengers[i].paid) {
            return false;
        }
    }
    return true;
}

//return FALSE if there is person who isn't allowed to fly//
function checkBlackList(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        if (checkNoBlackList(passengers[i].name)) {
            return false;
        }
    }
    return true;
}

//list of passengers//
function printPassenger(passenger) {
    var message = passenger.name;
    if (passenger.paid === true) {
        message = message + " has paid";
    } else {
        message = message + " has not paid";
    }
    console.log(message);
    return false;
}


//return TRUE if a person in black list//
function checkNoBlackList(passenger) {
    return (passenger.name === "Daria Khamenya");
}

//return TRUE if a person didn't pay//
function checkNotPaid(passender) {
    return (!passender.paid);
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
let allCanFly = processPassengers(passengers, checkNoBlackList);
if (!allCanFly) {
    console.log("The plane can't take off: there is a blacklisted passengers.");
}

//log message//
let allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log("The plane can't take off: we have a passenger, who didn't pay for a ticket.");
}
processPassengers(passengers, printPassenger);

//                                             SERVICE                                 //

function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);
    getDrinkOrderFunction();
    getDinnerOrderFunction();
    // turn on TV
}

function createDrinkOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "businessclass") {
        orderFunction = function () {
            console.log("Would you like a beer or wine?");
        }
    } else if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            console.log("Your choice is mineral water, cola or juice.");
        }
    } else {
        orderFunction = function () {
            console.log("Would you like a mineral water?");
        }
    }
    return orderFunction;
}

function createDinnerOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "businessclass") {
        orderFunction = function () {
            console.log("Do you want chicken or pasta?");
        }
    } else if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            console.log("Do you want a cheese plate or snacks?");
        }
    } else {
        orderFunction = function () {
            console.log("Do you want nuts or chips?");
        }
    }
    return orderFunction;
}

function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++ ) {
        serveCustomer(passengers[i]);
    }
}
servePassengers(passengers);