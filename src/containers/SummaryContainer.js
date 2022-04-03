import { connect } from 'react-redux';
import { Summary } from '../components/Summary';

const mapStateToProps = (state) => {
    const subtotal = state.items.reduce(
        (sum, item) => sum + item.quantity * item.price
    );
    const tipAmount = subtotal * (state.tipPercentage / 100);
    const total = subtotal + tipAmount;

    console.log(subtotal, tipAmount, total);

    return { subtotal, tipAmount, total };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
