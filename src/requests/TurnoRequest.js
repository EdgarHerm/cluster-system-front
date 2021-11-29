// eslint-disable-next-line import/no-anonymous-default-export
export default {
    mostrar: () => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/turno/mostrar", {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Authorization,Lang'
            }),
            body: null
        })
            .then(response => {
                console.log(response);
                return response.json()
            })
            .then(data => {
                console.log(data);
                return data;
            });
    },
    agregar: (turno) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/turno/agregar", {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Authorization,Lang'
            }),
            body: JSON.stringify({
                horaInicio: turno.horaInicio,
                horaFin: turno.horaFin
            })
        })
            .then(response => { return response.json() })
            .then(data => { return data; });
    },
    eliminar: (idTurno) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/turno/desactivar", {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Authorization,Lang'
            }),
            body: JSON.stringify({
                idTurno: idTurno
            })
        })
            .then(response => { return response.json() })
            .then(data => { return data; });
    },

}