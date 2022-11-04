function do_assignment(callback) {
    console.log("I am doing assignment and it is don now...");
    callback();
    return function () {
        console.log("Yahoo... ");
    }
}

function copy_assignment() {
    console.log("Hay bro.. Thank you. let me copy");
}

let returnFun=do_assignment(copy_assignment);
returnFun();