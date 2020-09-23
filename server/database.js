const {Telefon} = require("./connection").models;

//private
const database = [];

//private
const getIndex = (id) => {
    return database.findIndex(element => element.id === parseInt(id));
}

const getAll = async () => {
    //returnam un promise
    return await Telefon.findAll();
}

const getOne = async (id) => {
    return await Telefon.findAll({where:{id}});
}

const create = async (telefon) => {
    await Telefon.create(telefon);
}


const update = async (id,telefon) => {
    await Telefon.update(telefon,{where:{id}})
}

const deleteOne = async (id) => {
    await Telefon.destroy({where:{id}});
}


module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne
}