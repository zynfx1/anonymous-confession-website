import { Router } from 'express';
import {
  addNewConfessionFunction,
  deleteConfessionFunction,
} from '../controllers/confessionController';

const router = Router();

router.post('/addNewConfession', addNewConfessionFunction);
router.delete('/delete-id/:id', deleteConfessionFunction);
export default router;
