import { combineReducers } from 'redux';
import shoppingItems from './shoppingItems';
import editor from './editor';

export default combineReducers({
    shoppingItems,
    editor,
});