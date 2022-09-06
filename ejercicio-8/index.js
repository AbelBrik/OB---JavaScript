function sayTrue(){ return true };
setTimeout(() => console.log("Hola soy una promesa"), 5000);

function* idEvenGenerated(){
    let i = 0;
    while (true) {
        yield i += 2;
    }
}

// const gen = idEvenGenerated();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);


