import { connect } from 'react-redux';
import { MenuItem } from '../components/MenuItem';

import {
    removeItem,
    updateItemPrice,
    updateItemQuantity
} from '../store/items/actions';
import { selectItemTotal } from '../store/items/selectors';

const mapStateToProps = (state, props) => ({
    total: selectItemTotal(state, props)
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        remove: () => dispatch(removeItem(ownProps.uuid)),
        updatePrice: (price) => dispatch(updateItemPrice(ownProps.uuid, price)),
        updateQuantity: (price) =>
            dispatch(updateItemQuantity(ownProps.uuid, price))
    };
};

export const MenuItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuItem);
