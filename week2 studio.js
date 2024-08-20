
function biggie_size(x){
    return  x + 4; 
}

biggie_size(2);
// show is only for runes, use display function to show 
// all the functions step by step 



function unbiggie_size(x){
    return  x - 4; 
}

unbiggie_size(8);

function is_biggie_size(x){
    return x > 4 ? true : false; 
    // predicate can return true/ false itself,there is no 
    //need to add consequent/ alternate 
}

is_biggie_size(6);


function combo_price(x){
    return x > 4 ? 1.7 * x + 0.5 : 1.7 * x;
}
combo_price(5);


function empty_order() {
    return 0; 
}
empty_order();


function add_to_order(x, y){
    return 10 * x + y;
}
add_to_order(1, 8);


 function last_combo(x){
     return x % 10;
     // %: The remainder ( % ) operator returns the remainder 
     //left over when one operand is divided by a second operand
 }

last_combo(329);


/*function other_combos(x){
    return x / 10 - last_combo(x) / 10; 
}

other_combos(345);*/

function other_combos(x){
    return math_floor( x / 10);
}
other_combos(345);

// "primitave" operation is like functions
// programs: anything ends with ;
// operators: ! not, === equal  || or; && and
// predicate 
// naming ; have declared a constant, cannot change its value 
// math library: math_floor math_ceil 

/*function x(y){
    return x; 
} the function will be returned */


/* challenge: convert the following return statement into 
conditional expression assume a and b are boolean values 
function f(a, b){
    return a || b; whatever is true 
}












