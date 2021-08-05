import React, { useState } from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = () => {
    const [selectedFilter, setSelectedFilter] = useState("");

    const filterChangeHandler = () => {
        setSelectedFilter(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select>
                    <option value="2022" onClick={filterChangeHandler}>
                        2022
                    </option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
