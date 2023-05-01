import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export function TransactionHistory({ items }) {
    return (
        <table className={css.transactionHistory}>
            <thead className={css.headingColumn}>
                <tr className={css.rows}>
                    <th className={css.headingRow}>Type</th>
                    <th className={css.headingRow}>Amount</th>
                    <th className={css.headingRow}>Currency</th>
                </tr>
            </thead>
            <tbody>
            {items.map(item => (
            <tr key={item.id} className={css.rows}>
                <td className={css.transactionData}>{item.type}</td>
                <td className={css.transactionData}>{item.amount}</td>
                <td className={css.transactionData}>{item.currency}</td>
            </tr>
      ))}
            </tbody>
        </table>    
    );
}

TransactionHistory.propTypes = {
items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
)
};