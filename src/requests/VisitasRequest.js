// eslint-disable-next-line import/no-anonymous-default-export
export default {
    consultar: (idVisita) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/visita/mostrar", {
            method: "POST",
            headers: new Headers({
                'Accept': 'application/json',
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Authorization,Lang'
            }),
            body: JSON.stringify({
                idVisita: idVisita
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
    }
}