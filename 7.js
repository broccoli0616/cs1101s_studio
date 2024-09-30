/*function remove_duplicate(xs){
    return is_null(xs)
           ? null 
           : is_null(member(head(xs), tail(xs)))
           ? pair(head(xs), remove_duplicate(tail(xs)))
           : remove_duplicate(tail(xs));
}

remove_duplicate(list(1, 2, 3, 2, 1, 3, 5));*/

/*function subsets(xs){
    return is_null(xs)
           ? list(null)
           :append(map(x => pair(head(xs) , x), subsets(tail(xs))), subsets(tail(xs)));
}
subsets(list(1, 2, 3, 4)); */

function permutation(xs){
    return is_null(xs)
           ? list(null)
           :accumulate(append, null, map(x => map(s => pair(x, s), permutation(remove(x, xs))), xs));
}

permutation(list(1, 2, 3)); 

