const CODIGOS_SUMA = [
    'Alimentos_01', 'Alimentos_02', 'Alimentos_03', 'Alimentos_04', 'Alimentos_05',
    'Alimentos_06', 'Alimentos_07', 'Alimentos_09'
];
const CODIGOS_MULTIPLICACION = [
    'Alimentos_08', 'Alimentos_10'
];

function mapResponsesByCode(responses) {
    const map = {};
    for (const r of responses || []) {
        if (!r || typeof r.code === 'undefined') continue;
        map[r.code] = r;
    }
    return map;
}

function calcularHuellaAlimentos(responses) {
    if (!Array.isArray(responses)) {
        throw new Error('responses debe ser un array');
    }

    const byCode = mapResponsesByCode(responses);

    let sumaTotal = 0;
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
            sumaTotal += valor;
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

        sumaTotal = sumaTotal * multiplier;
        detalles.push({
            code: multCode,
            multiplier,
            contribution: Number(sumaTotal.toFixed(4)), 
            note: `subtotal después de multiplicar x${multiplier}`
        });
    }

    return {
        total_kgCO2e: Number(sumaTotal.toFixed(2)),
        detalles
    };
}

module.exports = { calcularHuellaAlimentos };