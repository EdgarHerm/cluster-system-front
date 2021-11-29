// eslint-disable-next-line import/no-anonymous-default-export
export default {
  consultar: (idEmpleado) => {
    return fetch("https://deadcousing.pythonanywhere.com/empleado/mostrar", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
        "Access-Control-Allow-Headers": "Authorization,Lang",
      }),
      body: JSON.stringify({
        idEmpleado: idEmpleado,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("ok");
          return response.json();
        } else {
          console.log(response);
        }
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  eliminar: (idEmpleado) => {
    return fetch("https://deadcousing.pythonanywhere.com/empleado/desactivar", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
        "Access-Control-Allow-Headers": "Authorization,Lang",
      }),
      body: JSON.stringify({
        idEmpleado: idEmpleado,
      }),
    }).then((response) => {
      if (response.ok) {
        console.log("ok");
        return response.json();
      } else {
        console.log(response);
      }
    });
  },
  activar: (idEmpleado) => {
    return fetch("https://deadcousing.pythonanywhere.com/empleado/activar", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
        "Access-Control-Allow-Headers": "Authorization,Lang",
      }),
      body: JSON.stringify({
        idEmpleado: idEmpleado,
      }),
    }).then((response) => {
      if (response.ok) {
        console.log("ok");
        return response.json();
      } else {
        console.log(response);
      }
    });
  },
  agregar: (empleado) => {
    return fetch("https://deadcousing.pythonanywhere.com/empleado/agregar", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
        "Access-Control-Allow-Headers": "Authorization,Lang",
      }),
      body: JSON.stringify({
        correo: empleado.correo,
        contraseña: empleado.contrasenia,
        idRol: empleado.idRol,
        nombre: empleado.nombre,
        apellidos: empleado.apellidos,
        telefono: empleado.telefono,
        estatus: 1,
        empresa: empleado.empresa,
        zona: empleado.zona,
        turno: empleado.turno,
      }),
    })
      .then((response) => {
        if (response.ok) return response.json();
        else console.log(response);
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  editar: (empleado) => {
    return fetch("https://deadcousing.pythonanywhere.com/empleado/modificar", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
        "Access-Control-Allow-Headers": "Authorization,Lang",
      }),
      body: JSON.stringify({
        idEmpleado: empleado.idEmpleado,
        idPersona: empleado.idPersona,
        idUsuario: empleado.idUsuario,
        correo: empleado.correo,
        contraseña: empleado.contrasenia,
        idRol: empleado.idRol,
        nombre: empleado.nombre,
        apellidos: empleado.apellidos,
        telefono: empleado.telefono,
        estatus: 1,
        empresa: empleado.empresa,
        zona: empleado.zona,
        turno: empleado.turno,
      }),
    })
      .then((response) => {
        if (response.ok) return response.json();
        else console.log(response);
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
