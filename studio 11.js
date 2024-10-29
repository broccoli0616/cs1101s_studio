
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
// the creation of undefined B[] takes time also 
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



// time complexity mchoose O(nk)
/* for (let i = 7; i > k; i = i -1 ){
    for (let j = k; j > 0; j = j - 1){
        
    }
} */
// run time will be always more than or equal to the space, because there 
// is time to create the space 

function m_cc(amount, kinds_of_coins){
    function first_denomination(kinds_of_coins) {
          return kinds_of_coins === 1 ? 5 :
                 kinds_of_coins === 2 ? 10 :
                 kinds_of_coins === 3 ? 20 :
                 kinds_of_coins === 4 ? 50 :
                kinds_of_coins === 5 ? 100 : 0;
    let mem = [];
    let x = amount; 
    let y = kinds_of_coins;
    for(let i = x; i > 0; i = i - 1){
     mem[x] = [];
    for(let j = y; j > 0; j = j - 1){
    if(mem[x][y] !== undefined){
       return mem[x][y];
        }else{
              const result = x === 0
                             ? 1
                             : x < 0 || y === 0
                             ? 0
                             : m_cc(x, y - 1)
                             +
                              m_cc(x - first_denomination(y), y);
                   write(x, y, result);
               return result;
      }
        
    function write(x,y,value) {
    if (mem[x] === undefined) {
        mem[x] = [];
    }else { }
     mem[x][y] = value;
 }
}
}
}
}
m_cc(100, 5);




/*function two_d_memoize(f){
    const mem = [];
    let x = amount;
    let y = kinds_of_coins;
    function read(x,y){
       return (mem[x] === undefined)
               ?undefined
               :mem[x][y];
     }
    function write(x,y,value) {
    if (mem[x] === undefined) {
        mem[x] = [];
    }else { }
     mem[x][y] = value;
 }
    function mf(x,y){
       const mem_xy = read(x,y);
       if (mem_xy !== undefined) {
           return mem_xy;
        }else {
     const result = f(x,y);
     write(x,y,result);
     return result;
    }
 }return mf;
}
const memoed = two_d_memoize(cc)(amount, kinds_of_coins);
return memoed;
}

m_cc(5, 5); */






