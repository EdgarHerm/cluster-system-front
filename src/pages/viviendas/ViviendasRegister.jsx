import React from 'react'

const ViviendasRegister = () => {
    const image = 'https://st.depositphotos.com/1658611/3469/i/600/depositphotos_34698097-stock-photo-street-of-large-suburban-homes.jpg'
    return (

        <div className="container">
            <form action="" className="bg-white m-5 ">
                <div class="card-header  bg-color2 text-center mb-2">
                    <h5 class="card-title">Registro de Viviendas</h5>
                </div>
                <div className="row ">
                    <div className="col-4 text-center  " >
                        <img src={image} alt="..." className="img-fluid rounded-middle ms-3 mt-2" />
                        <div className="form-group mt-3 mb-3">
                            <button type="submit" className="btn btn-gold">Guardar</button>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row m-2">
                            <div className="form-group col">
                                <label htmlFor="">Calle</label>
                                <input name='calle' type="text" className="form-control" />
                            </div>
                            <div className="form-group col">
                                <label htmlFor="">Número</label>
                                <input name='numero' type="text" className="form-control" />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="">Descripción</label>
                                <textarea name='descripcion' className="form-control" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ViviendasRegister
