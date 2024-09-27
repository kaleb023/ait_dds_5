'use strich';

let municipios = ['serra', 'vitoria', 'cariacica', 'vila velha','guarapari','viana'];

console.log(municipios[0].toUpperCase());

console.log(municipios);

//removendo dois elementos a partir do elemento 1
municipios.splice(0,2);
console.log(municipios);

//removendo dois elementos no final
municipios.splice(-1,1);
console.log(municipios);

//para juntar um array usamos o join e podemos definir um separador
let texto = municipios.join();
console.log(texto);