import React from 'react';
import './Footer.css'
const Footer = () => {
    const today=new Date();
    const year=today.getFullYear();
    return (
        <div>
             <footer>
              <p><small>copyright &copy; {year}</small></p>
            </footer>
        </div>
    );
};

export default Footer;