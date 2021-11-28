/* eslint-disable import/no-anonymous-default-export */
export default {
    consultar: (idColono) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/colono/mostrar"
            , {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                    'Access-Control-Allow-Headers': 'Authorization,Lang'
                }),
                body: JSON.stringify({
                    idColono: idColono
                })
            })
            .then(response => response.json())
            .then(data => { return data })
    },
    agregar: (colono) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/colono/agregar"
            , {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                    'Access-Control-Allow-Headers': 'Authorization,Lang'
                }),
                body: JSON.stringify({
                    fotografia: colono.fotografia,
                    correo: colono.correo,
                    contraseña: colono.contrasena,
                    idRol: colono.idRol,
                    nombre: colono.nombre,
                    apellidos: colono.apellidos,
                    telefono: colono.telefono,
                    idDomicilio: colono.idDomicilio
                })
            })
            .then(response => response.json())
            .then(data => { return data })
    },
    modificar: (colono) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/colono/modificar"
            , {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                    'Access-Control-Allow-Headers': 'Authorization,Lang'
                }),
                body: JSON.stringify({
                    idColono: colono.idColono,
                    idUsuario: colono.idUsuario,
                    idPersona: colono.idPersona,
                    idDomicilio: colono.idDomicilio,
                    fotografia: colono.fotografia,
                    correo: colono.correo,
                    contraseña: colono.contrasena,
                    idRol: colono.idRol,
                    nombre: colono.nombre,
                    apellidos: colono.apellidos,
                    telefono: colono.telefono
                })
            })
            .then(response => response.json())
            .then(data => { return data })
    },
    eliminar: (idColono) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/colono/desactivar"
            , {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                    'Access-Control-Allow-Headers': 'Authorization,Lang'
                }),
                body: JSON.stringify({
                    idColono: idColono
                })
            })
            .then(response => response.json())
            .then(data => { return data })
    },
    activar: (idColono) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/colono/activar"
            , {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                    'Access-Control-Allow-Headers': 'Authorization,Lang'
                }),
                body: JSON.stringify({
                    idColono: idColono
                })
            })
            .then(response => response.json())
            .then(data => { return data })
    }
}