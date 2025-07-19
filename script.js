const ramos = {
  'Semestre 0': [
    { codigo: 'FFIS', nombre: 'Fundamentos de Física', prerequisitos: [] },
    { codigo: 'FQUIR', nombre: 'Fundamentos de Química', prerequisitos: [] },
    { codigo: 'FBICR', nombre: 'Fundamentos de Biología', prerequisitos: [] },
    { codigo: 'PREM', nombre: 'Precálculo', prerequisitos: [] },
    { codigo: 'AGEO', nombre: 'Análisis Geométrico', prerequisitos: [] },
    { codigo: 'COMBR', nombre: 'Competencia Comunicativa Básica', prerequisitos: [] }
  ],
  'Semestre I': [
    { codigo: 'ALLI', nombre: 'Álgebra Lineal', prerequisitos: ['PREM', 'AGEO'] },
    { codigo: 'QUIGR', nombre: 'Química General', prerequisitos: ['FQUIR'] },
    { codigo: 'CALD', nombre: 'Cálculo Diferencial', prerequisitos: ['PREM', 'AGEO'] },
    { codigo: 'IIBMR', nombre: 'Ingeniería Biomédica', prerequisitos: [] },
    { codigo: 'EGR1', nombre: 'Expresión Gráfica 1', prerequisitos: ['AGEO'] },
    { codigo: 'DEPD', nombre: 'Deporte Dirigido', prerequisitos: [] }
  ],
  'Semestre II': [
    { codigo: 'FIMF', nombre: 'Física Mecánica y Fluidos', prerequisitos: ['ALLI', 'CALD'] },
    { codigo: 'CALI', nombre: 'Cálculo Integral', prerequisitos: ['CALD'] },
    { codigo: 'BICMR', nombre: 'Biología Celular y Molecular', prerequisitos: ['FBICR'] },
    { codigo: 'BIQMR', nombre: 'Bioquímica', prerequisitos: ['QUIGR'] },
    { codigo: 'CMCAR', nombre: 'Competencia Comunicativa', prerequisitos: ['COMBR'] }
  ]
const ramos = {
  "Semestre 0": [
    { codigo: "FFIS", nombre: "Fundamentos de Física", prerequisitos: [] },
    { codigo: "FQUIR", nombre: "Fundamentos de Química", prerequisitos: [] },
    { codigo: "FBICR", nombre: "Fundamentos de Biología", prerequisitos: [] },
    { codigo: "PREM", nombre: "Precálculo", prerequisitos: [] },
    { codigo: "AGEO", nombre: "Análisis Geométrico", prerequisitos: [] },
    { codigo: "COMBR", nombre: "Competencia Comunicativa Básica", prerequisitos: [] }
  ],
  "Semestre I": [
    { codigo: "ALLI", nombre: "Álgebra Lineal", prerequisitos: ["PREM", "AGEO"] },
    { codigo: "QUIGR", nombre: "Química General", prerequisitos: ["FQUIR"] },
    { codigo: "CALD", nombre: "Cálculo Diferencial", prerequisitos: ["PREM", "AGEO"] },
    { codigo: "IIBMR", nombre: "Ingeniería Biomédica", prerequisitos: [] },
    { codigo: "EGR1", nombre: "Expresión Gráfica 1", prerequisitos: ["AGEO"] },
    { codigo: "DEPD", nombre: "Deporte Dirigido", prerequisitos: [] }
  ],
  "Semestre II": [
    { codigo: "FIMF", nombre: "Física Mecánica y de Fluidos", prerequisitos: ["ALLI", "CALD"] },
    { codigo: "CALI", nombre: "Cálculo Integral", prerequisitos: ["CALD"] },
    { codigo: "BICMR", nombre: "Biología Celular y Molecular", prerequisitos: ["FBICR"] },
    { codigo: "BIQMR", nombre: "Bioquímica", prerequisitos: ["QUIGR"] },
    { codigo: "CMCAR", nombre: "Competencia Comunicativa", prerequisitos: ["COMBR"] }
  ],
  "Semestre III": [
    { codigo: "CALV", nombre: "Cálculo Vectorial", prerequisitos: ["CALI"] },
    { codigo: "BIST", nombre: "Bioestadística", prerequisitos: ["CALD"] },
    { codigo: "FIEM", nombre: "Física del Electromagnetismo", prerequisitos: ["FIMF"] },
    { codigo: "BTLER", nombre: "Bioética y Legislación", prerequisitos: [] },
    { codigo: "MORFR", nombre: "Morfofisiología", prerequisitos: ["BICMR"] },
    { codigo: "AYPR", nombre: "Algoritmos y Programación de Computadores", prerequisitos: ["ALLI", "CALD"] }
  ],
  "Semestre IV": [
    { codigo: "FICO", nombre: "Física del Calor, Ondas y Estructura Atómica", prerequisitos: ["FIEM"] },
    { codigo: "ECDI", nombre: "Ecuaciones Diferenciales", prerequisitos: ["CALV"] },
    { codigo: "CIE1", nombre: "Circuitos Eléctricos I", prerequisitos: ["FIEM"] },
    { codigo: "BIF1R", nombre: "Biofísica 1", prerequisitos: ["FIEM", "MORFR"] },
    { codigo: "BIFM", nombre: "Bioinformática", prerequisitos: ["BIST"] },
    { codigo: "EHU1", nombre: "Electiva Humanística 1", prerequisitos: [] }
  ],
  "Semestre V": [
    { codigo: "ELA1", nombre: "Electrónica Análoga 1", prerequisitos: ["FIEM"] },
    { codigo: "CIE2", nombre: "Circuitos Eléctricos II", prerequisitos: ["CIE1"] },
    { codigo: "LCIE", nombre: "Laboratorio de Circuitos Eléctricos", prerequisitos: ["CIE1"] },
    { codigo: "SED1", nombre: "Sistemas Electrónicos Digitales 1", prerequisitos: ["CIE1"] },
    { codigo: "SYSB", nombre: "Sistemas y Señales Biomédicos", prerequisitos: ["CIE1", "ECDI", "AYPR"] },
    { codigo: "LEL1", nombre: "Laboratorio de Electrónica Análoga 1", prerequisitos: ["CIE1"] },
    { codigo: "BIF2R", nombre: "Biofísica 2", prerequisitos: ["BIF1R"] },
    { codigo: "GADER", nombre: "Gestión y Administración de Empresas", prerequisitos: [] }
  ],
  "Semestre VI": [
    { codigo: "ELA2", nombre: "Electrónica Análoga 2", prerequisitos: ["ELA1", "LEL1"] },
    { codigo: "LEL2", nombre: "Laboratorio de Electrónica Análoga 2", prerequisitos: ["ELA1", "LEL1"] },
    { codigo: "SED2", nombre: "Sistemas Electrónicos Digitales 2", prerequisitos: ["SED1"] },
    { codigo: "BIOI", nombre: "Bioinstrumentación", prerequisitos: ["ELA1", "SYSB"] },
    { codigo: "BIMT", nombre: "Biomateriales", prerequisitos: ["BIF2R"] },
    { codigo: "IFMER", nombre: "Informática Médica", prerequisitos: ["AYPR"] },
    { codigo: "GMHCR", nombre: "Gestión de Mantenimiento Clínico Hospitalario", prerequisitos: ["ELA1"] }
  ],
  "Semestre VII": [
    { codigo: "PSIM", nombre: "Procesamiento de Señales e Imágenes Médicas", prerequisitos: ["AYPR", "ECDI"] },
    { codigo: "MPEI", nombre: "Microprocesadores e Interfaces", prerequisitos: ["SED2"] },
    { codigo: "ELPO", nombre: "Electrónica de Potencia", prerequisitos: ["ELA2", "LEL2"] },
    { codigo: "BIOM", nombre: "Biomecánica", prerequisitos: ["SYSB", "BIF2R", "BIMT"] },
    { codigo: "INCHR", nombre: "Ingeniería Clínica y Hospitalaria", prerequisitos: ["GMHCR"] },
    { codigo: "ELP1R", nombre: "Electiva Programa 1", prerequisitos: [] }
  ],
  "Semestre VIII": [
    { codigo: "SCDB", nombre: "Sistemas de Control Digital Biomédico", prerequisitos: ["MPEI", "ELPO"] },
    { codigo: "DBIO", nombre: "Diseño Biomédico", prerequisitos: ["MPEI", "ELPO"] },
    { codigo: "MINVR", nombre: "Metodología de la Investigación", prerequisitos: ["BIOI"] },
    { codigo: "ELP2R", nombre: "Electiva Programa 2", prerequisitos: [] },
    { codigo: "ELP3R", nombre: "Electiva Programa 3", prerequisitos: [] },
    { codigo: "ELP4R", nombre: "Electiva Programa 4", prerequisitos: [] }
  ],
  "Semestre IX": [
    { codigo: "PYDPR", nombre: "Trabajo Dirigido o Pasantía", prerequisitos: ["MINVR"] },
    { codigo: "ELP5R", nombre: "Electiva Programa 5", prerequisitos: [] },
    { codigo: "ELP6R", nombre: "Electiva Programa 6", prerequisitos: [] }
  ]
};

const estado = {};
const totalRamos = Object.values(ramos).flat().length;

function crearMalla() {
  const contenedor = document.getElementById('malla');

  for (const [semestre, listaRamos] of Object.entries(ramos)) {
    const bloque = document.createElement('div');
    bloque.classList.add('semestre');

    const titulo = document.createElement('h2');
    titulo.innerText = semestre;
    bloque.appendChild(titulo);

    const contenedorRamos = document.createElement('div');
    contenedorRamos.classList.add('ramos');

    for (const ramo of listaRamos) {
      estado[ramo.codigo] = false;

      const div = document.createElement('div');
      div.classList.add('ramo');
      div.id = ramo.codigo;
      div.innerText = `${ramo.nombre}\n(${ramo.codigo})`;

      div.addEventListener('click', () => toggleRamo(ramo.codigo));

      contenedorRamos.appendChild(div);
    }

    bloque.appendChild(contenedorRamos);
    contenedor.appendChild(bloque);
  }

  actualizarEstado();
}

function estaHabilitado(codigo) {
  const ramo = Object.values(ramos).flat().find(r => r.codigo === codigo);
  return ramo.prerequisitos.every(pr => estado[pr]);
}

function toggleRamo(codigo) {
  if (!estaHabilitado(codigo)) return;

  estado[codigo] = !estado[codigo];
  actualizarEstado();
  actualizarProgreso();
}

function actualizarEstado() {
  Object.values(ramos).flat().forEach(ramo => {
    const div = document.getElementById(ramo.codigo);
    if (estado[ramo.codigo]) {
      div.classList.add('aprobado');
      div.classList.remove('habilitado', 'bloqueado');
    } else if (estaHabilitado(ramo.codigo)) {
      div.classList.add('habilitado');
      div.classList.remove('aprobado', 'bloqueado');
    } else {
      div.classList.add('bloqueado');
      div.classList.remove('aprobado', 'habilitado');
    }
  });
}

function actualizarProgreso() {
  const aprobados = Object.values(estado).filter(Boolean).length;
  const porcentaje = Math.round((aprobados / totalRamos) * 100);
  document.getElementById('progreso-barra').style.width = `${porcentaje}%`;
  document.getElementById('progreso-texto').innerText = `${porcentaje}% completado`;
}

crearMalla();
