import React from 'react'

const FormularioColono = () => {
    const image ='https://www.elegircarrera.net/blog/wp-content/uploads/2017/11/personas-importantes-universidad-amigos-2000x1200.jpg'
    return (
        
        <div className="container">
            <form action="" className="form-control m-5 bg-color2">
                <div className="row justify-content-center align-items-center ">
                    <div className="col-4 text-center  " >
                        <img src={image} alt="..."  style={{width:"100%" }}  className="img-fluid rounded-middle " />
                    </div>
                    <div className="col-8">
                        <div className="form-group mt-3">
                            <label htmlFor="">Calle</label>
                            <input name='calle' type="text" className="form-control" />
                        </div>
                        <div className="form-group  mt-3">
                            <label htmlFor="">Número</label>
                            <input name='numero' type="text" className="form-control" />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="">Descripción</label>
                            <textarea name='descripcion' className="form-control" rows="3"></textarea>
                        </div>
                        <div className="form-group mt-3 mb-3">
                            <button type="submit" className="btn btn-gold">Guardar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormularioColono
