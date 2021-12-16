import {
    ADD_ITEM,
    ADD_ITEM_SUCCESS,
    CHECK_ITEM,
    CLOSE_EDITOR,
    DELETE_ITEM,
    DELETE_ITEM_SUCCESS,
    FETCH_ITEMS,
    OPEN_EDITOR,
    SET_ITEMS,
    SET_LOADING,
    UPDATE_ITEM,
    UPDATE_ITEM_SUCCESS
} from './actions';

export interface AddItemAction {
    type: typeof ADD_ITEM;
    value: ShoppingItemModel;
}

export interface AddItemSuccessAction {
    type: typeof ADD_ITEM_SUCCESS;
    value: ShoppingItemModel;
}

export interface CheckItemAction {
    type: typeof CHECK_ITEM;
    id: number;
}


export interface DeleteItemAction {
    type: typeof DELETE_ITEM;
    item: ShoppingItemModel;
}

export interface DeleteItemSuccessAction {
    type: typeof DELETE_ITEM_SUCCESS;
    item: ShoppingItemModel;
}


export interface CheckItemAction {
    type: typeof CHECK_ITEM;
    id: number;
}


export interface UpdateItemAction {
    type: typeof UPDATE_ITEM;
    item: ShoppingItemModel;
}

export interface UpdateItemSuccessAction {
    type: typeof UPDATE_ITEM_SUCCESS;
    item: ShoppingItemModel;
}

export interface OpenEditorAction {
    type: typeof OPEN_EDITOR;
    item?: ShoppingItemModel;
}


export interface CloseEditorAction {
    type: typeof CLOSE_EDITOR;
}

export interface FetchItemsAction {
    type: typeof FETCH_ITEMS;
}

export interface SetItemsAction {
    type: typeof SET_ITEMS;
    items: ShoppingItemModel[];
}

export interface SetLoadingAction {
    type: typeof SET_LOADING;
    isLoading: boolean
}

export interface ShoppingItemModel {
    id?: number;
    name?: string;
    description?: string;
    quantity?: number;
    purchased?: boolean;
}


export type ActionTypes =
    | AddItemAction
    | AddItemSuccessAction
    | CheckItemAction
    | OpenEditorAction
    | DeleteItemAction
    | DeleteItemSuccessAction
    | UpdateItemAction
    | UpdateItemSuccessAction
    | CloseEditorAction
    | FetchItemsAction
    | SetItemsAction
    | SetLoadingAction;