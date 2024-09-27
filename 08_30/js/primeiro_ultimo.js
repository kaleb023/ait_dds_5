'use strict';

let nome = 'Daniel';

let sobrenome = 'Kaleb';

const instrutor = 'GREGORY VELOSO SILVA';

const pieces = instrutor.split(' ');

//pop remove e retorna o ultimo elemento
console.log(pieces[0],pieces.pop());

console.log(pieces[0],pieces[pieces.length-1]);

let array = [1,2,3,4,5,6];

//push empurra ao final do array
array.push(7);

//shift remove e retorna o primeiro
console.log(array.shift());
console.log(array);

//unshift adiciona na primeira posição
array.unshift(0);
console.log(array); 

let cores = ['rosa','verde','roxo','vermelho','azul'];

for(let i = 0; i < cores.length; i++){
    console.log(cores[i]);
}

