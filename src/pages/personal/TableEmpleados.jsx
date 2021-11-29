import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Empleados from "../../requests/Empleados";

export const TableEmpleados = ({ empleados, estatus }) => {

  const dispatch = useDispatch();

  const handleGetAll = async () => {
    let response = await Empleados.consultar(0);
    dispatch({
      type: 'GET_EMPLEADOS',
      payload: response
    })
  }
  const handleDelete = ({ idEmpleado }) => {
    Empleados.eliminar(idEmpleado);
    handleGetAll();
  }

  const handleActive = ({ idEmpleado }) => {
    Empleados.activar(idEmpleado);
    handleGetAll();
  }
  return (
    <table className="table table-light">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Telefono</th>
          <th>Empresa</th>
          <th>Zona</th>
          <th>Hora inicio</th>
          <th>Hora fin</th>
          <th>options</th>
        </tr>
      </thead>
      <tbody>
        {empleados === null || empleados === undefined ?

          <div class="d-flex justify-content-center">
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          : empleados.filter(empleado => empleado.estatus === estatus).map(empleado => {
            return (
              <tr id={empleado.idEmpleado}>
                <td>{empleado.nombre}</td>
                <td>{empleado.apellidos}</td>
                <td>{empleado.telefono}</td>
                <td>{empleado.empresa}</td>
                <td>{empleado.zona}</td>
                <td>{empleado.horaInicio}</td>
                <td>{empleado.horaFin}</td>
                {empleado.estatus === 1 ?
                  <td>
                    <button
                      className="btn btn-danger m-2"
                      onClick={() =>
                        handleDelete({ idEmpleado: empleado.idEmpleado })
                      }
                    >
                      Delete
                    </button>
                    <Link to={`/personal/${empleado.idEmpleado}`}>
                      <button className="btn btn-warning m-2">Edit</button>
                    </Link>
                  </td>
                  : null}
                {empleado.estatus === 0 ?
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        handleActive({ idEmpleado: empleado.idEmpleado })
                      }
                    >
                      Activate
                    </button>
                  </td>
                  : null}
              </tr>
            );
          })}
      </tbody>
    </table>
  )
}

export default TableEmpleados