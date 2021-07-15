import "./ExpenseDate.css";

function ExpenseDate(props) {
    const month = props.date.toLocaleString("en-US", { month: "long" }); //extract to keep JSX code clean
    const day = props.date.toLocaleString("en-US", { day: "2-digit" }); //extract to keep JSX code clean
    const year = props.date.getFullYear(); //extract to keep JSX code clean

    return (
        <div className="expense-date">
            <div className="expense-date__year">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;
