'use strict';

function abreviaUni(uniCurri){
    const unidade_curricular = new String(uniCurri);

    const uni = (uniCurri.split('')[0]+uniCurri.split('')[1]+uniCurri.split('')[2]+uniCurri.split('')[3] + '.' + uniCurri.split(' ')[3])
    return uni;

}

export default abreviaUni;