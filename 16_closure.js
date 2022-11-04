var global_variable=300;
function outer() {

    let outer_fun_var=100;
    // console.log(outer_fun_var);
   let ineer_fun= function(){
        let ineer_fun_var=200;
        console.log(ineer_fun_var,outer_fun_var,global_variable);
    }
    return ineer_fun;
}
let ret=outer();
// console.log(ret);
ret();

