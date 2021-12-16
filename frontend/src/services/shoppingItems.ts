import axios from "axios";
import {ShoppingItemModel} from "../store/types";

const base_url = 'http://localhost:8000/v1/';


export function gelAll() {
    return axios.get(base_url + 'items')
}

export function addItem(item: ShoppingItemModel) {
    return axios.post(base_url + 'items', item)
}

export function deleteItem(id) {
    return axios.delete(base_url + 'items/'+id);
}

export function updateItem(item: ShoppingItemModel) {
    return axios.put(base_url + 'items/'+item.id, item);
}