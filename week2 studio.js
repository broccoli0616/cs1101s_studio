
function biggie_size(x)
{
    return  x + 4; 
}

biggie_size(2);



function unbiggie_size(x)
{
    return  x - 4; 
}

unbiggie_size(8);

function is_biggie_size(x)
{
    return x > 4 ? true : false; 
}

is_biggie_size(6);


function combo_price(x)
{
    return x > 4 ? 1.7 * x + 0.5 : 1.7 * x;
}
combo_price(5);


function empty_order() {
    return 0; 
}
empty_order();


function add_to_order