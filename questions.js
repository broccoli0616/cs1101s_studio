//questions 

/*"Expected string or number on left 
hand side of operation, got boolean."" ?? */

function three_quarters(pt) {
    return t => {
        if (3/4 < t < 1){
           return 0;
        } else {
        const p = make_point(math_cos(2 * math_PI * t),
                             math_sin(2 * math_PI * t));
        return make_point(x_of(p) + x_of(pt), 
                          y_of(p) + x_of(pt));
  }
};
}


/*" identifier p have alr been declared" */

const pair = (x, y) => f => f(x, y);

const head = p => p((x, y) => x);  // complete lambda expression
const tail = p => p((x, y) => y);  // complete lambda expression

head(pair(1, 2)) === 1; // should return true
tail(pair(1, 2)) === 2; // should return true 

const pair = (x, y) => f => f(x, y);
function head(p){
    function p(x, y){
        return x;
    }
    return p;
}
head(pair(1, 2));

/* can make more complex sound by adding more waves together*/
const C_maj_chord_wave =
t => 0.33 * math_sin(2 * math_PI * 261.63 * t) + // C4
0.33 * math_sin(2 * math_PI * 329.63 * t) + // E4
0.33 * math_sin(2 * math_PI * 392.00 * t); // G4
const C_maj_chord = make_sound(C_maj_chord_wave, 1.5);
play(C_maj_chord);

const doremi_wave =
t => t < 0.5
? math_sin(2 * math_PI * 261.63 * t) // C4
: t < 1.0
? math_sin(2 * math_PI * 293.66 * t) // D4
: math_sin(2 * math_PI * 329.63 * t); // E4
const doremi = make_sound(doremi_wave, 1.5);
play(doremi);
// 3 tones connected one after each other ? 





