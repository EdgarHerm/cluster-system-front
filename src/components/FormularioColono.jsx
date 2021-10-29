import React from 'react'

const FormularioColono = () => {
    return (
        <div className="container">
            <div className="container-fluid">
                <div class="card border-secondary mb-3 mb-3 mt-5">
                    <div class="row g-0">
                        <div class="col-md-4 center">
                            <img src="https://www.elegircarrera.net/blog/wp-content/uploads/2017/11/personas-importantes-universidad-amigos-2000x1200.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <form>
                                <div class="card-header bg-secondary text-white"><h5 class="card-title">Registro de Colono</h5></div>
                                <div class="card-body">


                                    <div className="row">
                                        <div class="col-md-4">
                                            <label for="exampleInputEmail1" class="form-label">Nombre (s)</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="col-md-4">
                                            <label for="exampleInputEmail1" class="form-label">Primer Apellido</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="col-md-4">
                                            <label for="exampleInputEmail1" class="form-label">Segundo Apellido</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div class="col-md-6">
                                            <label for="exampleInputEmail1" class="form-label">Teléfono</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="exampleInputEmail1" class="form-label">Fotografía</label>
                                            <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>

                                    <hr />


                                </div>
                                <div class="card-header bg-secondary text-white"><h5 class="card-title">Domicilio - Colono</h5></div>
                                <div className="card-body">


                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label for="exampleInputEmail1" class="form-label">Colono</label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Seleccionar...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-md-3 right">
                                            <button type="submit" class="btn btn-primary">Confirmar</button>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FormularioColono
