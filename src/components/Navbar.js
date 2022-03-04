
import React from 'react';
import resume from '../Assets/Amanda_McBee_Resume (1).pdf';
import "./Navbar.css"

function NavBar({ currentPage, handlePageChange}) {
    return (
        <div className="nav">
            <p className="nav-bar">
                <p className="nav-item">
                    <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === "About" ? 'nav-link active' : 'nav-link'}>
                        About Me
                    </a>
                </p>
                <p className="nav-item">
                    <a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === "Projects" ? 'nav-link active' : 'nav-link'}>
                        Projects
                    </a>
                </p>
                <p className="nav-item">
                    <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === "Contact" ? 'nav-link active' : 'nav-link'}>
                        Contact Me
                    </a>
                </p>
                <p className="nav-item">
                    <a data-bs-toggle="offcanvas" target="_blank" rel="noreferrer" href={resume} role="button" aria-controls="offcanvasExample">
                        Resume
                    </a>
                </p>
            </p>
        </div>

    )
}

export default NavBar;