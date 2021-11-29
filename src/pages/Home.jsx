import React from 'react'

const Home = () => {
    const image_path = "./assets/img/TaurusCluster_sinFondo.png";

    return (
        <div className="d-flex justify-content-center">
            <div className="card bg-color1" style={{ width: "100vh" }}>
                <img src={image_path} className="card-img-top logo" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">Beinvenido Clúster Taurus</h5>
                </div>
            </div>
        </div >
    )
}

export default Home
