'use strict';

const instrutores = [
    'ANNA JULYA DOS SANTOS DA SILVA',
    'ISAAC LUCCA DE PAULA BARBARA',
    'MATHEUS SARTI BRUNELLI',
    'SARAH MONTEIRO DUQUE',
    'DEIVID GUIMARAES GONÇALVES SILVA',
    'HELOISA RANGEL GUIMARAES',
    'MARCOS ANTONIO SANTOS MEDEIROS',
    'PIETRO GABRIEL HERINGER MENEZES',
    'DANIEL KALEB DE OLIVEIRA ALVES MOREIRA',
    'AMANDA XAVIER NASCIMENTO',
    'VITOR VARGAS PARAJARA',
    'SAMARA DA SILVA RIBEIRO',
    'AYMAR ANTONIO SILVA',
    'JOAO PEDRO COSTA SILVA',
    'GABRIEL DE ASSIS SPERANDIO'    
];


for (let i = 0; i < instrutores.length; i++){
    console.log(instrutores[i].split(' ')[0],instrutores[i].split(' ')[instrutores[i].split(' ').length-1] );  
}