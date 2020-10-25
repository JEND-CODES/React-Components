import React, {Component} from 'react';

import styled from 'styled-components';
// Installation d'Highcharts : yarn add highcharts highcharts-react-official

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// Highcharts Options
const options = {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: 'LOREM IPSUM'
    },
    subtitle: {
        text: 'Lorem Ipsum'
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: [
            '2015', '2016', '2017', '2018', '2019', '2020'
        ],
        title: {
            text: 'Axe X Title'
        }
    },
    yAxis: {
        gridLineColor: 'transparent',
        labels: {
            enabled: true
        },
        title: {
            text: 'Axe Y Title'
        }
    },
    tooltip: {
        backgroundColor: 'white',
        style: {
            color: 'cornflowerblue',
            // fontWeight: 'bold',
            fontSize: '16px'
        },
        formatter: function () {
            return this.x + ' : ' + this.y + ' $';
        },

        //valueSuffix: ' 000'
    },
    colors: [
        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [
                0, '#0b4572'
                ],
                [1, '#5386ad']
            ]
        }
    ],
    series: [
        {

            showInLegend: true,
            name: 'Série Lorem Ipsum',
            cursor: 'pointer',
            data: [
                38, 30, 60, 30, 22, 58
            ],
            dataLabels: {
                enabled: true,
                borderRadius: 2,
                y: -8,
                color: 'cornflowerblue',
                formatter: function () {
                    return this.y + ' dollars $';
                }
            }
        }
    ]
}

export default class Chart extends Component {

    render() {
        return (
            <Box>
                <HighchartsReact highcharts={Highcharts} options={options} containerProps={{ className: "chart-component" }} />
            </Box>
        )
    }
}

const Box = styled.section `
  margin-top:75px;
  border: 0px solid cornflowerblue;
  padding: 20px;
  text-align:center;
  
  .chart-component {
    border:0px solid grey;
    width: 100%;
    height:500px;
  }
  
`;