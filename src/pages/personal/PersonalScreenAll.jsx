import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Empleados from "../../requests/Empleados";
import { Link } from "react-router-dom";
import TableEmpleados from "./TableEmpleados";

const PersonalScreenAll = () => {
  const dispatch = useDispatch();
  const empleado = useSelector((state) => state.empleado.empleado);
  const [init, setInit] = useState(1);

  useEffect(() => {
    if (init === 1) {
      handleGetAll();
      setInit(0);
    }
  }, [empleado]);

  const handleGetAll = async () => {
    let response = await Empleados.consultar(0);
    dispatch({
      type: "GET_EMPLEADOS",
      payload: response,
    });
  };

  return (
    <div className="container bg-white m-12">
      <div className="card-header  bg-color2 text-center ">
        <h5 className="card-title">Registro de Personal</h5>
      </div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-active-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-active"
            type="button"
            role="tab"
            aria-controls="nav-active"
            aria-selected="true"
          >
            Activos
          </button>
          <button
            className="nav-link"
            id="nav-inactive-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-inactive"
            type="button"
            role="tab"
            aria-controls="nav-inactive"
            aria-selected="false"
          >
            Inactivos
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-active"
          role="tabpanel"
          aria-labelledby="nav-active-tab"
        >
          <TableEmpleados empleados={empleado} estatus={1} />
        </div>
        <div
          className="tab-pane fade"
          id="nav-inactive"
          role="tabpanel"
          aria-labelledby="nav-inactive-tab"
        >
          <TableEmpleados empleados={empleado} estatus={0} />
        </div>
      </div>
    </div>
  );
};

export default PersonalScreenAll;
{
}
