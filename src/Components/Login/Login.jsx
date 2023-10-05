import React from 'react'
import './login.css'

function Login() {
  return (
    <section>
        <div className='container'>
            <div className='container-1' id='creden-con'>
                <div className='login-container'>
                    <div className='container-input'>
                    <p>Username</p>
                    <input></input></div>
                    <div className='container-input'>
                    <p>Password</p>
                    <input></input></div>
                    <button className='login-button'> login </button>
                </div>

            </div>
            <div className='container-1'>
                
            </div>


        </div>

    </section>
      
    
  )
}

export default Login
