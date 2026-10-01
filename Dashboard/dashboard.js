const logoutButton = document.getElementById("logout");
const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const cuerpoTabla = document.getElementById("product-table-body");
const cantidadDoctores = document.getElementById("cantidad-doctores");
const addSpecialtyButton = document.querySelector(".addSpecialty");
const cantidadEspecialidades = document.getElementById("cantidad-especialidades");

function actualizarCantidadEspecialidades() {
    if (cantidadEspecialidades) {
        cantidadEspecialidades.textContent = getSpecialties().length;
    }
}

actualizarCantidadEspecialidades();
window.addEventListener("pageshow", actualizarCantidadEspecialidades);

if (addSpecialtyButton) {
    addSpecialtyButton.addEventListener("click", () => {
        window.location.href = "../Specialty/specialty.html";
    });
}

logoutButton.addEventListener("click", () => {
    window.location.href = "../Login/login.html";
});

menu.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

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
    cuerpoTabla.textContent = "";

    for (const doctor of doctores) {
        const fila = document.createElement("tr");

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = doctor.nombre;

        const celdaEspecialidad = document.createElement("td");
        celdaEspecialidad.textContent = doctor.especialidad;

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

        const celdaAcciones = document.createElement("td");

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaEspecialidad);
        fila.appendChild(celdaEstado);
        fila.appendChild(celdaAcciones);

        cuerpoTabla.appendChild(fila);
    }

    cantidadDoctores.textContent =
        "Mostrando " + doctores.length + " profesionales";
}

if (cuerpoTabla && cantidadDoctores) {
    mostrarDoctores();
}
