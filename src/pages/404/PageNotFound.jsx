// import React from "react";

import "./style.scss";

// import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

// const PageNotFound = () => {
//     return (
//         <div className="pageNotFound">
//             <ContentWrapper>
//                 <span className="bigText">404</span>
//                 <span className="smallText">Page not found!</span>
//             </ContentWrapper>
//         </div>
//     );
// };

// export default PageNotFound;


import React, { useState } from 'react';

function LoginForm() {
    // State for form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        console.log('Email:', email, 'Password:', password);
        // Here, you would typically handle the login logic, 
        // such as sending a request to your authentication API
    };

    return (
        <div className="custom-container">
            <div className="title">Welcome back to <span className="highlight">App</span></div>
            <div className="subtitle">Log in to your account</div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email" className="label">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password" className="label">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <a className="forgot-password" href="#">Forgot your password?</a>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
            <div className="footer-text">Don’t have an account yet? <a className="sign-up-link" href="#">Sign up for free!</a></div>
        </div>
    );
}

export default LoginForm;
