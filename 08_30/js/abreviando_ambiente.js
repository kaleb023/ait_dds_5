'use strict';

const ambientes = [
    'VTRIA-3-SALA-3004',
    'VTRIA-EXTER-EXTERNO',
    'VTRIA-5-LAB-5022'
];

for(let i = 0; i < ambientes.length; i++){
    const painel = ambientes[i].split('-');
    painel.splice(0,2);
    console.log(painel.join('-'));
}