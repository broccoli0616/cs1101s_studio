/*import {stack, beside, blank, square, heart, show} from "rune";
/*function f2(rune, n){
    return n === 0
    ? rune 
    : stack(beside(blank, f2(rune, n - 1)), square);
}

show(f2(heart, 2));*/

/*function f1(rune_1, n, rune_2) {
    return n === 0
           ? rune_2
           : f1(rune_1, n - 1, beside(rune_1, stack(blank, rune_2)));
}
show(f1(square, 3, heart));  */

/* style guide 
- new line 
  when your code approach the vertical gray bar 
 - indentation 
 - argument in the same functon should start with the same line 
 
2. substitution model 
3. recursion 
4. order of growth 
- O: worst case 
_ omega: best case  */


import {square, circle, ribbon, blank, beside, stack, show, 
beside_frac,stack_frac} from "rune";
function bottom_right(rune){
    return beside(stack(circle, square), stack(blank, rune));
}
function moony_1(rune1){
    return bottom_right(rune1);
}

function moony_2(n){
    return n - 1 === 0 
    ? circle 
    : beside(stack(circle, square), stack(blank, moony_2(n - 1)));
}


function moony(n){
    return n - 1 === 0 
    ? circle 
    : beside_frac((1 / n),
                 stack_frac(1 / n, circle, square), 
                 stack_frac(1 / n, blank, moony(n - 1)));
}


show(moony(5));



    
