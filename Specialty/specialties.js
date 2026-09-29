const tableBody = document.getElementById('specialties-body');
const countText = document.getElementById('specialties-count');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search');
const searchError = document.getElementById('search-error');

let filter = '';

function validateSearch(text) {
    if (text && text.length < 3) return 'Ingresá al menos 3 caracteres para buscar.';
    if (text.length > 100) return 'La búsqueda no puede superar los 100 caracteres.';
    return '';
}

function isThisMonth(isoDate) {
    if (!isoDate) return false;
    const date = new Date(isoDate);
    const now = new Date();
    return date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth();
}

function renderSummary() {
    const all = getSpecialties();
    document.getElementById('total-specialties').textContent = all.length;
    document.getElementById('new-this-month').textContent =
        all.filter(s => isThisMonth(s.createdAt)).length;
}

function createIconButton(icon, label) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'icon-btn';
    button.textContent = icon;
    button.title = label;
    button.setAttribute('aria-label', label);
    return button;
}

function renderTable(specialties) {
    tableBody.textContent = '';

    if (specialties.length === 0) {
        const cell = tableBody.insertRow().insertCell();
        cell.colSpan = 4;
        cell.textContent = filter
            ? 'No se encontraron especialidades con ese nombre.'
            : 'Todavía no hay especialidades registradas.';
    }

    for (const specialty of specialties) {
        const row = tableBody.insertRow();

        row.insertCell().textContent = specialty.name;
        row.insertCell().textContent = specialty.description;

        const status = document.createElement('span');
        status.className = 'estado estado-activo';
        status.textContent = 'Activa';
        row.insertCell().append(status);

        const editButton = createIconButton('✏️', `Editar ${specialty.name} (próximamente)`);
        editButton.disabled = true;

        const deleteButton = createIconButton('🗑️', `Eliminar ${specialty.name}`);
        deleteButton.addEventListener('click', () => {
            if (!confirm(`¿Eliminar la especialidad "${specialty.name}"?`)) return;
            deleteSpecialty(specialty.id);
            refresh();
        });

        row.insertCell().append(editButton, deleteButton);
    }

    countText.textContent = `Mostrando ${specialties.length} especialidad(es)`;
}

function refresh() {
    renderSummary();
    renderTable(filter ? searchSpecialties(filter) : getSpecialties());
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = searchInput.value.trim();
    const error = validateSearch(text);

    searchError.textContent = error;
    searchInput.setAttribute('aria-invalid', error ? 'true' : 'false');
    if (error) return;

    filter = text;
    refresh();
});

refresh();