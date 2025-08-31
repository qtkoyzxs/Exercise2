
let person = [
    { id: 1, name: "Cyrus", age: 19 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Xian", age: 12 }
];

function updatePerson(id, newData) {
    const index = person.findIndex(p => p.id === id);
    if (index !== -1) {
        person[index] = { ...person[index], ...newData };
    }
}

updatePerson(2, { name: "Kurt", age: 24 });

console.log(person);
