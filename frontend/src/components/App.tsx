import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import ShoppingItemEditor from '../containers/ShoppingItemEditor';
import VisibleShoppingList from '../containers/VisibleShoppingList';
import {fetchItems} from '../store/actions';

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchItems());
    });

    return (
        <div>
            <VisibleShoppingList/>
            <ShoppingItemEditor/>
        </div>
    );
}