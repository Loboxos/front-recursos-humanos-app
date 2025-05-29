import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { NumericFormat } from 'react-number-format';

export default function ListadoEmpleados() {
  const urlBase = "http://localhost:8080/api/empleados";
  const[empleados, setEmpleados] = useState([]);
  useEffect(() => {
    cargarEmpleados();
  },[]);
  const cargarEmpleados = async () => {  
    const resultado = await axios.get(urlBase);
    setEmpleados(resultado.data);
  }

  return (
    <div className='container'>
    <div className="container text-center" style={{margin:"30px"}}>
      <h3>Listado de Empleados</h3>
    </div>
  <table className="table table-striped table-hover align-middle">
  <thead className="table-dark">
    <tr>
      <th scope="col">id</th>
      <th scope="col">empleado</th>
      <th scope="col">Departamento</th>
      <th scope="col">Sueldo</th>
    </tr>
  </thead>
    <tbody>
      {
        empleados.map((empleado,indice) => (
          <tr key={indice}>
          <th scope="row">{empleado.id}</th>
          <td>{empleado.nombre}</td>
          <td>{empleado.departamento}</td>
          <td><NumericFormat 
          value={empleado.sueldo} 
          displayType={'text'} 
          thousandSeparator={true} 
          prefix={'$'} 
          decimalScale={2} 
          fixedDecimalScale={true} />
          </td>
        </tr>
        ))
      }
    </tbody>
  </table>
    </div>
  )
}
