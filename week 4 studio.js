


function pascal(a, b){
    return a <= 1
    ? 1
    :a < b 
    ? 1
    :b === 0
    ? 1 
    : pascal(a - 1, b - 1) + pascal(a - 1, b + 1);
}
pascal(4, 3);


/* higher order function 
const x = () => x; zero parameter 
x = x => y => y; return a lambda function 

can the function have the same name as the parameter? */

function x(x){
    return x;
}
// return the parameter x 

function x(y){
    function x(y){
        return x;
    }
}
// return undefined, this nothing returned 
// always return the name (function/parameter) in the closed surrounding 
// declaration 

const x = x => x => x; 
x(2)(1)
return function 2 which return function 1, hence return 1 




const thrice = f => repeated(f, 3);

/*ff(x) is still consider deferred operation, need to call 
function twice */

