import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VisitasRequest from "../../requests/VisitasRequest";

const VisitasScreenAll = () => {
  const dispatch = useDispatch();
  const visitas = useSelector((state) => state.visita.visitas);

  const handleGetAll = async () => {
    let response = await VisitasRequest.consultar(0);
    dispatch({
      type: "GET_VISITAS",
      payload: response['visitas'],
    });
  };

  const [init, setInit] = useState(1)

  useEffect(() => {
    if (init === 1) {
      handleGetAll();
      setInit(0);
    }
  }, [visitas])


  const dateFormat = (date) => {
    let dateSplit = date.split(' ');
    let dia = dateSplit[1];
    let mes = dateSplit[2];
    let anio = dateSplit[3];
    switch (mes) {
      case 'Jan':
        mes = '01';
        break;
      case 'Feb':
        mes = '02';
        break;
      case 'Mar':
        mes = '03';
        break;
      case 'Apr':
        mes = '04';
        break;
      case 'May':
        mes = '05';
        break;
      case 'Jun':
        mes = '06';
        break;
      case 'Jul':
        mes = '07';
        break;
      case 'Aug':
        mes = '08';
        break;
      case 'Sep':
        mes = '09';
        break;
      case 'Oct':
        mes = '10';
        break;
      case 'Nov':
        mes = '11';
        break;
      case 'Dec':
        mes = '12';
        break;
      default:
        mes = '0';
        break;
    }
    return `${anio}-${mes}-${dia}`;
  }

  return (
    <div className="container bg-white m-12">
      <div className="card-header  bg-color2 text-center ">
        <h5 className="card-title">Registro de Visitas</h5>
      </div>
      <table className="table table-light">
        <thead>
          <tr>
            <th>Visitante</th>
            <th>Domicilio</th>
            <th>Fecha Entrada</th>
            <th>Fecha Salida</th>
            <th>Colono</th>
            <th>Vehiculo</th>
            <th>Matricula</th>
          </tr>
        </thead>
        <tbody>
          {visitas === null || visitas === undefined ?
            <div class="d-flex justify-content-center">
              <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            : visitas.map((visita) => {
              return (
                <tr id={visita.idVisita}>
                  <td>{visita.nombreV}</td>
                  <td>{visita.calle + " #" + visita.numero}</td>
                  <td>
                    {
                      dateFormat(visita.fechaSalida) === "2000-01-01" ? "Visita Programada"
                        : dateFormat(visita.fechaSalida)
                    }
                  </td>
                  <td>{
                    dateFormat(visita.fechaSalida) === "2000-01-01" ? "Sin Salida"
                      : dateFormat(visita.fechaSalida)
                  }
                  </td>
                  <td>{visita.nombre}</td>
                  <td>{visita.modelo + " " + visita.color}</td>
                  <td>{visita.matricula}</td>
                </tr>
              )

            })}
        </tbody>
      </table>
    </div>
  );
};

export default VisitasScreenAll;
