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
  // 👉 Puedes seguir completando los semestres III a IX aquí
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
