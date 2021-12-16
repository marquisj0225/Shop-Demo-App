import {
    ADD_ITEM,
    closeEditor,
    DELETE_ITEM,
    FETCH_ITEMS,
    itemAdded,
    itemDeleted,
    itemUpdated,
    setItems,
    setLoading,
    UPDATE_ITEM,
} from "../actions";

import {addItem, deleteItem, gelAll, updateItem} from '../../services/shoppingItems'
import {ActionTypes} from "../types";


export const apiMiddleware = storeAPI => next => (action: ActionTypes) => {

    switch (action.type) {

        case FETCH_ITEMS:
            storeAPI.dispatch(setLoading(true));
            gelAll().then(({data}) => {
                storeAPI.dispatch(setItems(data));
                storeAPI.dispatch(setLoading(false));
            }).catch(() => {
                storeAPI.dispatch(setLoading(false));
            });
            break;

        case ADD_ITEM:
            addItem(action.value).then(({data}) => {
                storeAPI.dispatch(itemAdded(data));
                storeAPI.dispatch(closeEditor());
            });
            break;

        case DELETE_ITEM:
            deleteItem(action.item.id).then(() => {
                storeAPI.dispatch(itemDeleted(action.item));
            });
            break;

        case UPDATE_ITEM:
            updateItem(action.item).then(({data}) => {
                storeAPI.dispatch(itemUpdated(data));
                storeAPI.dispatch(closeEditor());
            });
            break;

        default:
            break;
    }

    return next(action);

}