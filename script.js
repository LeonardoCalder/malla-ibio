
document.addEventListener("DOMContentLoaded", () => {
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
      { codigo: "FIMF", nombre: "Física Mecánica y Fluidos", prerequisitos: ["ALLI", "CALD"] },
      { codigo: "CALI", nombre: "Cálculo Integral", prerequisitos: ["CALD"] },
      { codigo: "BICMR", nombre: "Biología Celular y Molecular", prerequisitos: ["FBICR"] },
      { codigo: "BIQMR", nombre: "Bioquímica", prerequisitos: ["QUIGR"] },
      { codigo: "CMCAR", nombre: "Competencia Comunicativa", prerequisitos: ["COMBR"] }
    ]
  };

  const totalRamos = Object.values(ramos).flat().length;
  const completados = new Set();

  function actualizarProgreso() {
    const porcentaje = Math.round((completados.size / totalRamos) * 100);
    document.getElementById("barra-progreso").style.width = porcentaje + "%";
    document.getElementById("texto-progreso").textContent = porcentaje + "% completado";
  }

  function estaDisponible(prerequisitos) {
    return prerequisitos.every(codigo => completados.has(codigo));
  }

  function crearMalla() {
    const contenedor = document.getElementById("malla");
    for (const [semestre, materias] of Object.entries(ramos)) {
      const columna = document.createElement("div");
      columna.classList.add("semestre");

      const titulo = document.createElement("h3");
      titulo.textContent = semestre;
      columna.appendChild(titulo);

      materias.forEach(ramo => {
        const boton = document.createElement("button");
        boton.className = "ramo";
        boton.textContent = `${ramo.nombre} (${ramo.codigo})`;
        boton.disabled = !estaDisponible(ramo.prerequisitos);

        boton.addEventListener("click", () => {
          if (!completados.has(ramo.codigo)) {
            completados.add(ramo.codigo);
            boton.classList.add("aprobado");
            boton.disabled = true;
            crearMalla();
            actualizarProgreso();
          }
        });

        columna.appendChild(boton);
      });

      contenedor.appendChild(columna);
    }
  }

  crearMalla();
  actualizarProgreso();
});
