import React, { useState } from "react";
import Empleados from "../../requests/Empleados";

const PersonalScreen = ({ empleado, history }) => {
  const [data, setData] = useState({
    idEmpleado: empleado.idEmpleado,
    idPersona: empleado.idPersona,
    idUsuario: empleado.idUsuario,
    correo: empleado.correo,
    contrasenia: empleado.contrasenia,
    idRol: empleado.idRol,
    nombre: empleado.nombre,
    apellidos: empleado.apellidos,
    telefono: empleado.telefono,
    estatus: 1,
    empresa: empleado.empresa,
    zona: empleado.zona,
    turno: empleado.turno,
  });
  const { correo, contrasenia,  idRol,nombre,apellidos,telefono,estatus,empresa,zona,turno } = data;
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    Empleados.editar(data);
    history.push("/personal");
  };
  const image =
    "https://media.istockphoto.com/photos/security-guard-listening-to-earpiece-against-building-picture-id614438318";
  return (
    <div className="container">
      <form action="" className="m-5 bg-white">
        <div class="card-header  bg-color2 text-center mb-2">
          <h5 class="card-title">Edicion de Empleado</h5>
        </div>
        <div className="row ">
          <div className="col-4 text-center">
            <img
              src={image}
              alt="..."
              className="img-fluid rounded-middle m-2"
            />

            <div className="form-group mt-3 mb-3">
              <button
                type="submit"
                className="btn btn-gold"
                onClick={handleEdit}
              >
                Editar
              </button>
            </div>
          </div>
          <div className="col-8">
            <div className="row m-2">
              <div class="card-header  bg-color2">
                <h5 class="card-title">Datos Personales</h5>
              </div>
              <div className="form-group mt-3 col-6">
                <label htmlFor="">Nombres</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  id="nombre"
                  value={nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                />
              </div>
              <div className="form-group mt-3 col-6">
                <label htmlFor="">Apellidos</label>
                <input
                  type="text"
                  className="form-control"
                  name="apellidos"
                  id="apellidos"
                  value={apellidos}
                  onChange={handleChange}
                  placeholder="Apellidos"
                />
              </div>
              <div className="form-group mt-3 col-6">
                <label htmlFor="">Teléfono</label>
                <input
                  type="text"
                  className="form-control"
                  name="telefono"
                  id="telefono"
                  value={telefono}
                  onChange={handleChange}
                  placeholder="Telefono"
                />
              </div>
            </div>
            <div className="row m-2">
              <div class="card-header  bg-color2">
                <h5 class="card-title">Datos de Usuario</h5>
              </div>
              <div className="form-group mt-3 col-6">
                <label htmlFor="">Correo</label>
                <input
                  type="email"
                  className="form-control"
                  name="correo"
                  id="correo"
                  value={correo}
                  onChange={handleChange}
                  placeholder="Correo"
                />
              </div>
              <div className="form-group mt-3 col-6">
                <label htmlFor="">Rol</label>
                <select
                  name="idRol"
                  id="idrol"
                  value={idRol}
                  className="form-control"
                  onChange={handleChange}
                >
                  <option default>Seleccione</option>
                  <option value="1">Administrador</option>
                  <option value="2">Empleado</option>
                </select>
              </div>
              <div className="form-group mt-3 col-6">
                <label htmlFor="">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="contrasenia"
                  id="contrasenia"
                  value={contrasenia}
                  onChange={handleChange}
                  placeholder="Contraseña"
                />
              </div>
              <div className="form-group mt-3 col-6">
                <label htmlFor="">Confirmar Contraseña</label>
                <input
                  name="confirmarContraseña"
                  type="password"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row m-2">
              <div class="card-header  bg-color2">
                <h5 class="card-title">Datos de Personal</h5>
              </div>
              <div className="form-group mt-3 col-6">
                <label htmlFor="">Empresa</label>
                <input
                  type="text"
                  className="form-control"
                  name="empresa"
                  id="empresa"
                  value={empresa}
                  onChange={handleChange}
                  placeholder="Empresa"
                />
              </div>
              <div className="form-group mt-3 col-6">
                <label htmlFor="">Zona</label>
                <input
                  type="text"
                  className="form-control"
                  name="zona"
                  id="zona"
                  value={zona}
                  onChange={handleChange}
                  placeholder="Zona"
                />
              </div>
            </div>
            <div className="row m-2">
              <div class="card-header  bg-color2 mt-2 ">
                <h5 class="card-title">Turno - Personal</h5>
              </div>
              <div className="form-group mt-3 col-6">
                <label htmlFor="">Turno</label>
                <select
                  value={turno}
                  name="turno"
                  id="turno"
                  className="form-control"
                  onChange={handleChange}
                >
                  {/* {state.turnos.map((turno) => {
                    return (
                      <option value={turno.idTurno}>
                        {turno.horaInicio}- {turno.horaFin}
                      </option>
                    );
                  })} */}
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalScreen;
