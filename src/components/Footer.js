import React from 'react';
import '../styles/css/footer.min.css';

const Footer = () => {
    return (
        <div id='footer'>
            <p>Copyright &copy; { new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;