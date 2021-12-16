import {Router} from 'express';
import {getAll, addItem, updateItem, deleteItem} from '../controllers/ShoppingItemController';

const router = Router();

router.get('/', getAll);
router.post('/', addItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;