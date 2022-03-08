    import React, {Component} from 'react';
    import {Bar, Line} from 'react-chartjs-2';
    import Chart from 'chart.js/auto'
    export class Aqihistory extends Component{
      constructor(props){
        super(props);
        this.state = {
          chartData:{
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
            datasets:[
              {
                label:'AQI',
                data:[
                  617594,
                  181045,
                  153060,
                  106519,
                  105162,
                  95072
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
          }
        }
      }
      static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'right',
        location:'City'
      }
    
      render(){
        return (
          <div>
          <div id='features' className='text-center' style={{marginTop:"50px"}}>
                  <div className='container'>
                  <div className='col-md-10 col-md-offset-1 section-title'>
                  <h2>AQI History</h2>
                  </div>
                  </div>
                
            </div>
             <div className="chart"  style={{padding:"5%;"}}>
             <Bar
               data={this.state.chartData}
               options={{
                 title:{
                   display:true,
                   text:'Last Week AQI',
                   fontSize:25
                 },
                 legend:{
                   display:true,
                   position:'right'
                 }
               }}
             />
             </div>
             </div>
);
}
}