import React from 'react';

const LoginScreen = ({history}) => {

    const login = () => {
        // history.push('/');
        history.replace('/');
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={login}>
                Login
            </button>
        </div>
    )
}


export default LoginScreen;