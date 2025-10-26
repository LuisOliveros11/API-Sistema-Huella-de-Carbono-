const CODIGOS_SUMA = [
    'Transporte_05', 'Transporte_06', 'Transporte_08', 'Transporte_12',  
];
const CODIGOS_TRUEFALSE = [
    'Transporte_01', 'Transporte_10', 
];
const CODIGOS_MULTIPLICACION = [
    'Transporte_02', 'Transporte_03', 'Transporte_04', 'Transporte_11'
];
const CODIGOS_HABITOS = [
    'Transporte_07', 'Transporte_09', 
];

function mapResponsesByCode(responses) {
    const map = {};
    for (const r of responses || []) {
        if (!r || typeof r.code === 'undefined') continue;
        map[r.code] = r;
    }
    return map;
}

function calcularHuellaTransporte(responses) {
    if (!Array.isArray(responses)) {
        throw new Error('responses debe ser un array');
    }

    const byCode = mapResponsesByCode(responses);

    let sumaTotal = 0;
    let gasolinaKm = byCode['Transporte_02'].value * byCode['Transporte_03'].value;
    let huellaKm = 0;
    let huellaTransportePublico =  byCode['Transporte_06'].value;
    let huellaViajesLargos = 0;
    let huellaViajeAvion = 0; 

    const detalles = [];

    if(byCode['Transporte_04'].value === null){
        byCode['Transporte_04'].value = gasolinaKm;
    };

    huellaKm = byCode['Transporte_05'].value * byCode['Transporte_04'].value * 24;

    if(byCode['Transporte_02'].value != 0){
        huellaViajesLargos = gasolinaKm * 300 * byCode['Transporte_08'].value;
    }else{
        huellaViajesLargos = 0.197 * 300 * byCode['Transporte_08'].value;
    };

    huellaViajeAvion =  (byCode['Transporte_12'].value * byCode['Transporte_11'].value) / 12; 
    
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

    for (const multCode of CODIGOS_MULTIPLICACION) {
        const respuesta = byCode[multCode];
        if (!respuesta) continue;

        const rawMult = respuesta.value;
        const multiplier = Number(rawMult);

        if (Number.isNaN(multiplier) || multiplier === 0) {
            detalles.push({ code: multCode, multiplier: rawMult, contribution: 0, note: 'multiplicador inválido/ignorado' });
            continue;
        }

        if (multiplier === 1) {
            detalles.push({ code: multCode, multiplier, contribution: Number(sumaTotal.toFixed(4)), note: 'multiplicador x1 (sin efecto)' });
            continue;
        }

        detalles.push({
            code: multCode,
            multiplier,
            contribution: Number(sumaTotal.toFixed(4)),
            note: `subtotal después de multiplicar x${multiplier}`
        });
    }

    for (const multCode of CODIGOS_TRUEFALSE) {
        const respuesta = byCode[multCode];
        if (!respuesta) continue;

        detalles.push({
            code: multCode,
            contribution: respuesta.value,
            note: `Respuesta enviada por el usuario`
        });
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

    sumaTotal = huellaKm + huellaTransportePublico + huellaViajesLargos + huellaViajeAvion;

    return {
        total_kgCO2e: Number(sumaTotal.toFixed(2)),
        detalles
    };
}

module.exports = { calcularHuellaTransporte };