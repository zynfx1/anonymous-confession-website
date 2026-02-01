import { Router } from 'express';
import { addNewConfessionFunction } from '../controllers/confessionController';

const router = Router();

router.post('/addNewConfession', addNewConfessionFunction);

export default router;
