'use strict';

import abreviaHora from "./abreviaHora.js";
import abreviaInstrutor from "./abreviaInstrutor.js";
import abreviaTurma from "./abreviaTurma.js";
import abreviaUni from "./abreviaUni.js";

let aulas = [
    {
        "id": 1300,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:00:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "EMP-NBM-03",
        "instrutor": "JOEL HERBERT BARBOSA SILVA",
        "unidade_curricular": "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
        "ambiente": "VTRIA-3-SALA-3004",
        "chave": null
    },
    {
        "id": 1280,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:00:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "UMO-MBMM-03",
        "instrutor": "THADEU VASCONCELOS DA SILVA GOMES",
        "unidade_curricular": "MECÂNICA BÁSICA DE MOTORES DE MOTOCICLETAS (CH: 100.0000)",
        "ambiente": "VTRIA-EXTER-EXTERNO",
        "chave": null
    },
    {
        "id": 1326,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:30:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "HTC-MEC-4-92",
        "instrutor": "AFONSO DE JESUS CORDEIRO",
        "unidade_curricular": "DESENVOLVIMENTO DE SISTEMAS DE AUTOMAÇÃO MECÂNICA (CH: 100.0000)",
        "ambiente": "VTRIA-3-LAB-3003",
        "chave": null
    }
];

const tabela_aulas = document.getElementById('tabela');

let linhas = '';

for (let aula of aulas){
    //console.log(abreviaHora(aula.data_hora_inicio));
    linhas += '<tr>';
    linhas += '<td>'+abreviaHora(aula.data_hora_inicio)+'</td>';
    linhas += '<td>'+abreviaHora(aula.data_hora_fim)+'</td>';
    linhas += '<td>'+abreviaTurma(aula.turma)+'</td>';
    linhas += '<td>'+abreviaInstrutor(aula.instrutor)+'</td>';
    linhas += '<td>'+abreviaUni(aula.unidade_curricular)+'</td>';
    linhas += '</tr>';
    
    
};

tabela_aulas.innerHTML += linhas;