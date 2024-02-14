// Arrays Creation and ReadonlyArray

let numeros:number[] = [20,30,40];
let numreros:Array<number> = [10,20]
let numeross:(number)[] = [20,30,40]
let numeros_ro:ReadonlyArray<number>= [10, 20, 30, 40]; // Prevents changes to the array

numeros.push(300); // adds value
numeros.unshift(400); // adds value at the beginnigs

numeros.pop(); // Remove the last element from the array
numeros.shift(); // Remove the first element from de array

console.log(numeros);

