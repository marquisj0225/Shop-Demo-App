import {connect} from 'react-redux';
import {checkItem, deleteItem, openEditor} from '../store/actions';
import ShoppingList from '../components/ShoppingList';
import {ShoppingItemsState} from "../store/reducers/shoppingItems";

const mapStateToProps = (state: { shoppingItems: ShoppingItemsState }) => {
    return {shoppingItems: state.shoppingItems.items, isLoading: state.shoppingItems.isLoading};
};
const mapDispatchToProps = (dispatch) => ({
    checkItem: (id) => dispatch(checkItem(id)),
    deleteItem: (item) => dispatch(deleteItem(item)),
    openItemEditor: (item) => dispatch(openEditor(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);