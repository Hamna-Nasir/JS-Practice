// Immediately Invoked Function Experssions (IIFE)
(function Chai(){
    // named IIFE
    console.log(`DB Connected`);
})();
((name) => {
    console.log(`DB Connected Two ${name}`)
})("Hamna")
