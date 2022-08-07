import express from 'express';

import {
    getAllMovements,
    createMovement,
    getMovementById,
    updateMovement,
    deleteMovement
} from '../controllers/movementsController.js';

const router = express.Router();

router.delete('/:id', deleteMovement);
router.get('/', getAllMovements);
router.post('/add', createMovement);
router.get('/:id', getMovementById);
router.put('/update/:id', updateMovement);

export default router;



