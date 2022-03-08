
import React from 'react';
import  firebaseDB from '../firebase';
import { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid
} from "recharts";
import { format, parseISO,subDays } from "date-fns";

// const initialState ={
//   date : new Date().toISOString(),
//   aqi: 120
// }


export const EachSecAqi = () => {
  
  // const [aqi, setData] = useState(10);

  
  // // 1. After each value changed aqi update the state
  // useEffect(() => {
  //   firebaseDB.child('aqi').on('value', snapshot=>{
             
  //     if(snapshot.val()!=null){   
  //       setData(
  //         snapshot.val()
  //       )
  //     }
  //     else
  //     setData()
  //    })
  //   })

  const data = [];
for (let num = 30; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    aqi: 1 + Math.random(),
  });
}
  
  // 2. render the line chart using the state
  return (
 
    <div >
      <h1 className="eachsecaqiheader">Real Time AQI Update</h1>
      {/* <LineChart width={550} height={400} data={data}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart> */}
      <ResponsiveContainer width="60%" height={400}  >
      <AreaChart data={data} className="eachsecaqi">
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area dataKey="aqi" stroke="#2451B7" fill="url(#color)" />
        <Area dataKey="aqi" stroke="#6251B7" fill="url(#color)" />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getDate() % 7 === 0) {
              return format(date, "MMM, d");
            }
            return "";
          }}
        />

        <YAxis
          datakey="data"
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={(number) => `$${number.toFixed(2)}`}
        />

        <Tooltip />

        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
    </div>
  );
};

// function CustomTooltip({ active, payload, label }) {
//   if (active) {
//     return (
//       <div className="tooltip">
//         <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
//         <p>${payload[0].value.toFixed(2)} CAD</p>
//       </div>
//     );
//   }
//   return null;
// }