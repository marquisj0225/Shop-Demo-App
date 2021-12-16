import {ShoppingItemModel, ActionTypes} from './types';

export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const CHECK_ITEM = 'CHECK_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
export const OPEN_EDITOR = 'OPEN_EDITOR';
export const CLOSE_EDITOR = 'CLOSE_EDITOR';
export const SET_ITEMS = 'SET_ITEMS';
export const FETCH_ITEMS = 'FETCH_ITEMS';
export const SET_LOADING = 'SET_LOADING';


export const addItem = (value: ShoppingItemModel): ActionTypes => ({
    type: ADD_ITEM,
    value,
});

export const itemAdded = (value: ShoppingItemModel): ActionTypes => ({
    type: ADD_ITEM_SUCCESS,
    value,
});

export const checkItem = (id: number): ActionTypes => ({
    type: CHECK_ITEM,
    id,
});

export const deleteItem = (item: ShoppingItemModel): ActionTypes => ({
    type: DELETE_ITEM,
    item,
});

export const itemDeleted = (item: ShoppingItemModel): ActionTypes => ({
    type: DELETE_ITEM_SUCCESS,
    item
});

export const updateItem = (item: ShoppingItemModel): ActionTypes => ({
    type: UPDATE_ITEM,
    item,
});

export const itemUpdated = (item: ShoppingItemModel): ActionTypes => ({
    type: UPDATE_ITEM_SUCCESS,
    item
});

export const openEditor = (item?: ShoppingItemModel): ActionTypes => ({
    type: OPEN_EDITOR,
    item,
});


export const closeEditor = (): ActionTypes => ({
    type: CLOSE_EDITOR,
});


export const fetchItems = (): ActionTypes => ({
    type: FETCH_ITEMS
});

export const setItems = (items: ShoppingItemModel[]): ActionTypes => ({
    type: SET_ITEMS,
    items
});

export const setLoading = (isLoading: boolean): ActionTypes => ({
    type: SET_LOADING,
    isLoading
});