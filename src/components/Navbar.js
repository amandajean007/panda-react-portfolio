
import React from 'react';

function NavBar({ currentPage, handlePageChange}) {
    return (
        <div className="nav">
            <ul className="nav-bar">
                <li className="nav-item">
                    <a href="#1" onClick={() => handlePageChange('1')} className={currentPage === "1" ? 'nav-link active' : 'nav-link'}>
                        <button class="glow-on-hover">
                            Password Generator
                        </button>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#2" onClick={() => handlePageChange('2')} className={currentPage === "2" ? 'nav-link active' : 'nav-link'}>
                        <button class="glow-on-hover">
                            Code Quiz
                        </button>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#3" onClick={() => handlePageChange('3')} className={currentPage === "3" ? 'nav-link active' : 'nav-link'}>
                        <button class="glow-on-hover">
                            Work Day Scheduler
                        </button>
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default NavBar;