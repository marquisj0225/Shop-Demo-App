import {Request, Response} from 'express';
import ShoppingItem from '../models/ShoppingItem';
import {error, success, created} from './BaseController';


export async function getAll(req: Request, res: Response): Promise<void | any> {
    try {
        const items = await ShoppingItem.query();
        success(res, items);
    } catch (err) {
        error(res, err);
    }
}

export async function addItem(req: Request, res: Response): Promise<void | any> {
    try {
        const item = req.body;
        const createdItem = await ShoppingItem.query().insert({...item});
        created(res, createdItem);
    } catch (err) {
        error(res, err);
    }
}


export async function updateItem(req: Request, res: Response): Promise<void | any> {
    try {
        const item = req.body;

        await ShoppingItem.query()
            .findById(req.params.id)
            .patch({
                ...item
            });

        const updatedItem = await ShoppingItem.query().findById(req.params.id);

        success(res, updatedItem);
    } catch (err) {
        error(res, err);
    }
}


export async function deleteItem(req: Request, res: Response): Promise<void | any> {
    try {
        await ShoppingItem.query().deleteById(req.params.id);
        success(res);
    } catch (err) {
        error(res, err);
    }
}