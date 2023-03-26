import React from 'react'
import "./LineChart.css"
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

const LineChart = ({ coinPrice, coinTimeStamp }) => {

    const data={
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice
            }
        ]
    };

    const options={
        scales:{
            yAxes: [
                {
                    ticks:{
                        beginAtZero: true
                    }
                }
            ]
        }
    };

  return (
    <section className='line-chart'>
      <Line data={data} options={options}/>
    </section>
  );
};

export default LineChart;
