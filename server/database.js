//private
const database = [];

//private
const getIndex = (id) => {
    return database.findIndex(element => element.id === parseInt(id));
}

const getAll = () => {
    return database;
}

const getOne = (id) => {
    return database[getIndex(id)];
}

const create = (telefon) => {
    database.push(telefon);
}


const update = (id,telefon) => {
    database[getIndex(id)] = telefon;
}

const deleteOne = (id) => {
    database.splice(getIndex(id),1);
}


module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne
}