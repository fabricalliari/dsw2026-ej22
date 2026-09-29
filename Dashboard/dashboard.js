// El script se carga con defer: el HTML ya está disponible.
const logoutButton = document.getElementById("logout");
const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const cuerpoTabla = document.getElementById("product-table-body");
const cantidadDoctores = document.getElementById("cantidad-doctores");
const addSpecialtyButton = document.querySelector(".addSpecialty");

if (addSpecialtyButton) {
    addSpecialtyButton.addEventListener("click", () => {
        window.location.href = "../Specialty/specialty.html";
    });
}

// Navegación al login.
logoutButton.addEventListener("click", () => {
    window.location.href = "../Login/login.html";
});

// Abre o cierra el menú lateral.
menu.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

// Datos de ejemplo que vamos a mostrar.
const doctores = [
    {
        nombre: "Dr. Gonzalo Ruiz",
        especialidad: "Cardiología",
        estado: "Activo"
    },
    {
        nombre: "Dra. Mateo Rusconi",
        especialidad: "Neurología",
        estado: "Activo"
    },
    {
        nombre: "Dr. Fabrizzio calliari",
        especialidad: "Pediatría",
        estado: "De licencia"
    }
];

function mostrarDoctores() {
    // Borra las filas anteriores para evitar duplicados.
    cuerpoTabla.textContent = "";

    for (const doctor of doctores) {
        const fila = document.createElement("tr");

        // Nombre.
        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = doctor.nombre;

        // Especialidad.
        const celdaEspecialidad = document.createElement("td");
        celdaEspecialidad.textContent = doctor.especialidad;

        // Estado.
        const celdaEstado = document.createElement("td");
        const etiquetaEstado = document.createElement("span");

        etiquetaEstado.textContent = doctor.estado;
        etiquetaEstado.classList.add("estado");

        if (doctor.estado === "Activo") {
            etiquetaEstado.classList.add("estado-activo");
        } else if (doctor.estado === "De licencia") {
            etiquetaEstado.classList.add("estado-licencia");
        }

        celdaEstado.appendChild(etiquetaEstado);

        // Columna reservada para acciones.
        const celdaAcciones = document.createElement("td");

        // Coloca las celdas dentro de la fila.
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaEspecialidad);
        fila.appendChild(celdaEstado);
        fila.appendChild(celdaAcciones);

        // Coloca la fila dentro de la tabla.
        cuerpoTabla.appendChild(fila);
    }

    // Actualiza el texto inferior usando el tamaño del array.
    cantidadDoctores.textContent =
        "Mostrando " + doctores.length + " profesionales";
}

if (cuerpoTabla && cantidadDoctores) {
    mostrarDoctores();
}
