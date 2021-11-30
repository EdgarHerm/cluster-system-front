import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VisitasRequest from "../../requests/VisitasRequest";
import TablaVisitas from "./componentes/TablaVisitas";

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

  const handleEntrada = async ({ idVisita }) => {
    VisitasRequest.entrada(idVisita);
    handleGetAll();
  };
  const handleSalida = async ({ idVisita }) => {
    VisitasRequest.salida(idVisita);
    handleGetAll();
  };
  const handleCancelar = async ({ idVisita }) => {
    VisitasRequest.calcelar(idVisita);
    handleGetAll();
  };

  const [init, setInit] = useState(1)

  useEffect(() => {
    if (init === 1) {
      handleGetAll();
      setInit(0);
    }
  }, [visitas])


  const dateFormat = (date) => {
    console.log(date)
    let dateSplit = date.split(' ');
    let dia = dateSplit[1];
    let mes = dateSplit[2];
    let anio = dateSplit[3];
    let hora = dateSplit[4];
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
    return `${anio}-${mes}-${dia} ${hora}`;
  }

  return (
    <>

      <div className="container" >
        <div action="" className="bg-white m-5 ">

          <div className="card-header  bg-color2 text-center mb-2">
            <h5 className="card-title">Registro de Visitas</h5>
          </div>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link active" id="nav-active-tab" data-bs-toggle="tab" data-bs-target="#nav-active" type="button" role="tab" aria-controls="nav-active" aria-selected="true">Activos</button>
              <button className="nav-link" id="nav-inactive-tab" data-bs-toggle="tab" data-bs-target="#nav-inactive" type="button" role="tab" aria-controls="nav-inactive" aria-selected="false">Cancelados</button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-active" role="tabpanel" aria-labelledby="nav-active-tab">
              <TablaVisitas
                visitas={visitas}
                estatus={1}
                handleEntrada={handleEntrada}
                handleSalida={handleSalida}
                handleCancelar={handleCancelar}
                dateFormat={dateFormat}
              />
            </div>
            <div className="tab-pane fade" id="nav-inactive" role="tabpanel" aria-labelledby="nav-inactive-tab">
              <TablaVisitas
                visitas={visitas}
                estatus={0}
                handleEntrada={handleEntrada}
                handleSalida={handleSalida}
                handleCancelar={handleCancelar}
                dateFormat={dateFormat}
              />
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default VisitasScreenAll;
