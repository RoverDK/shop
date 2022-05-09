import { useState } from "react"
import { Link } from "react-router-dom"

export const Header = () => {

    const [isNavCollapse, setIsNavCollapse] = useState(true);

    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container px-4">
                    <Link to='/'
                    className="navbar-brand"
                    >Logo</Link>
                    <button
                        type="button" 
                        className="navbar-toggler"
                        data-toggle="collapse" 
                        data-target="#collapseExample" 
                        aria-expanded="false" 
                        aria-controls="collapseExample" 
                        onClick={() => setIsNavCollapse(!isNavCollapse)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icon-fix" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </button>
                    <div className={`${isNavCollapse ? 'collapse' : ''} navbar-collapse flex-grow-0 justify-content-center`} id="collapseExample">
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item me-2"><Link to='/' className="nav-link">Home</Link></li>
                            <li className="nav-item me-2"><Link to='contact' className="nav-link">Contact</Link></li>
                            <li className="nav-item"><Link to='about' className="nav-link">About</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}