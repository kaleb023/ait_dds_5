'use strict';

function abreviaInstrutor(nomeInstrutor){
    const instrutor = new String(nomeInstrutor); 

    const instru = (instrutor.split(' ')[0] +' '+ [instrutor.split(' ')[3]]);


    return instru;
}

export default abreviaInstrutor;