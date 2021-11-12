import React from 'react'
import { addSettler } from '../services/colono.js'

const FormularioColono = () => {
    return (
        <div className="container">
            <div className="card  mb-3 mb-3 mt-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://www.elegircarrera.net/blog/wp-content/uploads/2017/11/personas-importantes-universidad-amigos-2000x1200.jpg" className="img-fluid rounded-middle " alt="..." />
                    </div>
                    <div className="col-md-8">
                        <form>
                            <div className="card-header bg-color2 text-white"><h5 className="card-title">Registro de Colono</h5></div>
                            <div className="card-body">


                                <div className="row">
                                    <div className="col-md-4">
                                        <label for="exampleInputEmail1" className="form-label">Nombre (s)</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="col-md-4">
                                        <label for="exampleInputEmail1" className="form-label">Primer Apellido</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="col-md-4">
                                        <label for="exampleInputEmail1" className="form-label">Segundo Apellido</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-md-6">
                                        <label for="exampleInputEmail1" className="form-label">Teléfono</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="exampleInputEmail1" className="form-label">Fotografía</label>
                                        <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>

                                <hr />


                            </div>
                            <div className="card-header bg-color2 text-white"><h5 className="card-title">Domicilio - Colono</h5></div>
                            <div className="card-body">


                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <label for="exampleInputEmail1" className="form-label">Colono</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Seleccionar...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-3 right">
                                        <button type="submit" className="btn btn-gold" onClick={addSettler}>Confirmar</button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormularioColono
