
function make_optimized_search(A) {
    let B = [];
    for(let i = 0; i < array_length(A); i = i + 1) {
         B[A[i]] = A[i];
    }
    return x => { return is_undefined(B[x])
                         ? false
                         : true; };
}
const my_array = [3,41,20,1,5,16,4,0,14,6,17,8,4,0,2]; // length n
const my_search = make_optimized_search(my_array);
my_search(14); // returns true
//my_search(30); // returns false

//run time 
//1) n * n; n; 
//2) n * n 


function bubblesort_list(L) {
  const len = length(L);

  for (let i = len - 1; i >= 1; i = i - 1) {
    let xs = L;
    for (let j = 0; j < i; j = j + 1) { // counter 
      if (head(xs) > head(tail(xs))) {
        const temp = head(xs);
        set_head(xs, head(tail(xs)));
        set_head(tail(xs), temp);
      }
      xs = tail(xs);
    }
  }
  return L; // only set_head mutate the data 
}


















