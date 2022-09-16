import React from 'react'
import add from '../img/addAvatar.png';
const RegisterPage = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">React Chat</span>
                <span className='title'>Register</span>
                <form>
                    <input type="text" placeholder='display name'/>
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <input type="file" id='file' style={{ display: "none" }} />
                    <label  htmlFor="file">
                        <img src={add} alt="no-img" />
                        <span>Add an Avatar</span>
                    </label>

                    <button>Sign up</button>
                </form>
                <p>Already have an account? Login</p>
            </div>
        </div>
    )
}

export default RegisterPage