const SPECIALTIES_KEY = "specialties";

function  getSpecialties() {
    const data = localStorage.getItem(SPECIALTIES_KEY);
    
    if (data == null){
        return [];
    }
    return JSON.parse(data);
}

function saveSpecialties(specialties){
    const text = JSON.stringify(specialties);
  localStorage.setItem(SPECIALTIES_KEY, text);
}

function addSpecialties(name, description){
    const specialty = {
        id: crypto.randomUUID(),
        name: name,
        description:description,
        createdAt: new Date().toISOString()

    };
    const specialties = getSpecialties();
    specialties.push(specialty);
    saveSpecialties(specialties);
    return specialty;
}

function deleteSpecialty(id){
    saveSpecialties(getSpecialties().filter(s => s.id !== id));
}
function searchSpecialties(text){
    const specialties =  getSpecialties();
    const search = text.toLowerCase();
    return specialties.filter(s => s.name.toLowerCase().includes(search));
}

if (localStorage.getItem(SPECIALTIES_KEY) === null) {
  saveSpecialties([]);
}