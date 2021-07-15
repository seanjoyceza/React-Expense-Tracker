import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            {/* selfclosing element if it has no attributes in between: */}
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">€{props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
