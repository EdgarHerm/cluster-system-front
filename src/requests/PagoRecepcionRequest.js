// eslint-disable-next-line import/no-anonymous-default-export
export default {
    consultar: (idRecepcion) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/recpcionPago/mostrar",
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
                    idRecepcion: idRecepcion
                }),
            })
            .then(response => response.json())
            .then(data => { return data});
    },
    agregar: (listaRecepcionPago) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/recpcionPago/agregar",
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
                    fechaPago: listaRecepcionPago.fechaPago,
                    fotEvidencia: listaRecepcionPago.fotoEvidencia,
                    fechaRecepcion: listaRecepcionPago.fechaRecepcion,
                    descripcion: listaRecepcionPago.descripcion,
                    idColono: listaRecepcionPago.idColono,
                    idListaPago: listaRecepcionPago.idListaPago
                }),
            })
            .then(response => {
                console.log(response);
                response.json()
            })
            .then(data => {
                console.log(data);
                return data
            });
    },
    cancelar: (idRecepcionPago) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/recpcionPago/cancelar",
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
                    idRecepcionPago: idRecepcionPago
                }),
            })
            .then(response => response.json())
            .then(data => { return data });
    },
    aceptar: (idRecepcionPago) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/recpcionPago/aceptar",
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
                    idRecepcionPago: idRecepcionPago
                }),
            })
            .then(response => response.json())
            .then(data => { return data });
    }
}