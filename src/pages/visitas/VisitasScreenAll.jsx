import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const VisitasScreenAll = () => {
  const handleFetch = async ({ url, method, body, type }) => {
    switch (method) {
      case "POST":
        await fetch(url, {
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
        await fetch(url, {
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
  const state = useSelector((state) => state.visita);

  useEffect(() => {
    handleGetAll();
  }, []);

  const handleGetAll = () => {
    handleFetch({
      url: "https://deadcousing.pythonanywhere.com/visita/mostrar",
      method: "POST",
      body: JSON.stringify({
        idVisita: 0
      }),
      type: "GET_VISITAS",
    });
  };

  const Visitas = {};
  Visitas.desactivarVisita = async (idVisita) => {
    console.log(idVisita);
    return fetch("https://deadcousing.pythonanywhere.com/visita/entradaVisita", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
        "Access-Control-Allow-Headers": "Authorization, Lang",
      },
      body: JSON.stringify({
        idVisita: idVisita,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });
  };

  const desactivarVisitas = async (idVisita) => {
    console.log(idVisita);
    const response = await Visitas.desactivarVisita(idVisita);
    console.log(response);
    handleGetAll();
  };

  Visitas.salidaVisita = async (idVisita) => {
    console.log(idVisita);
    return fetch("https://deadcousing.pythonanywhere.com/visita/salidaVisita", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
        "Access-Control-Allow-Headers": "Authorization, Lang",
      },
      body: JSON.stringify({
        idVisita: idVisita,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });
  };

  const salidaVisitas = async (idVisita) => {
    console.log(idVisita);
    const response = await Visitas.salidaVisita(idVisita);
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
            <th>Matricula</th>
            <th>Modelo</th>
            <th>Color</th>
            <th>options</th>
          </tr>
        </thead>
        <tbody>
          {state.visitas === null || state.visitas === undefined ?
            <div class="d-flex justify-content-center">
              <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            : state.visitas.map((visitas) => {
              return (
                <tr id={visitas.idVisita}>
                  <td>{visitas.nombre}</td>
                  <td>{visitas.matriculaVehiculo}</td>
                  <td>{visitas.modelo}</td>
                  <td>{visitas.color}</td>
                  <td>
                    {/* {viviendas.fechaEntrada === "Sat, 01 Jan 2000 00:00:00 GMT" || viviendas.fechaSalida === "Sat, 01 Jan"  } */}
                    <button className="btn-success btn" onClick={() => {
                      salidaVisitas(visitas.idVisita);
                    }}> Salida </button>
                    <br />
                    <button
                      className="btn-danger btn"
                      onClick={() => {
                        desactivarVisitas(visitas.idVisita);
                      }}
                    >
                      {" "}
                      Registar Entrada{" "}
                    </button>
                  </td>
                </tr>
              )

            })}
        </tbody>
      </table>
    </div>
  );
};

export default VisitasScreenAll;
