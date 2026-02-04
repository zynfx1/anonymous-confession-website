import { Router } from 'express';
import {
  addNewConfessionFunction,
  deleteConfessionFunction,
  activeCardFunction,
} from '../controllers/confessionController';

const router = Router();

router.post('/addNewConfession', addNewConfessionFunction);
router.delete('/delete-id/:id', deleteConfessionFunction);
router.get('/all-confessions', activeCardFunction);
export default router;
