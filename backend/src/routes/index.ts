import {Router} from 'express';

import shoppingItems from './shoppingItems';

const router = Router();

router.use('/items', shoppingItems);

export default router;