import  firebaseDB from '../firebase';
import MaterialTable from 'material-table'
import React, { useEffect, useState } from 'react';

export function IndividualParameter(){
  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "id" },
    { title: "Pollutant", field: "name" },
    { title: "Value", field: "phone" },
    { title: "Concentration", field: "email" },
    { title: "Units", field: 'website' }
  ]
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
      })
  }, [])

  return (
    <div >
      <h4 align='center'>Real-time Environmental Parameters Value</h4>
      <MaterialTable
        title="Pollutants Detail"
        data={data}
        columns={columns}
      />
    </div>
  );
}

