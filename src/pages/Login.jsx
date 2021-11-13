import React from 'react'
const image_path = "./assets/img/TaurusCluster_sinFondo.png";
const Login = () => {
    return (
        <div className='m-0 vh-100 row justify-content-center align-items-center' >
            <div className="col-6 p-1 text-center bg-color1 card" style={{ width: "25rem" }}>
                <h1 className=''>Login</h1>

                <img src={image_path} class="card-img-top logo" alt="..." />
                <div class="card-body">
                    <form action="" className=''>
                        <img src="" alt="" />
                        <div className='form-group'>
                            <label htmlFor="email">Email</label>
                            <input type="email" className='form-control' id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">Password</label>
                            <input type="password" className='form-control' id="password" placeholder="Password" />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-gold">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
