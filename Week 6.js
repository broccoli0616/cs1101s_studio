function my_map(f, xs){
    return accumulate((x, ys) => pair(f(x), ys), null, xs);
}

my_map(x => x + 1, list(1, 2, 3)); 

function remove_duplicates(xs){
    return is_null(xs)
           ? null 
           : pair(head(xs), remove_duplicates(filter(element => element !== head(xs), tail(xs))));
} 

display(remove_duplicates(list(1, 2, 3, 4, 3, 4, 1))); 

function remove_duplicates(xs){
    return accumulate(pair(head(xs), ((x, ys) => filter((element => element !== x), ys))), null, xs);
} 

display(remove_duplicates(list(1, 2, 3, 4, 3, 4, 1)));
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
// list(1, 10, 5, 1, 5)) */


/*const sum = list => accumulate((x, ys) => x + ys, 0, list);
const list_of_interval = list(2, 2, 1, 2, 2, 2, 1, -1, -2, -2, -2, -1, -2, -2);
const reverse_list = reverse(list_of_interval); // list 
    function partial_list(reverse_list){
        return is_null(reverse_list)
               ? null
               : pair(60 + sum(reverse_list), 60);
    }
display(partial_list); */
/*function generate_list_of_note(list_of_interval) {
   // const x = letter_name_to_midi_note(letter_name); //number
    const sum = list => accumulate((x, ys) => x + ys, 0, list);
    const reverse_list = reverse(list_of_interval); // list 
    function partial_list(reverse_list){
        return is_null(reverse_list)
               ? null
               : pair(60 + sum(reverse_list), 60);
    }
    return pair(60, reverse(partial_list));
}
display(generate_list_of_note(list(2, 2, 1, 2, 2, 2, 1, -1, -2, -2, -2, -1, -2, -2)));*/ 

//const major_scale_interval = list(2, 2, 1, 2, 2, 2, 1, -1, -2, -2, -2, -1, -2, -2);
//const c_major_scale = generate_list_of_note("C4", major_scale_interval);

//display(c_major_scale);