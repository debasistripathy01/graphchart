import React from 'react'
import {Line} from "react-chartjs-2";
const LineChart = () => {

    const data ={
        label:["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                label: "Sales for 2020(M)",
                data: [3, 2,2, 1,5],
                borderColor: ["rgba(255, 206, 86, 0.2)"],
                backgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
                pointBorderColor: 'rgba(255, 206, 86, 0.3)'
            },
            {
                label: "Sales for 2019(M)",
                data: [1,2, 5, 3, 8],
                borderColor: ["rgba(255, 206, 86, 0.2)"],
                backgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
                pointBorderColor: 'rgba(255, 206, 86, 0.3)'
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: "Line Chart"
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 6, 
                        stepSize: 1
                    }
                }
            ]
        }
    }
  return (
    <Line data={data}/>
  ) 
}

export default LineChart