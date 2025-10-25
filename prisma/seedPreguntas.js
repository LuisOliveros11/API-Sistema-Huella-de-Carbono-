const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const preguntas = [
    { codigo: 'Alimentos_01', texto: '¿Con qué frecuencia consumes carne roja (res, cordero, cerdo)?', categoria: 'Alimentos' },
    { codigo: 'Alimentos_02', texto: '¿Con qué frecuencia consumes pollo o pavo?', categoria: 'Alimentos' },
    { codigo: 'Alimentos_03', texto: '¿Con qué frecuencia consumes pescado o mariscos?', categoria: 'Alimentos' },
    { codigo: 'Alimentos_04', texto: '¿Con qué frecuencia consumes productos lácteos (leche, queso, yogur)?', categoria: 'Alimentos' },
    { codigo: 'Alimentos_05', texto: '¿Cuánta comida de origen vegetal (frutas, verduras, legumbres, granos integrales) consumes?', categoria: 'Alimentos' },
    { codigo: 'Alimentos_06', texto: '¿Qué proporción de tus comidas son preparadas en casa frente a comida para llevar/restaurant?', categoria: 'Alimentos' },
    { codigo: 'Alimentos_07', texto: '¿Qué porcentaje aproximado de tus alimentos son procesados o ultraprocesados (comida rápida, snacks industriales)?', categoria: 'Alimentos' },
    { codigo: 'Alimentos_08', texto: '¿Compras principalmente alimentos locales/estacionales o importados/ fuera de temporada?', categoria: 'Alimentos' },
    { codigo: 'Alimentos_09', texto: '¿Con qué frecuencia desperdicias comida en casa (sobras que se tiran)?', categoria: 'Alimentos' },
    { codigo: 'Alimentos_10', texto: '¿Consumes productos orgánicos con frecuencia (si/no)?', categoria: 'Alimentos' },

    { codigo: 'Transporte_01', texto: '¿Tienes vehículo propio?', categoria: 'Transporte' },
    { codigo: 'Transporte_02', texto: 'Si usas automóvil, ¿qué tipo de combustible utiliza?', categoria: 'Transporte' },
    { codigo: 'Transporte_03', texto: '¿Tu vehículo (si tienes) es de qué antigüedad aproximada?', categoria: 'Transporte' },
    { codigo: 'Transporte_04', texto: '¿Cuál es tu modo de transporte principal para ir al trabajo/estudios?', categoria: 'Transporte' },
    { codigo: 'Transporte_05', texto: '¿Cuántos kilómetros (ida y vuelta) recorres al día para tu desplazamiento habitual?', categoria: 'Transporte' },
    { codigo: 'Transporte_06', texto: '¿Con qué frecuencia usas transporte público en la semana (sumando todos los viajes)?', categoria: 'Transporte' },
    { codigo: 'Transporte_07', texto: '¿Sueles compartir vehículo (Uber, Didi, etc) o viajas solo en el automóvil?', categoria: 'Transporte' },
    { codigo: 'Transporte_08', texto: '¿Con qué frecuencia realizas viajes largos en auto (fines de semana/escapadas) por mes?', categoria: 'Transporte' },
    { codigo: 'Transporte_09', texto: 'Para distancias cortas (<5 km), ¿qué eliges normalmente?', categoria: 'Transporte' },
    { codigo: 'Transporte_10', texto: '¿Has tomado vuelos nacionales o internacionales en el último año?', categoria: 'Transporte' },
    { codigo: 'Transporte_11', texto: '¿Cuánto tiempo duró ese vuelo?', categoria: 'Transporte' },
    { codigo: 'Transporte_12', texto: '¿Con qué frecuencia realizas vuelos nacionales o internacionales al año?', categoria: 'Transporte' },

    { codigo: 'EstVida_01', texto: '¿Cuánto pagas aproximadamente de luz cada mes?', categoria: 'Estilo de vida' },
    { codigo: 'EstVida_02', texto: '¿Tu vivienda usa calefacción o aire acondicionado con frecuencia?', categoria: 'Estilo de vida' },
    { codigo: 'EstVida_03', texto: '¿Utilizas energías renovables (paneles solares, proveedor verde) en tu hogar?', categoria: 'Estilo de vida' },
    { codigo: 'EstVida_04', texto: '¿Cuántas duchas de 5–10 minutos tomas al día en promedio?', categoria: 'Estilo de vida' },
    { codigo: 'EstVida_05', texto: '¿Reciclas y separas residuos en tu hogar con regularidad?', categoria: 'Estilo de vida' },
    { codigo: 'EstVida_06', texto: '¿Con qué frecuencia compras ropa nueva?', categoria: 'Estilo de vida' },
    { codigo: 'EstVida_07', texto: '¿Qué tan seguido realizas mantenimiento para eficiencia energética en tu hogar (aislamiento, sellado, bombillas LED)?', categoria: 'Estilo de vida' },
    { codigo: 'EstVida_08', texto: '¿Con qué frecuencia compras productos nuevos (electrónicos, electrodomésticos) en un año?', categoria: 'Estilo de vida' },
    { codigo: 'EstVida_09', texto: '¿Trabajas desde casa (HomeOffice) cuántos días a la semana en promedio?', categoria: 'Estilo de vida' },
    { codigo: 'EstVida_10', texto: '¿Participas activamente en prácticas de consumo responsable (segunda mano, reparar antes de reemplazar, préstamos/trueque)?', categoria: 'Estilo de vida' }
  ]

  const result = await prisma.pregunta.createMany({
    data: preguntas,
    skipDuplicates: true
  })

  console.log(`Seed ejecutado: ${result.count} preguntas creadas (o ignoradas si ya existían).`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
