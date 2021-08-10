import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((element) => element.value);
    const totalMaxValue = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => {
                return (
                    <ChartBar
                        key={dataPoint.label}
                        maxValue={totalMaxValue}
                        label={dataPoint.label}
                        value={dataPoint.value}
                    />
                );
            })}
        </div>
    );
};

export default Chart;
