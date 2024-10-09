import { Router } from 'express';
import { getDemo, createTask, deleteTask, getTasks, updateTask } from '../controllers/task.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.get('/demo', getDemo);
router.get('/', authenticate, getTasks);
router.post('/', authenticate, createTask);
router.put('/:id', authenticate, updateTask);
router.delete('/:id', authenticate, deleteTask);

export default router;
