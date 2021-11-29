// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login: (user) => {
        return fetch(
            "https://deadcousing.pythonanywhere.com/sesion/login",
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
                    usuario: user.usuario,
                    contrasenia: user.contrasenia
                })
            })
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                let userData = data['colono']['0'];
                localStorage.setItem("token", userData['token']);
                sessionStorage.nombre = userData['nombre'] + " " + userData['apellidos'];
                sessionStorage.id = userData['idUsuario'];
                sessionStorage.idRol = userData['idRol'];
                return data['colono']['0']
            })
            .catch(error => {
                console.log(error);
                return error
            });
    }
}