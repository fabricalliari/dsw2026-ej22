const form = document.getElementById('specialty-form');
const fields = ['name', 'description'];

function validate({ name, description }, existing) {
    const errors = {};

    if (!name) errors.name = 'El nombre es obligatorio.';
    else if (name.length < 3) errors.name = 'El nombre debe tener al menos 3 caracteres.';
    else if (name.length > 15) errors.name = 'El nombre no puede superar los 15 caracteres.';
    else if (existing.some(s => s.name.toLowerCase() === name.toLowerCase()))
        errors.name = 'Ya existe una especialidad con ese nombre.';

    if (!description) errors.description = 'La descripción es obligatoria.';
    else if (description.length < 10)
        errors.description = 'La descripción debe tener al menos 10 caracteres.';
    else if (description.length > 100)
        errors.description = 'La descripción no puede superar los 100 caracteres.';

    return errors;
}

function showErrors(errors) {
    fields.forEach(field => {
        const msg = errors[field] ?? '';
        document.getElementById(`${field}-error`).textContent = msg;
        document.getElementById(field).setAttribute('aria-invalid', msg ? 'true' : 'false');
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const description = document.getElementById('description').value.trim();

    const errors = validate({ name, description }, getSpecialties());
    showErrors(errors);

    const firstError = fields.find(f => errors[f]);
    if (firstError) {
        document.getElementById(firstError).focus();
        return;
    }

    const specialty = addSpecialties(name, description);
    console.log(specialty);
    window.location.href = 'specialties.html';
});