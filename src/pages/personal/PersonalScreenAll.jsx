import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PersonalScreenAll = () => {
  const handleFetch = ({ url, method, body, type }) => {
    switch (method) {
      case "POST":
        fetch(url, {
          method: method,
          headers: new Headers({
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
            "Access-Control-Allow-Headers": "Authorization,Lang",
          }),
          body: body,
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              console.log(response);
            }
          })
          .then((data) => {
            // console.log(data)
            console.log(type);
            dispatch({
              type: type,
              payload: data,
            });
          })
          .catch((error) => {
            console.log(error);
          });
        break;
      case "GET":
        fetch(url, {
          method: method,
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else console.log(response);
          })
          .then((data) => {
            dispatch({
              type: type,
              payload: data,
            });
          })
          .catch((error) => {
            console.log(error);
          });
        break;
      default:
        break;
    }
  };

  const dispatch = useDispatch();
  const { empleado } = useSelector((state) => state.empleado);

  useEffect(() => {
    handleGetAll();
  }, []);

  const handleGetAll = () => {
    handleFetch({
      url: "https://deadcousing.pythonanywhere.com/empleado/mostrar",
      method: "POST",
      body: JSON.stringify({
        idEmpleado: 0,
      }),
      type: "GET_EMPLEADOS",
    });
  };
  const Empleados = {};
  Empleados.desactivarEmpleado = async (idEmpleado) => {
    console.log(idEmpleado);
    return fetch("https://deadcousing.pythonanywhere.com/empleado/desactivar", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
        "Access-Control-Allow-Headers": "Authorization, Lang",
      },
      body: JSON.stringify({
        idEmpleado: idEmpleado,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });
  };

  const desactivarEmpleados = async (idEmpleado) => {
    console.log(idEmpleado);
    const response = await Empleados.desactivarEmpleado(idEmpleado);
    console.log(response);
    handleGetAll();
  };

  return (
    <div className="container bg-white m-12">
      <div className="card-header  bg-color2 text-center ">
        <h5 className="card-title">Registro de Turnos</h5>
      </div>
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
          {empleado.map((empleado) => {
            return (
              <tr id={empleado.idEmpleado}>
                <td>{empleado.nombre}</td>
                <td>{empleado.apellidos}</td>
                <td>{empleado.telefono}</td>
                <td>{empleado.empresa}</td>
                <td>{empleado.zona}</td>
                <td>{empleado.horaInicio}</td>
                <td>{empleado.horaFin}</td>
                <td>
                  <button type="button" className="btn btn-primary">
                    Editar
                  </button>
                  <button
                    className="btn-danger btn"
                    onClick={() => {
                      desactivarEmpleados(empleado.idEmpleado);
                    }}
                  >
                    {" "}
                    Eliminar{" "}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PersonalScreenAll;
