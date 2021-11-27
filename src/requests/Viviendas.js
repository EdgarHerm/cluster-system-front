// eslint-disable-next-line import/no-anonymous-default-export
export default {
    consultar: (idDomicilio) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/domicilio/mostrar", {
            method: "POST",
            headers: new Headers({
                'Accept': 'application/json',
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Authorization,Lang'
            }),
            body: JSON.stringify({
                idDomicilio: idDomicilio
            }),
        }).then((response) => {
            if (response.ok) {
                console.log('ok')
                return response.json();
            } else {
                console.log(response);
            }
        }).then((data) => {
            return data;
        }).catch((error) => {
            console.log(error);
        });
    },
    eliminar: (idDomicilio) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/domicilio/desactivar", {
            method: "POST",
            headers: new Headers({
                'Accept': 'application/json',
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Authorization,Lang'
            }),
            body: JSON.stringify({
                idDomicilio: idDomicilio
            }),
        }).then((response) => {
            if (response.ok) {
                console.log('ok')
                return response.json();
            } else {
                console.log(response);
            }
        })
    },
    activar: (idDomicilio) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/domicilio/activar", {
            method: "POST",
            headers: new Headers({
                'Accept': 'application/json',
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Authorization,Lang'
            }),
            body: JSON.stringify({
                idDomicilio: idDomicilio
            }),
        }).then((response) => {
            if (response.ok) {
                console.log('ok')
                return response.json();
            } else {
                console.log(response);
            }
        })
    },
    agregar: (domicilio) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/domicilio/agregar", {
            method: "POST",
            headers: new Headers({
                'Accept': 'application/json',
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Authorization,Lang'
            }),
            body: JSON.stringify({
                calle: domicilio.calle,
                numero: domicilio.numero,
                descripcion: domicilio.descripcion
            }),
        }).then((response) => {
            if (response.ok) return response.json(); else console.log(response);
        }).then((data) => { return data; })
            .catch((error) => { console.log(error); });
    },
    editar: (domicilio) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/domicilio/modificar", {
            method: "POST",
            headers: new Headers({
                'Accept': 'application/json',
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Authorization,Lang'
            }),
            body: JSON.stringify({
                idDomicilio: domicilio.idDomicilio,
                calle: domicilio.calle,
                numero: domicilio.numero,
                descripcion: domicilio.descripcion
            }),
        }).then((response) => {
            if (response.ok) return response.json(); else console.log(response);
        }).then((data) => { return data; })
            .catch((error) => { console.log(error); });
    },
}