


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
