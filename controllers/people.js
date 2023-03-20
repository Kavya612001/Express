let { people } = require('../data');

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people});
}

const createPerson = (req, res) => {
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg: 'please provide name value'});
    }
    res.status(201).json({success: true, person: name});
}

const createPersonPostman = (req, res) => {
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg: 'please provide name value'});
    }
    res.status(201).json({success: true, data: [...people, name]});
}

const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find((person) => person.id === +id);
    if(!person) {
        res.status(404).json({success: false, msg: `No person with id: ${id}`});
    } else {
        const newPpl = people.map((person) => {
            if(person.id === +id) {
                person.name = name;
            }
            return person;
        })
        res.status(200).json({success: true, data: newPpl});
    }
}

const deletePerson = (req, res) => {
    // id => req.params.id
    const { id } = req.params;
    const person = people.find((person) => person.id === +id);
    if(!person) {
        res.status(404).json({success: false, msg: `No person with id: ${id}`});
    } else {
        newPpl = people.filter((person) => person.id !== +id);
        res.status(200).json({success: true, data: newPpl});
    }
}

module.exports = {getPeople, createPerson, createPersonPostman, updatePerson, deletePerson};