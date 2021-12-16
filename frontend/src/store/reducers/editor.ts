import {ShoppingItemModel, ActionTypes} from '../types';
import {OPEN_EDITOR, CLOSE_EDITOR} from '../actions';

const editor = (
    state: { open: boolean; selectedItem: ShoppingItemModel | null } = {
        open: false,
        selectedItem: null
    },
    action: ActionTypes
) => {

    switch (action.type) {
        case OPEN_EDITOR:
            return {...state, open: true, selectedItem: action.item};

        case CLOSE_EDITOR:
            return {...state, open: false, selectedItem: null};
    }

    return state;
};

export default editor;