function my_map(f, xs){
    return accumulate((x, ys) => pair(f(x), ys), null, xs);
}

my_map(x => x + 1, list(1, 2, 3));

function remove_duplicates(xs){
    return accumulate(((x, ys) => filter(element !== x ), ys), null, xs);
} 

function makeup_amount(x, coins) {
if (x === 0) {
return list(null);
} else if (x < 0 || is_null(coins)) {
return null;
} else {
// Combinations that do not use the head coin.
const combi_A = makeup_amount(x, tail(coins)); // list of list 
// Combinations that do not use the head coin
// for the remaining amount.
const combi_B = makeup_amount(x - head(coins), tail(coins)); // list of list
// Combinations that use the head coin.
const combi_C = map(tree => pair((head(coins)), tree), combi_B);
return append(combi_A, combi_C);
}
}
// wishful thinking, assume makeup_up amount will 
//return the tree (list of different combi)

makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50));
// Result: list(list(20, 1, 1), list(10, 5, 1, 5, 1), list(1, 20, 1),
// list(1, 20, 1), list(1, 10, 5, 5, 1),
// list(1, 10, 5, 1, 5))
