// Datos de los ramos con sus códigos y prerrequisitos
const ramos = [
  // Semestre 0
  { codigo: 'FFIS', nombre: 'Fundamentos de Física', prerequisitos: [] },
  { codigo: 'FQUIR', nombre: 'Fundamentos de Química', prerequisitos: [] },
  { codigo: 'FBICR', nombre: 'Fundamentos de Biología', prerequisitos: [] },
  { codigo: 'PREM', nombre: 'Precálculo', prerequisitos: [] },
  { codigo: 'AGEO', nombre: 'Análisis Geométrico', prerequisitos: [] },
  { codigo: 'COMBR', nombre: 'Competencia Comunicativa Básica', prerequisitos: [] },

  // Semestre I
  { codigo: 'ALLI', nombre: 'Álgebra Lineal', prerequisitos: ['PREM', 'AGEO'] },
  { codigo: 'QUIGR', nombre: 'Química General', prerequisitos: ['FQUIR'] },
  { codigo: 'CALD', nombre: 'Cálculo Diferencial', prerequisitos: ['PREM', 'AGEO'] },
  { codigo: 'IIBMR', nombre: 'Ingeniería Biomédica', prerequisitos: [] },
  { codigo: 'EGR1', nombre: 'Expresión Gráfica 1', prerequisitos: ['AGEO'] },
  { codigo: 'DEPD', nombre: 'Deporte Dirigido', prerequisitos: [] },

  // Semestre II
  { codigo: 'FIMF', nombre: 'Física Mecánica y Fluidos', prerequisitos: ['ALLI', 'CALD'] },
  { codigo: 'CALI', nombre: 'Cálculo Integral', prerequisitos: ['CALD'] },
  { codigo: 'BICMR', nombre: 'Biología Celular y Molecular', prerequisitos: ['FBICR'] },
  { codigo: 'BIQMR', nombre: 'Bioquímica', prerequisitos: ['QUIGR'] },
  { codigo: 'CMCAR', nombre: 'Competencia Comunicativa', prerequisitos: ['COMBR'] },

  // Agrega el resto aquí siguiendo la misma estructura...

  // Puedes continuar agregando los demás ramos por semestre con sus códigos y requisitos.
];

// Estado de aprobación
const estado = {};

// Crear elementos HTML
function crearMalla() {
  const contenedor = document.getElementById('malla');
  ramos.forEach((ramo) => {
    const div = document.createElement('div');
    div.classList.add('ramo');
    div.id = ramo.codigo;
    div.innerText = `${ramo.nombre}\n(${ramo.codigo})`;
    div.addEventListener('click', () => toggleRamo(ramo.codigo));
    contenedor.appendChild(div);
    estado[ramo.codigo] = false;
  });
  actualizarEstado();
}

// Cambiar estado aprobado/no aprobado
function toggleRamo(codigo) {
  if (!estaHabilitado(codigo)) return;

  estado[codigo] = !estado[codigo];
  actualizarEstado();
}

// Verifica si un ramo está habilitado según prerequisitos
function estaHabilitado(codigo) {
  const ramo = ramos.find(r => r.codigo === codigo);
  return ramo.prerequisitos.every(pr => estado[pr]);
}

// Actualiza clases visuales según estado actual
function actualizarEstado() {
  ramos.forEach(ramo => {
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

crearMalla();

