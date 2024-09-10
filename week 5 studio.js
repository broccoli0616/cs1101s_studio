/*function every_second(items){
     function helper(item, n){
         return n === length(items) // n > length(items) - 1, if n > length(items), will return consequent
                ? null
                : pair(list_ref(items, n), helper(items, n + 2));
     }
    
    return helper(items, 1);
}

every_second(list(1, 2, 3, 4, 5, 7, 8, 10)); 

alternative way 
function every_second(items){
    return (is_null(items) || is_null(tail(items)))
        ? null 
        : pair(head(tail(items)), every_second(tail(tail(items)));
} */

/*const lst = list(7, list(6, 5, 4), 3, list(2, 1));

head(tail(head(tail(tail(tail(lst)))))); 


const lst = list(list(7), list(6, 5, 4), list(3, 2), 1);

head(tail(tail(tail(lst)))); 


 const lst = list(7, list(6), list(5, list(4)), list(3, list(2, list(1))));

head(head(tail(head(tail(head(tail(tail(tail(lst))))))))); 


const lst = list(7, list(list(6, 5), list(4), 3, 2), list(list(1)));
head(head(head(tail(tail(lst))))); 




draw_data(list(list(7), list(6, 5, 4), list(3, 2), 1));
//display_list
//display */


function every_even(items){
     function helper(item, n){
         return n > length(items) - 1
                ? null
                : pair(list_ref(items, n), helper(items, n + 2));
     }
    
    return helper(items, 0);
}

function every_odd(items){
     function helper(item, n){
         return n > length(items) - 1// n > length(items) - 1, if n > length(items), will return consequent
                ? null
                : pair(list_ref(items, n), helper(items, n + 2));
     }
    
    return helper(items, 1);
}

function sum_value(items){
    return is_null(items)
           ? 0
           : head(items) + sum_value(tail(items));
}

function sum(items){
    return list(sum_value(every_even(items)), sum_value(every_odd(items)));
    
}

sum(list(2, 3, 4, 5, 1));






































































































































