// eslint-disable-next-line import/no-anonymous-default-export
export default {
    consultar: (idListaPago) => {
        return fetch(

            "https://deadcousing.pythonanywhere.com/listaPago/mostrar",
            {
                method: "POST",
                headers: new Headers({
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                    'Access-Control-Allow-Headers': 'Authorization,Lang'
                }),
                body: JSON.stringify({
                    idListaPago: idListaPago
                }),
            })
            .then(response => response.json())
            .then(data => { return data });
    },
    agregar: (listaPago) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/listaPago/agregar",
            {
                method: "POST",
                headers: new Headers({
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                    'Access-Control-Allow-Headers': 'Authorization,Lang'
                }),
                body: JSON.stringify({
                    motivoPago: listaPago.motivoPago,
                    monto: listaPago.monto,
                    descripcion: listaPago.descripcion,
                    fechaFin: listaPago.fechaFin,
                }),
            })
            .then(response => response.json())
            .then(data => { return data });
    },
    modificar: (listaPago) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/listaPago/modificar",
            {
                method: "POST",
                headers: new Headers({
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                    'Access-Control-Allow-Headers': 'Authorization,Lang'
                }),
                body: JSON.stringify({
                    idListaPago: listaPago.idListaPago,
                    motivoPago: listaPago.motivoPago,
                    monto: listaPago.monto,
                    descripcion: listaPago.descripcion,
                    fechaFin: listaPago.fechaFin,
                }),
            })
            .then(response => response.json())
            .then(data => { return data });
    },
    eliminar: (idListaPago) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/listaPago/desactivar",
            {
                method: "POST",
                headers: new Headers({
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                    'Access-Control-Allow-Headers': 'Authorization,Lang'
                }),
                body: JSON.stringify({
                    idListaPago: idListaPago,
                }),
            })
            .then(response => response.json())
            .then(data => { return data });
    },
    activar: (idListaPago) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/listaPago/activar",
            {
                method: "POST",
                headers: new Headers({
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                    'Access-Control-Allow-Headers': 'Authorization,Lang'
                }),
                body: JSON.stringify({
                    idListaPago: idListaPago,
                }),
            })
            .then(response => response.json())
            .then(data => { return data });
    }

}