// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);


function destructivelyAppendCat() {
    cats.push("Ralph");
}
console.log(cats);


function destructivelyPrependCat() {
    cats.unshift("Bob");
}
console.log(cats);


function destructivelyRemoveLastCat() {
    cats.pop();
}
console.log(cats);


function destructivelyRemoveFirstCat() {
    cats.shift();
}
console.log(cats);


const newCats1 = [...cats, "Broom"];
function appendCat() {
    return newCats1;
}
console.log(newCats1);


const newCats2 = ["Arnold", ...cats];
function prependCat() {
    return newCats2;
}
console.log(newCats2);


const newCats3 = cats.slice(0, 2);
function removeLastCat() {
    return newCats3;
}
console.log(newCats3);


const newCats4 = cats.slice(1, 3);
function removeFirstCat() {
    return newCats4;
}
console.log(newCats4);

