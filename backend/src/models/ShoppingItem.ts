import { Model } from 'objection';

export default class ShoppingItem extends Model {

    static get tableName() {
        return 'shoppingItems';
    }

}