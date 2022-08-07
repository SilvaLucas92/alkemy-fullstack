import Movement from "../models/Movements.js";

//Get all movements
export const getAllMovements = async (req, res) => {
    try {
        const movements = await Movement.findAll({order: [['createdAt', 'DESC']]});
        res.json(movements)
    } catch (e) {
        res.json({ message: e.message })
    }
}

//Get one movement
export const getMovementById = async (req, res) => {
    try {
        const oneMovement = await Movement.findAll({ where: { id: req.params.id } });
        res.json(oneMovement)
    } catch (e) {
        res.json({ message: e.message })
    }
}

//Create one movement
export const createMovement = async (req, res) => {
    try {
        const userSession = req.session.userLogged;
        await Movement.create(
            req.body
        );
        res.status(202).json({ msg: "Movement created" });
    } catch (e) {
        res.status(404).json({ msg: e.message })
    }
}

//Update movement
export const updateMovement = async (req, res) => {
    try {
        await Movement.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(202).json({ msg: "Movement updated" });
    } catch (e) {
        res.json({ message: e.message })
    }
}

//Delete movement

export const deleteMovement = async (req, res) => {
    try {
        await Movement.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(202).json({ msg: "Movement deleted" })
    } catch (error) {
        res.json({ message: error.message });
    }  
}