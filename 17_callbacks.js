function do_assignment(callback) {
    console.log("I am doing assignment and it is don now...");
    callback();
}

function copy_assignment() {
    console.log("Hay bro.. Thank you. let me copy");
}

do_assignment(copy_assignment);

function display() {
    console.log("display function");
}

setTimeout( display, 4000);

setInterval(display, 2000);
