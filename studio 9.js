/*function d_filter(pred, xs) {
    if(is_null(xs)){
        return null;
    }else
        if(pred(head(xs))){
          set_tail(xs, d_filter(pred, tail(xs)));
          return xs;
        }else{
         return d_filter(pred, tail(xs));
         // return xs; just return whatever is passed in 
          
        }
    
}

const L = list(1, 2, 3, 4, 5, 6, 7, 8, 9, 11);
d_filter(x => x % 2 === 0, L); // returns [2, [4, [6, [8, null]]]]
L; // What is L now?
// first element fail the condition  */

function count_pairs(x){
    let counted_pairs = null;
    function check(y) {
    if (is_pair(y) && is_null(member(y, counted_pairs)){
        counted_pairs = pair(y, counted_pairs);
        check(head(y));
        check(tail(y));
    }
}
 check(x);
 length(counted_pairs);
}








