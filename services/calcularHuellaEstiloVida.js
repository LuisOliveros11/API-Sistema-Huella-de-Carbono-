const CODIGOS_SUMA = [
    'EstVida_01', 'EstVida_04', 'EstVida_06', 'EstVida_08',  
];

const CODIGOS_HABITOS = [
    'EstVida_02', 'EstVida_03', 'EstVida_05', 'EstVida_07', 'EstVida_09' , 'EstVida_10' 
];

function mapResponsesByCode(responses) {
    const map = {};
    for (const r of responses || []) {
        if (!r || typeof r.code === 'undefined') continue;
        map[r.code] = r;
    }
    return map;
}

function calcularHuellaEstiloVida(responses) {
    if (!Array.isArray(responses)) {
        throw new Error('responses debe ser un array');
    }

    const byCode = mapResponsesByCode(responses);

    let sumaTotal = 0;
    let huellaLuz = byCode['EstVida_01'].value;
    let huellaDuchas =  byCode['EstVida_04'].value;
    let huellaRopaNueva = byCode['EstVida_06'].value;
    let huellaElectrodomesticos = byCode['EstVida_08'].value; 

    const detalles = [];
    
    for (const code of CODIGOS_SUMA) {
        const respuesta = byCode[code];
        const raw = respuesta?.value ?? 0;
        const valor = Number(raw);

        if (respuesta && Number.isNaN(valor)) {
            detalles.push({ code, contribution: 0, note: 'valor inválido' });
            continue;
        }

        if (respuesta) {
            detalles.push({ code, contribution: Number(valor.toFixed(4)), note: 'suma' });
        } else {
            detalles.push({ code, contribution: 0, note: 'no respondido' });
        }
    }

    for (const multCode of CODIGOS_HABITOS) {
        const respuesta = byCode[multCode];
        if (!respuesta) continue;

        detalles.push({
            code: multCode,
            contribution: respuesta.value,
            note: `Calificacion de habito para la pregunta`
        });
    }

    sumaTotal = huellaLuz + huellaDuchas + huellaRopaNueva + huellaElectrodomesticos;

    return {
        total_kgCO2e: Number(sumaTotal.toFixed(2)),
        detalles
    };
}

module.exports = { calcularHuellaEstiloVida };