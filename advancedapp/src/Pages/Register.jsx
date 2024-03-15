
import React, { useEffect } from 'react';
import '../Pages/Register.css'; // Import your CSS file

const Register = () => {
    useEffect(() => {
        const labels = document.querySelectorAll('.form-control label');
        labels.forEach(label => {
            label.innerHTML = label.innerText
                .split('')
                .map((letter, index) => `<span style="transition-delay:${index * 40}ms">${letter}</span>`)
                .join('');
        });
    }, []);

    return (
        <div className="container">
            <h1>Register</h1>
            <form>
                <div className="form-control">
                    <input type="text" required name="username" />
                    <label>Username</label>
                </div>
                <div className="form-control">
                    <input type="text" required name="email" />
                    <label>Email</label>
                </div>
                <div className="form-control">
                    <input type="password" required name="password" />
                    <label>Password</label>
                </div>
                <button className="btn">Register</button>
                <p className="text">Already have an account? <a href="#">Login</a></p>
            </form>
        </div>
    );
};

export default Register;
