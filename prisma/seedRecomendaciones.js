// prisma/seed_recomendaciones_actualizado.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const recomendaciones = [
        {
            titulo: 'Reducir carne roja',
            descripcion: `A todos nos gusta la comida con carne. Sin embargo, considera reducir la carne de res a 1–2 porciones pequeñas por semana; sustituye una comida por frijoles, lentejas o guisos con champiñones (Saben muy ricas también). Compra legumbres a granel en el Mercado Bravo y cocina en olla a presión para ahorrar gas.`,
            categoria: 'Alimentos',
            dificultad: 'Media',
            preguntaCodigo: 'Alimentos_01',
            limite: '213.4',
            operador: '>=',
            activo: true
        },
        {
            titulo: 'Reduce el consumo de pollo fresco y aprovechar sobras',
            descripcion: `Hay que reducir el consumo de pollo. Prioriza comprar pollo fresco de mercados locales (Bravo, Madero) y cocina piezas enteras para aprovechar sobras (ensaladas, tacos) y reducir desperdicio (Es imposible saber cuántas recetas con pollo o pavo se pueden hacer, esto dice mucho de su amplia versatilidad). Evita productos empacados industrialmente, los productos de mercado suelen ser más frescos y baratos.`,
            categoria: 'Alimentos',
            dificultad: 'Media',
            preguntaCodigo: 'Alimentos_02',
            limite: '18.2',
            operador: '>=',
            activo: true
        },
        {
            titulo: 'Preferir pescado local y de temporada',
            descripcion: `Vivimos en una zona penínsular y costera. Compra especies locales y abundantes (jurel, sierra) en el muelle o mercados municipales; pregunta por la pesca del día y evita especies sobreexplotadas (Esto además hará que el producto sea más barato y reducirá el impacto). Consume pescado 2–3 veces/semana en porciones moderadas.`,
            categoria: 'Alimentos',
            dificultad: 'Media',
            preguntaCodigo: 'Alimentos_03',
            limite: '13.4',
            operador: '>=',
            activo: true
        },
        {
            titulo: 'Reducir porciones de lácteos / alternativas caseras',
            descripcion: `Si los lácteos son algo vital para ti, prueba a reducir porciones y prepara alternativas vegetales caseras (la leche de avena y almendra son opciones muy ricas y nutritivas) con agua y 5 minutos de batido; así ahorras y disminuyes empaques. Compra insumos a granel en tiendas naturistas como lo son Tonantzin, Los Girasoles o El Show de la Salud.`,
            categoria: 'Alimentos',
            dificultad: 'Media',
            preguntaCodigo: 'Alimentos_04',
            limite: '27.9',
            operador: '>=',
            activo: true
        },
        {
            titulo: 'Comprar verduras/frutas/legumbres de temporada',
            descripcion: `Compra verduras, frutas o legumbres por temporada en tianguis y mercados locales; al aprovechar lo de temporada pagas menos y recibes productos más frescos. Congelar los excedentes para usar en meses secos es un life hack casero.`,
            categoria: 'Alimentos',
            dificultad: 'Baja',
            preguntaCodigo: 'Alimentos_05',
            limite: '11.312',
            operador: '<',
            activo: true
        },
        {
            titulo: 'Planifica comidas semanales',
            descripcion: `Salir a comer con amigos o familia es rico, sin embargo, hacer una preparación y planificación de tus comidas 1 día a la semana (3–4 raciones) y guardarla en envases reutilizable logrará que reduzcas los pedidos a domicilio, bajes emisiones y evites empaques.`,
            categoria: 'Alimentos',
            dificultad: 'Media',
            preguntaCodigo: 'Alimentos_06',
            limite: '112',
            operador: '>=',
            activo: true
        },
        {
            titulo: 'Elegir snacks caseros y comprar a granel',
            descripcion: `Todos botaneamos para ver televisión, una película o una serie, pero los snacks caseros son igual de ricos que los industriales. Frutos secos locales, semillas, nopales asados o chips de plátano hechos en casa son algunas opciones ricas y sencillas de hacer. Compra a granel en tiendas como La Jacaranda para ahorrar.`,
            categoria: 'Alimentos',
            dificultad: 'Baja',
            preguntaCodigo: 'Alimentos_07',
            limite: '26.9',
            operador: '>=',
            activo: true
        },
        {
            titulo: 'Priorizar local y estacional',
            descripcion: `Cuando no sepas qué comprar, pregunta al vendedor qué está de temporada o usa el calendario del MOA (calendario de productos de temporada calendario de productos de temporada); lo de temporada cuesta menos y tiene menos huella por transporte.`,
            categoria: 'Alimentos',
            dificultad: 'Media',
            preguntaCodigo: 'Alimentos_08',
            limite: '1.10',
            operador: '>=',
            activo: true
        },
        {
            titulo: 'Reducir desperdicio y compostar',
            descripcion: `La comida es algo valioso. Planea menús semanales, aprovecha sobras (sopas, tortas, huevos revueltos) y compostea restos en una lombricomposta o cubeta cerrada si no tienes jardín. De esta manera podemos aprovechar todo lo que generamos y reducimos nuestro impacto.`,
            categoria: 'Alimentos',
            dificultad: 'Media',
            preguntaCodigo: 'Alimentos_09',
            limite: '10',
            operador: '>=',
            activo: true
        },
        {
            titulo: 'Buscar productos orgánicos locales',
            descripcion: `Busca productores locales en ferias (MOA, ferias del centro) y prioriza orgánico para los productos que consumes más (Sabemos lo difícil que puede ser encontrar opciones orgánicas). Si no, lava y pela cuando no sea posible comprar orgánico.`,
            categoria: 'Alimentos',
            dificultad: 'Media',
            preguntaCodigo: 'Alimentos_10',
            limite: '0.105',
            operador: '<=',
            activo: true
        },

        {
            titulo: 'Mantenimiento básico del auto',
            descripcion: `Mantener llantas bien infladas y hacer afinaciones básicas es esencial; es barato y reduce el consumo (y la factura).`,
            categoria: 'Transporte',
            dificultad: 'Media',
            preguntaCodigo: 'Transporte_02',
            limite: '0.197',
            operador: '>=',
            activo: true
        },
        {
            titulo: 'Evitar horas pico',
            descripcion: `Si es posible, reorganiza bien tus horarios para evitar horas pico (sobre todo en las mañanas).`,
            categoria: 'Transporte',
            dificultad: 'Baja',
            preguntaCodigo: 'Transporte_04',
            limite: '0.011',
            operador: '<',
            activo: true
        },
        {
            titulo: 'Planificar rutas y combinar paradas',
            descripcion: `Haz un mapeo en tu zona y corrobora que lugares quedan de pasada en el trayecto que sueles recorrer (Supermercados, farmacias, bancos, etc). Esto ayudará a reducir salidas y de igual manera tus km diarios. Combina compras con actividades recreativas para economizar tiempos y combustible.`,
            categoria: 'Transporte',
            dificultad: 'Media',
            preguntaCodigo: 'Transporte_05',
            limite: '18',
            operador: '>=',
            activo: true
        },
        {
            titulo: 'Usar transporte público local',
            descripcion: `La ciudad de La Paz cuenta con una amplia ruta de autobuses para transporte público, ya sea que estes en la zona sur (Calafia, Camino Real, Olas Altas) o en la zona norte (Ciudad del cielo, Pedregal) de la ciudad, seguro hay un pecero que pasa cerca de tu destino.`,
            categoria: 'Transporte',
            dificultad: 'Media',
            preguntaCodigo: 'Transporte_06',
            limite: '1.96',
            operador: '<=',
            activo: true
        },
        {
            titulo: 'Organizar viajes compartidos',
            descripcion: `Organízate con amigos o compañeros de trabajo para viajar juntos en un mismo auto. Esto afectará directamente en tu bolsillo (Menos gastos si entre todos hacen una cooperación para gasolina), tiempo y emisión de contaminación.`,
            categoria: 'Transporte',
            dificultad: 'Baja',
            preguntaCodigo: 'Transporte_07',
            limite: '1',
            operador: '<=',
            activo: true
        },
        {
            titulo: 'Compartir coche en escapadas',
            descripcion: `A todos nos gusta visitar lugares emblemáticos de nuestro estado como Todos Santos o El Triunfo. Para esas ocasiones procura compartir coche y planificar paradas para descansar; dividir gasolina entre 3–4 personas baja significativamente la huella por pasajero.`,
            categoria: 'Transporte',
            dificultad: 'Baja',
            preguntaCodigo: 'Transporte_08',
            limite: '1',
            operador: '>=',
            activo: true
        },
        {
            titulo: 'Caminar o bicicleta para distancias cortas',
            descripcion: `A todos nos gusta la comodidad de viajar en carro, sin embargo, no siempre es necesario. Caminar o usar bici es la mejor opción tanto física como ecológicamente para distancias cortas. Cómodo en zonas planas y saludable. Guarda una mochila plegable para compras y protege tus pies con calzado cómodo.`,
            categoria: 'Transporte',
            dificultad: 'Baja',
            preguntaCodigo: 'Transporte_09',
            limite: '3',
            operador: '<=',
            activo: true
        },
        {
            titulo: 'Evaluar alternativas al avión',
            descripcion: `Viajar en avión es toda una experiencia, sin embargo, siempre es bueno evaluar alternativas en bus o coche compartido para destinos cercanos (Cabo, Loreto). Si vuelas, compensa el viaje con estancias más largas y menos trayectos (Así disfrutas más el viaje también).`,
            categoria: 'Transporte',
            dificultad: 'Alta',
            preguntaCodigo: 'Transporte_10',
            limite: '1',
            operador: '>=',
            activo: true
        },
        {
            titulo: 'Preferir vuelos directos',
            descripcion: `A nadie nos gusta las escalas o pasar muchas horas en aeropuertos. Siempre prefiere rutas directas y reserva con anticipación tus boletos para mejores tarifas y menos escalas; viajar directo reduce emisiones por pasajero.`,
            categoria: 'Transporte',
            dificultad: 'Alta',
            preguntaCodigo: 'Transporte_11',
            limite: '613.2',
            operador: '>=',
            activo: true
        },
        {
            titulo: 'Planear viajes menos frecuentes y más largos',
            descripcion: `Planea viajes menos frecuentes y más largos; usar vacaciones acumuladas para viajes extensos reduce emisiones anuales.`,
            categoria: 'Transporte',
            dificultad: 'Alta',
            preguntaCodigo: 'Transporte_12',
            limite: '1.5',
            operador: '>=',
            activo: true
        },

        {
            titulo: 'Reducir consumo eléctrico',
            descripcion: `La energía es algo que utilizamos para prácticamente todas nuestras actividades. Usar abanicos de techo o de pie y programar el aire cuando llegues a casa son medidas simples pero que reducen significativamente el gasto de luz (Aun más en nuestra ciudad). Apaga luces y dispositivos en habitaciones vacías (No dejes ese cargador conectado al enchufe sin estar conectado al teléfono). Cambia a LED y revisa el consumo con un medidor de enchufe barato.`,
            categoria: 'Estilo de vida',
            dificultad: 'Baja',
            preguntaCodigo: 'EstVida_01',
            limite: '170',
            operador: '>=',
            activo: true
        },
        {
            titulo: 'Mantener climatización',
            descripcion: `Todos sabemos que La Paz es una ciudad muy calurosa, sin embargo, no es necesario tener siempre encendido el aire en la habitación, con 20 o 30 minutos que lo prendas servirá para mantener el clima agradable. Dar un buen mantenimiento anualmente a nuestro aire acondicionado, limpiar filtros cada mes y usar cortinas para bloquear el calor en verano son acciones que también ayudan a mantener fresco y agradable el lugar donde nos encontramos.`,
            categoria: 'Estilo de vida',
            dificultad: 'Alta',
            preguntaCodigo: 'EstVida_02',
            limite: '3',
            operador: '<=',
            activo: true
        },
        {
            titulo: 'Empezar por energías renovables por etapas',
            descripcion: `Si te llama la atención la energía solar, empieza por kits pequeños (luces y carga de móvil) o infórmate sobre proyectos comunitarios; en La Paz el sol es algo que sobra casi todo el año, hay que saber aprovecharlo.`,
            categoria: 'Estilo de vida',
            dificultad: 'Alta',
            preguntaCodigo: 'EstVida_03',
            limite: '1',
            operador: '<=',
            activo: true
        },
        {
            titulo: 'Reducir tiempo de ducha',
            descripcion: `Si no puedes dejar de bañarte al menos dos veces al día, coloca un cabezal ahorrador y cronometra duchas a 5 minutos.`,
            categoria: 'Estilo de vida',
            dificultad: 'Baja',
            preguntaCodigo: 'EstVida_04',
            limite: '0.59',
            operador: '>=',
            activo: true
        },
        {
            titulo: 'Participar en reciclaje local',
            descripcion: `En nuestra ciudad hay muchos proyectos de reciclaje, por ejemplo, Ruta Cero. Separa en casa y lleva materiales a ferias como por ejemplo “Más Que Reciclar” o puntos de acopio; para residuos electrónicos usa campañas municipales o entrega en puntos especializados (No los deposites directamente en los contenedores de basura).`,
            categoria: 'Estilo de vida',
            dificultad: 'Baja',
            preguntaCodigo: 'EstVida_05',
            limite: '3',
            operador: '<=',
            activo: true
        },
        {
            titulo: 'Preferir segunda mano y reparación',
            descripcion: `A todos nos gusta cambiar de outfit constantemente, para esto no es necesario comprar ropa nueva.  Prefiere segunda mano, intercambios y arreglos. En La Paz existen muchas tiendas de saldos, tianguis o segundas que ofrecen ropa y otros productos a muy buen estado y un precio ridículamente accesible. Seguro hay un puesto cerca de donde tu estas.`,
            categoria: 'Estilo de vida',
            dificultad: 'Baja',
            preguntaCodigo: 'EstVida_06',
            limite: '5.2875',
            operador: '>=',
            activo: true
        },
        {
            titulo: 'Mejorar sellado y eficiencia',
            descripcion: `Revisa sellado de ventanas y puertas antes de la temporada calurosa; instala burletes y sellos económicos y cambia focos por LED en toda la casa.`,
            categoria: 'Estilo de vida',
            dificultad: 'Alta',
            preguntaCodigo: 'EstVida_07',
            limite: '2',
            operador: '<=',
            activo: true
        },
        {
            titulo: 'Reparar o comprar electrodomesticos reacondicionados',
            descripcion: `No siempre lo mejor es comprar algo nuevo, antes pregunta por reparación en talleres locales (siempre hay uno en cada colonia), si compras, elige reacondicionado (Marketplace de Facebook es una excelente opción para buscar ofertas) y conserva empaques para reutilizar.`,
            categoria: 'Estilo de vida',
            dificultad: 'Media',
            preguntaCodigo: 'EstVida_08',
            limite: '41.6',
            operador: '>=',
            activo: true
        },
        {
            titulo: 'Promover home office cuando sea posible',
            descripcion: `Si está en tus posibilidades, proponle a tu jefe alternar entre trabajo presencial o home office. En caso de que ya lo hagas, apaga periféricos y evita dejar cargadores conectados sin uso en tiempos muertos, así reducirás considerablemente el gasto energético.`,
            categoria: 'Estilo de vida',
            dificultad: 'Baja',
            preguntaCodigo: 'EstVida_09',
            limite: '1',
            operador: '<=',
            activo: true
        },
        {
            titulo: 'Practicar consumo responsable',
            descripcion: `Si eres de las personas que hace compras compulsivas, intenta esperar al menos unas horas para considerar si realmente necesitas eso que quieres. Dona, repara o intercambia artículos que ya no utilices en grupos locales. De esta manera también se vera beneficiado tu bolsillo.`,
            categoria: 'Estilo de vida',
            dificultad: 'Baja',
            preguntaCodigo: 'EstVida_10',
            limite: '3',
            operador: '<=',
            activo: true
        }
    ];

    const result = await prisma.recomendacion.createMany({
        data: recomendaciones,
        skipDuplicates: true
    });

    console.log(`Seed ejecutado: ${result.count} recomendaciones creadas (o ignoradas si ya existían).`);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
